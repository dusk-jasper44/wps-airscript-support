#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate extension/types/airscript.d.ts from the WPS AirScript markdown docs.

The docs live in ../docs (one .md per API page).  The generator understands the
following page shapes:

  * object overview : <Obj>__<Obj>.md            -> interface + inheritance
  * member page     : <Obj>__Methods|Properties|Events__<Name>.md
  * enum page       : Enum__<Name>.md            -> string literal union
  * a few old-tree pages (Source__*.md)          -> SyncDBSheet / SummarySourceConfigs

The output is intentionally a `declare namespace AirScript` so that object names
such as Record, Window, Navigator or User never collide with TypeScript's own
global lib.d.ts declarations.  Only Application and the built-in helper objects
are exposed globally, exactly like the AirScript runtime.

Usage:
    python tools/gen_dts.py           # write the .d.ts
    python tools/gen_dts.py --stats   # also print member/type statistics
"""

from __future__ import annotations

import os
import re
import sys
from collections import Counter, OrderedDict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, "docs")
OUT = os.path.join(ROOT, "extension", "types", "airscript.d.ts")
OUT_OPTIONAL = os.path.join(ROOT, "extension", "types", "airscript-builtins.d.ts")

# ---------------------------------------------------------------------------
# Names known to the generator
# ---------------------------------------------------------------------------

# Objects that are collections and therefore callable in the AirScript docs,
# e.g. `Application.Sheets(1)`, `view.RecordRange(1, ["@名称"])`.
CALLABLE = {
    "AutoLinkConditions": ("AutoLinkCondition", "Index?: number | string"),
    "AutoLinkGroups": ("AutoLinkGroup", "Index?: number | string"),
    "CascadeOptions": ("CascadeOption", "Index?: number | string"),
    "Charts": ("Chart", "Index?: number | string"),
    "FieldDescriptors": ("FieldDescriptor", "Index?: number | string"),
    "Fields": ("Field", "Index?: number | string"),
    "Filters": ("Filter", "Index?: number | string"),
    "Groups": ("Group", "Index?: number | string"),
    "PermissionSettings": ("PermissionSetting", "Index?: number | string"),
    "RecordComments": ("RecordComment", "Index?: number | string"),
    "RecordRange": (
        "RecordRange",
        "selector?: number | string | number[] | string[], "
        "fields?: number | string | number[] | string[]",
    ),
    "Records": ("Record", "Index?: number | string"),
    "Roles": ("Role", "Index?: number | string"),
    "Sheets": ("Sheet", "Index?: number | string"),
    "Sorts": ("Sort", "Index?: number | string"),
    "SummarySourceConfigs": ("SummarySourceConfig", "Index?: number | string"),
    "TextLinkRuns": ("TextLinkRun", "Index?: number | string"),
    "Views": ("AnyView", "Index?: number | string"),
}

# `Item` return types that the docs get wrong or leave empty.
ITEM_RETURN_OVERRIDE = {obj: ret for obj, (ret, _) in CALLABLE.items()}
ITEM_RETURN_OVERRIDE["RecordComments"] = "RecordComment"
ITEM_RETURN_OVERRIDE["Charts"] = "Chart"
ITEM_RETURN_OVERRIDE["Filters"] = "Filter"
ITEM_RETURN_OVERRIDE["Groups"] = "Group"
ITEM_RETURN_OVERRIDE["PermissionSettings"] = "PermissionSetting"
ITEM_RETURN_OVERRIDE["Roles"] = "Role"
ITEM_RETURN_OVERRIDE["Sheets"] = "Sheet"
ITEM_RETURN_OVERRIDE["SummarySourceConfigs"] = "SummarySourceConfig"
ITEM_RETURN_OVERRIDE["Views"] = "AnyView"

# Object overview pages only describe the members that are unique to a subclass;
# the shared members live on the base object.
INHERITS = {
    "GridView": "View",
    "CalendarView": "View",
    "FormView": "View",
    "GanttView": "View",
    "KanbanView": "View",
    "QueryView": "View",
    "SyncDBSheet": "Sheet",
    "SummarySheet": "SyncDBSheet",
}

VIEW_TYPES = ["View", "CalendarView", "FormView", "GanttView", "GridView", "KanbanView", "QueryView"]

# Old tree pages that are still the only documentation for these members.
OLD_TREE_OBJECTS = {"SyncDBSheet", "SummarySourceConfigs", "DataSource"}

# Enums that are referenced by name but have no (downloaded) enum page.
EXTRA_ENUM_TYPES = {
    "DbAttachmentDisplayStyle": "string",
    "DbAutolinkCondType": "string",
    "DbFieldDefaultValueType": "string",
    # FieldDescriptor.Type / Field.Type return this table, but there is no
    # Enum__DbSheetFieldType.md page.
    "DbSheetFieldType": (
        "'ID' | 'Phone' | 'Email' | 'Url' | 'Checkbox' | 'SingleSelect' | "
        "'MultipleSelect' | 'Rating' | 'Complete' | 'CellPicture' | 'Contact' | "
        "'Attachment' | 'Note' | 'Link' | 'OneWayLink' | 'Lookup' | 'Address' | "
        "'Cascade' | 'Automations' | 'AutoNumber' | 'CreatedBy' | 'CreatedTime' | "
        "'LastModifiedBy' | 'LastModifiedTime' | 'Formula'"
    ),
}

# Interfaces that are referenced from docs pages but whose own page 404s.
MANUAL_INTERFACES = {
    "GridViewUI": """\
  /** 表格视图的界面设置（官方文档页缺失，保留宽松类型）。 */
  interface GridViewUI {
    [key: string]: any;
  }""",
    # Sheets.Add 的 Config 参数在文档里只写了对象字面量结构，没有独立页面。
    "SheetAddField": """\
  /** Sheets.Add 中 fields 数组的元素。 */
  interface SheetAddField {
    /** 字段类型，如 'SingleLineText'、'MultiLineText'、'Number'、'Date'、'SingleSelect'、'Rating'。 */
    fieldType: string;
    /** 字段参数。 */
    args: {
      /** 字段名。 */
      fieldName: string;
      /** 字段宽度。 */
      fieldWidth?: number;
      /** 单选/多选字段的选项。 */
      listItems?: { value: string; color: number }[];
      /** 日期/数字字段的格式。 */
      numberFormat?: string;
      /** 评分字段的最大分值。 */
      maxRating?: number;
    };
  }""",
    "SheetAddView": """\
  /** Sheets.Add 中 views 数组的元素。 */
  interface SheetAddView {
    /** 视图名。 */
    name: string;
    /** 视图类型；文档称当前只实际支持 Grid 和 Form。 */
    type: 'Grid' | 'Kanban' | 'Gallery' | 'Form' | 'Gantt' | 'Query' | 'Calendar';
  }""",
    "SheetAddConfig": """\
  /** Sheets.Add 的 Config 参数。 */
  interface SheetAddConfig {
    /** 字段数组。 */
    fields?: SheetAddField[];
    /** 数据表名，默认为 data1。 */
    name?: string;
    /** 视图配置数组，默认创建 Grid。 */
    views?: SheetAddView[];
  }""",
}

# Type aliases that are not object interfaces.
MANUAL_TYPES = {
    "SheetType": (
        "'xlEtFlexPaperSheet' | 'xlEtDataBaseSheet' | 'xlDbDashBoardSheet'"
    ),
}

# Parameter-level types the docs describe only in prose.
PARAM_TYPE_OVERRIDES = {
    ("Sheets", "Add", "Type"): "SheetType",
    ("Sheets", "Add", "Config"): "SheetAddConfig",
}

# Some newer pages document an object argument in the example
# (e.g. Storage.GetValue({ StorageKey: "k" })) while the parameter table
# lists the object's properties positionally.  Keep the documented call
# shape here.
SIGNATURE_OVERRIDES = {
    ("Sheet", "Export"): ("options: { Type: string }", "any"),
    ("Storage", "GetValue"): ("options: { StorageKey: string }", "string"),
    ("Storage", "GetValue_Plugin"): ("options: { StorageKey: string; PluginInstanceId: string }", "string"),
    ("Storage", "SetValue"): ("options: { StorageKey: string; StorageValue?: string | null }", "any"),
    ("Storage", "SetValue_Plugin"): ("options: { StorageKey: string; StorageValue?: string | null; PluginInstanceId: string }", "any"),
    ("Permission", "AddUser"): ("options: { Type: number; UserIds: string[] }", "ApiResult"),
    ("Permission", "DeleteUser"): ("options: { Type: number; UserId: string }", "ApiResult"),
    ("Misc", "GetAttachmentUrl"): ("options?: { fileName?: string; source?: string; fileId?: string; linkUrl?: string; uploadId?: string; type?: string; fileType?: string; noCache?: boolean }", "any"),
}

# Aliases used in prose / return values.
TYPE_ALIASES = {
    "DbCellValue": "DBCellValue",
    "DbSheet": "Sheet",
    "SyncSheet": "Sheet",
    "DbSheet[]": "Sheet[]",
    "SyncSheet[]": "Sheet[]",
    "DbUser": "User",
    "RoleUsers": "User[]",
    "PermissionType": "DbPermissionType",
    "RoleBuildInType": "RoleBuiltInType",
    "Array": "any[]",
    "Object": "any",
    "File": "any",
    "function": "(...args: any[]) => any",
    "Function": "(...args: any[]) => any",
    "func": "(...args: any[]) => any",
}

# Extra members whose pages 404 on the docs CDN but which are visible in the
# object pages / examples.
MANUAL_MEMBERS = {
    "View": [
        ("property", "Type", "string", "视图类型", True),
    ],
    "Attachment": [
        ("property", "Source", "any", "附件来源", True),
    ],
    # 官方 SetValues 示例写的是小写 code/Message，这里同时保留两种写法。
    "ApiResult": [
        ("property", "code", "number", "执行结果码（小写写法，与 Code 同义；0 表示成功）", True),
        ("property", "message", "string", "执行结果说明（小写写法，与 Message 同义）", True),
    ],
}

# A few generated types are technically true but too strict for the way the
# docs actually use the API (RecordRange.Value accepts primitives, arrays and
# DBCellValue).
TYPE_OVERRIDES = {
    ("RecordRange", "Value"): "any",
    ("RecordRange", "Text"): "string",
    ("Record", "Value"): "any",
    ("ApiResult", "Code"): "number",
    ("ApiResult", "Message"): "string",
}

# Application-level members.  Some are documented only through examples, there
# is no Application page in the docs tree.
APPLICATION_MEMBERS = """\
  /** 数据表集合。既可作为集合使用（Application.Sheets.Count），也可直接调用：Application.Sheets(1)。 */
  Sheets: Sheets;
  /** 当前激活的数据表（合并表场景下也可能是 SummarySheet）。 */
  ActiveSheet: SummarySheet;
  /** 当前激活的视图。具体类型可能是表格、看板、日历、甘特、表单、查询视图之一。 */
  ActiveView: AnyView;
  /** 记录区间构造器：Application.RecordRange(1)、Application.RecordRange(1, ["@名称"])。 */
  RecordRange: RecordRange;
  /** 当前选中的记录区间。 */
  Selection: Selection;
  /** 旧版文件保护 / 权限组能力（注意属性名是复数 Permissions）。 */
  Permissions: Permission;
  /** 权限对象。 */
  Permission2: Permission2;
  /** 数据源（导入、创建同步表/合并表）。 */
  DataSource: DataSource;
  /** 合并表数据源配置。 */
  SummarySourceConfigs: SummarySourceConfigs;
  /** 当前文件的键值存储。 */
  Storage: Storage;
  /** 杂项工具（附件预览地址等）。 */
  Misc: Misc;
  /** 自动化任务相关能力。 */
  AutoTask: AutoTask;
  /** 窗口对象（仅在浏览器环境使用，脚本编辑器中不适用）。 */
  Window: Window;
  /** 枚举命名空间；文档中也可以用 app.Enum.DbXxx 访问。 */
  Enum: typeof Enum;
  /** 构造字段描述对象：Application.FieldDescriptor(Enum.DbSheetFieldType.Lookup, "名称")。 */
  FieldDescriptor(type: DbSheetFieldType, name?: string): FieldDescriptor;
  /** 构造单元格复杂值，用于写入多选、联系人、地址、附件等字段。 */
  DBCellValue(value: any): DBCellValue;
  /** 构造筛选条件：Application.Criteria("@文本", "Equals", ["1"])。 */
  Criteria(field: number | string, op?: DbFilterCriteriaOpType, values?: any[]): Criteria;
  /** 构造自动关联条件集合。 */
  AutoLinkGroups(): AutoLinkGroups;
  /** 构造级联选项集合。 */
  CascadeOptions(): CascadeOptions;
  /** 通过用户 id（可选名称、头像）构造用户对象。 */
  User(id: string, name?: string, avatar?: string): User;
"""

# Built-in helpers that never collide with lib.dom.
BUILTIN_GLOBALS = """\
declare const Buffer: {
  /** 从字节数组（0-255）创建 Buffer。 */
  from(array: number[]): AirScript.Buffer;
  /** 从字符串创建 Buffer，默认 utf8。 */
  from(string: string, encoding?: string): AirScript.Buffer;
  /** 从 ArrayBuffer 创建 Buffer。 */
  from(arrayBuffer: ArrayBuffer, byteOffset?: number, length?: number): AirScript.Buffer;
};

declare const Time: {
  /** 休眠指定毫秒数（AirScript 是同步执行模型，没有 setTimeout）。 */
  sleep(millisecond: number): void;
};

declare const Arguments: {
  /** 读取脚本自定义参数，key 支持 a.b 形式的多级查找。 */
  get(key: string, defaults?: any): any;
};
"""

# `console` and `Crypto` clash with lib.dom (which declares both).  They live in
# an optional file that the extension references only when `lib` does not contain
# DOM; otherwise the DOM versions are used and only `Crypto.createHash(...)` calls
# stay untyped.  This keeps existing browser-ish projects free of TS2451 errors.
OPTIONAL_GLOBALS = """\
declare const console: {
  log(...data: any[]): void;
  info(...data: any[]): void;
  warn(...data: any[]): void;
  error(...data: any[]): void;
  debug(...data: any[]): void;
};

declare const Crypto: {
  /** 创建摘要算法实例，algorithm 支持 "md5" / "sha1" / "sha" / "sha256" / "sha512"。 */
  createHash(algorithm: string): AirScript.Hash;
  /** 创建 HMAC 算法实例。 */
  createHmac(algorithm: string, key: string): AirScript.Hmac;
};
"""

# ---------------------------------------------------------------------------
# Small helpers
# ---------------------------------------------------------------------------

HEAD_RE = re.compile(r"^\s{0,3}#{1,6}\s+(.*)$")
SEC_RE = re.compile(r"^##\s+(.+?)\s*$", re.M)
TITLE_RE = re.compile(
    r"^\s{0,3}#?\s*([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\((方法|属性)\)\s*$",
    re.M,
)
LINK_RE = re.compile(r"\[([^\]]*)\]\([^)]*\)")


def read(path: str) -> str:
    with open(path, "r", encoding="utf-8-sig", errors="replace") as fh:
        return fh.read()


def sections(text: str) -> "OrderedDict[str, str]":
    """Return heading -> body for all level-2 sections."""
    out: "OrderedDict[str, str]" = OrderedDict()
    matches = list(SEC_RE.finditer(text))
    for i, m in enumerate(matches):
        end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        out[m.group(1).strip()] = text[m.end():end]
    return out


def get_section(text: str, name: str) -> str:
    return sections(text).get(name, "")


def strip_links(value: str) -> str:
    return LINK_RE.sub(r"\1", value)


def first_line(text: str) -> str:
    for line in text.splitlines():
        line = line.strip()
        if line:
            return line
    return ""


def clean_javadoc(text: str) -> str:
    text = text.replace("*/", "*\\/")
    lines = [ln.rstrip() for ln in text.splitlines()]
    # drop empty leading/trailing lines
    while lines and not lines[0].strip():
        lines.pop(0)
    while lines and not lines[-1].strip():
        lines.pop()
    return "\n".join(lines)


def make_jsdoc(text: str, tags: list[str] | None = None) -> str:
    text = clean_javadoc(text)
    tags = tags or []
    if not text and not tags:
        return ""
    lines = ["/**"]
    for line in text.splitlines():
        lines.append(" * " + line if line else " *")
    if text and tags:
        lines.append(" *")
    for tag in tags:
        lines.append(" * " + tag)
    lines.append(" */")
    return "\n".join(lines)


def indent(text: str, spaces: int) -> str:
    pad = " " * spaces
    return "\n".join(pad + line if line else "" for line in text.splitlines())


def parse_table(body: str) -> tuple[list[str], list[list[str]]]:
    """Parse a markdown table.  Returns (headers, rows)."""
    rows: list[list[str]] = []
    for line in body.splitlines():
        line = line.strip()
        if not line.startswith("|"):
            continue
        # "\|" is an escaped pipe inside a cell, not a column separator.
        line = line.replace("\\|", "\x00")
        cells = [c.strip().replace("\x00", "|") for c in line.strip("|").split("|")]
        if all(re.fullmatch(r":?-{2,}:?", c.replace(" ", "")) for c in cells if c):
            continue
        rows.append(cells)
    if not rows:
        return [], []
    headers = [h.strip() for h in rows[0]]
    return headers, rows[1:]


def table_col(headers: list[str], name: str, default: int) -> int:
    for i, h in enumerate(headers):
        if h.replace(" ", "") == name:
            return i
    return default


# ---------------------------------------------------------------------------
# Type mapping
# ---------------------------------------------------------------------------


class TypeMapper:
    def __init__(self, interface_names: set[str], enum_names: set[str]):
        self.interfaces = interface_names
        self.enums = enum_names
        self.unknown: Counter[str] = Counter()

    def map(self, raw: str) -> str:
        raw = (raw or "").strip()
        if not raw:
            return "any"
        if raw.startswith("|"):  # documentation table, not a type
            return "any"

        raw = strip_links(raw)
        raw = raw.replace("`", "").strip()

        # A table like "|字段类型|描述|" is handled by the caller special case.
        if raw in ("无", "None", "none"):
            return "void"

        if raw.startswith("Array "):  # "Array 表单视图下所有必填字段..."
            return "any[]"

        # Object literal types, e.g. `{type: string,value: string,...}`.
        if raw.startswith("{") and raw.endswith("}"):
            return self._map_object_literal(raw[1:-1])

        # Normalise quotes used for enum-like values.
        raw = raw.replace("“", '"').replace("”", '"').replace("‘", "'").replace("’", "'")
        # Markdown escapes table pipes as "\|"; that is a separator, not a token.
        raw = raw.replace("\\|", "|")

        # Split only on separators that really mean a union.
        parts = re.split(r"\s*(?:\||/|,|、|或)\s*", raw)
        mapped: list[str] = []
        for part in parts:
            part = part.strip().strip(".")
            if not part:
                continue
            m = self._map_single(part)
            if m is None:
                self.unknown[part] += 1
                m = "any"
            if m not in mapped:
                mapped.append(m)
        if not mapped:
            return "any"
        if len(mapped) == 1:
            return mapped[0]
        return " | ".join(mapped)

    def _map_object_literal(self, body: str) -> str:
        fields: list[str] = []
        depth = 0
        current = ""
        for ch in body:
            if ch in "{[":
                depth += 1
            elif ch in "}]":
                depth -= 1
            if ch == "," and depth == 0:
                fields.append(current)
                current = ""
            else:
                current += ch
        if current.strip():
            fields.append(current)

        rendered: list[str] = []
        for field in fields:
            if ":" not in field:
                continue
            key, value = field.split(":", 1)
            key = key.strip().strip("'\"")
            value = self.map(value)
            rendered.append(f"{key}: {value}")
        return "{ " + "; ".join(rendered) + " }" if rendered else "any"

    def _map_single(self, token: str) -> str | None:
        token = token.strip()
        if not token:
            return None

        # `Enum.DbButtonIcon.CalendarCheckIn` -> `DbButtonIcon`
        if token.startswith("Enum."):
            return self._map_single(token[5:].split(".")[0])

        # string / number / boolean literal unions
        if re.fullmatch(r"(['\"]).*\1", token):
            inner = token[1:-1]
            if inner in self.interfaces or inner in self.enums or inner in EXTRA_ENUM_TYPES:
                return inner
            return token[0] + inner + token[0]
        if token.startswith("'") and token.endswith("'"):
            inner = token[1:-1]
            if inner in self.interfaces or inner in self.enums:
                return inner
            return token
        if token.startswith('"') and token.endswith('"'):
            inner = token[1:-1]
            if inner in self.interfaces or inner in self.enums:
                return inner
            return "'" + inner.replace("'", "\\'") + "'"

        low = token.lower()
        primitives = {
            "boolean": "boolean",
            "bool": "boolean",
            "number": "number",
            "string": "string",
            "any": "any",
            "void": "void",
            "null": "null",
            "undefined": "undefined",
            "this": "this",
            "self": "this",
            "eventcontext": "EventContext",
            "apiresult": "ApiResult",
            "array": "any[]",
            "object": "any",
            "[object object]": "any",
            "javascript": "any",
        }
        if low in primitives:
            return primitives[low]

        if token in TYPE_ALIASES:
            alias = TYPE_ALIASES[token]
            if alias.endswith("[]") and alias[:-2] in self.interfaces:
                return alias
            return alias

        # Foo[]
        if token.endswith("[]"):
            base = token[:-2].strip()
            mapped_base = self._map_single(base)
            if mapped_base is None:
                return None
            if mapped_base in ("any", "this"):
                return "any[]"
            if "|" in mapped_base:
                return f"({mapped_base})[]"
            return mapped_base + "[]"

        if token in self.interfaces:
            return token
        if token in self.enums:
            return token
        if token in EXTRA_ENUM_TYPES:
            return token

        # Array-like spellings: [number], Number/String[] handled by split.
        if token.startswith("[") and token.endswith("]"):
            return self._map_single(token[1:-1])

        return None


# ---------------------------------------------------------------------------
# Parsing
# ---------------------------------------------------------------------------


class Member:
    __slots__ = ("obj", "name", "kind", "desc", "params", "ret", "readonly", "payload", "origin", "example")

    def __init__(self, obj: str, name: str, kind: str, origin: str):
        self.obj = obj
        self.name = name
        self.kind = kind  # property | method | event
        self.origin = origin
        self.desc = ""
        self.params: list[tuple[str, bool, str, str]] = []
        self.ret = "any"
        self.readonly = False
        self.payload: list[tuple[str, str, str]] = []
        self.example = ""


NEW_PREFIX = "app-integration-dev__guide__dbsheet__Api__Api__"
DOC_BASE = "https://open.wps.cn/documents/app-integration-dev/guide/dbsheet/Api/Api"
FENCE_RE = re.compile(r"```[ \t]*(?:javascript|js|typescript|ts)?[ \t]*\r?\n(.*?)```", re.S)


def example_from_sections(secs: "OrderedDict[str, str]") -> str:
    """Return the first script-editor example code block, if any.

    Most pages use ``## 脚本编辑器示例`` but a large minority use
    ``## 脚本编辑器 示例`` (with a space); both normalize to the same key.
    The browser example is deliberately ignored: it uses ``instance.ready()``
    and ``async``, which AirScript does not support.
    """
    for key, body in secs.items():
        norm = key.replace(" ", "")
        if norm.startswith("脚本编辑器") and "示例" in norm:
            match = FENCE_RE.search(body)
            code = match.group(1) if match else body
            code = code.strip("\n").rstrip()
            if not code:
                continue
            lines = code.splitlines()
            if len(lines) > 40:
                lines = lines[:40] + ["// ...（完整示例见官方文档）"]
            return "\n".join(lines)
    return ""


def example_tag(code: str) -> str:
    if not code:
        return ""
    body = "\n".join(" * " + line if line.strip() else " *" for line in code.splitlines())
    return "@example\n * ```javascript\n" + body + "\n * ```"


def doc_url(origin: str) -> str:
    if origin.startswith(NEW_PREFIX) and origin.endswith(".md"):
        seg = origin[len(NEW_PREFIX):-3].split("__")
        if len(seg) == 3 and seg[1] in ("Methods", "Properties", "Events"):
            return f"{DOC_BASE}/{seg[0]}/{seg[1]}/{seg[2]}"
    return ""


def filename_member(fn: str) -> tuple[str, str, str] | None:
    """Return (object, member, kind) from a new-tree filename, else None.

    The page titles contain a fair number of typos (FormView page titled
    FormViewUI, QueryView page titled GridView, RatingField titled RatingFeild),
    so the filename is the authoritative source for the object name.
    """
    if not fn.startswith(NEW_PREFIX) or not fn.endswith(".md"):
        return None
    seg = fn[len(NEW_PREFIX):-3].split("__")
    if len(seg) == 3 and seg[1] in ("Methods", "Properties", "Events"):
        kind = {"Methods": "method", "Properties": "property", "Events": "event"}[seg[1]]
        return seg[0], seg[2], kind
    return None


def parse_member(path: str, text: str) -> Member | None:
    fn = os.path.basename(path)
    fm = filename_member(fn)
    m = TITLE_RE.search(text)

    if fm:
        # Trust the filename for new-tree pages; titles have typos and some
        # pages omit the "(方法)" suffix entirely (e.g. Sheets.Item).
        obj, name, kind = fm
    elif m:
        obj, name, kind_cn = m.group(1), m.group(2), m.group(3)
        kind = "property" if kind_cn == "属性" else "method"
    else:
        # fall back to the old-tree filename shape <Obj>__<Name>.md
        parts = fn[:-3].split("__")
        if len(parts) == 3 and parts[1] in ("Methods", "Properties", "Events"):
            obj, name = parts[0], parts[2]
            kind = {"Methods": "method", "Properties": "property", "Events": "event"}[parts[1]]
        else:
            return None

    if not obj or not name:
        return None

    member = Member(obj, name, kind, fn)
    secs = sections(text)

    desc = (secs.get("说明") or "").strip()
    member.desc = desc
    member.example = example_from_sections(secs)

    if kind == "property":
        first = first_line(desc)
        if first in ("可读写", "可读", "只读"):
            member.readonly = first in ("可读", "只读")
            desc = desc.split("\n", 1)[1] if "\n" in desc else ""
            member.desc = desc.strip()
        else:
            member.readonly = False

    # Parameters ------------------------------------------------------------
    pheaders, prows = parse_table(secs.get("参数", ""))
    if prows:
        ni = table_col(pheaders, "参数名", 0)
        ri = table_col(pheaders, "是否必需", 1)
        ti = table_col(pheaders, "类型", 2)
        di = table_col(pheaders, "描述", 3)
        for row in prows:
            if len(row) <= max(ni, ti):
                continue
            pname = row[ni].strip().strip("`")
            if not pname or pname in ("参数名", "---") or set(pname) <= set("-: "):
                continue
            required = row[ri].strip() if len(row) > ri else "是"
            ptype = row[ti].strip() if len(row) > ti else ""
            pdesc = row[di].strip() if len(row) > di else ""
            member.params.append((pname, required in ("是", "必需", "true", "True"), ptype, pdesc))

    # Syntax: use its argument names/order when present, because the table
    # occasionally omits a parameter or adds a stray one.
    syntax = secs.get("语法", "")
    syntax_args: list[str] = []
    for line in syntax.splitlines():
        line = line.strip()
        if "表达式" in line and "(" in line and ")" in line:
            inside = line[line.rindex("(") + 1:line.rindex(")")]
            syntax_args = [a.strip().strip("[]").strip() for a in inside.split(",") if a.strip()]
            break

    if syntax_args:
        by_name = {p[0].lower(): p for p in member.params}
        ordered: list[tuple[str, bool, str, str]] = []
        for i, arg in enumerate(syntax_args):
            found = by_name.get(arg.lower())
            if found:
                ordered.append(found)
            elif i < len(member.params):
                p = member.params[i]
                ordered.append((arg, p[1], p[2], p[3]))
            else:
                ordered.append((arg, True, "", ""))
        member.params = ordered

    # Return value ----------------------------------------------------------
    ret_body = (secs.get("返回值") or "").strip()
    if ret_body.startswith("|字段类型|") or ret_body.startswith("| 字段类型"):
        member.ret = "DbSheetFieldType"
    else:
        member.ret = first_line(ret_body) or ("void" if member.kind == "method" else "any")

    # Event payload ---------------------------------------------------------
    payload_body = (secs.get("事件返回数据") or "").strip()
    if payload_body:
        member.kind = "event"
        headers, rows = parse_table(payload_body)
        if rows:
            ni = table_col(headers, "名称", 0)
            ti = table_col(headers, "类型", 1)
            di = table_col(headers, "说明", 2)
            for row in rows:
                if len(row) <= ti:
                    continue
                member.payload.append(
                    (
                        row[ni].strip() if len(row) > ni else "",
                        row[ti].strip() if len(row) > ti else "",
                        row[di].strip() if len(row) > di else "",
                    )
                )
        else:
            single = first_line(payload_body)
            if single:
                member.payload.append(("data", single, ""))

    return member


def parse_enum(path: str, text: str) -> tuple[str, list[tuple[str, str, str]]] | None:
    fn = os.path.basename(path)
    if "__Enum__" not in fn and not fn.startswith("Enum__"):
        return None
    secs = sections(text)
    body = ""
    for key, val in secs.items():
        if key == "枚举值" or "|枚举值|" in val:
            body = val
            break
    if not body:
        body = text

    headers, rows = parse_table(body)
    if not headers or "枚举值" not in headers:
        return None
    vi = table_col(headers, "字符串值", 1)
    di = table_col(headers, "描述", 2)
    values: list[tuple[str, str, str]] = []
    enum_name = ""
    for row in rows:
        if len(row) <= vi:
            continue
        left = row[0].strip()
        if "." not in left:
            continue
        prefix, member = left.split(".", 1)
        prefix, member = prefix.strip(), member.strip()
        if not enum_name:
            enum_name = prefix
        literal = row[vi].strip()
        if len(literal) >= 2 and literal[0] in "'\"" and literal[-1] == literal[0]:
            literal = literal[1:-1]
        desc = row[di].strip() if len(row) > di else ""
        values.append((member, literal, desc))
    if not enum_name:
        enum_name = fn[:-3].split("__")[-1]
    return enum_name, values


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


def main() -> int:
    stats = "--stats" in sys.argv

    files = sorted(f for f in os.listdir(DOCS) if f.endswith(".md"))
    objects: set[str] = set()
    object_desc: dict[str, str] = {}
    enums: dict[str, list[tuple[str, str, str]]] = {}
    enum_origins: dict[str, str] = {}
    enum_descs: dict[str, str] = {}
    members: list[Member] = []
    unknown: Counter[str] = Counter()

    # --- object overview pages / enums ---
    for fn in files:
        path = os.path.join(DOCS, fn)
        text = read(path)
        parts = fn[:-3].split("__")

        enum_info = parse_enum(path, text)
        if enum_info:
            enums[enum_info[0]] = enum_info[1]
            enum_origins[enum_info[0]] = fn
            enum_descs[enum_info[0]] = (get_section(text, "说明") or "").strip()
            continue

        if fn.startswith(NEW_PREFIX):
            seg = fn[len(NEW_PREFIX):-3].split("__")
            if len(seg) == 2 and seg[0] == seg[1]:
                objects.add(seg[0])
                object_desc[seg[0]] = (get_section(text, "说明") or "").strip()

    # --- member pages ---
    for fn in files:
        path = os.path.join(DOCS, fn)
        text = read(path)
        if fn.startswith("app-integration-dev__guide__dbsheet__Api__Source__") and "__Api__Api__" not in fn:
            # old tree: only take the handful of pages that are still canonical
            m = TITLE_RE.search(text)
            if not m or m.group(1) not in OLD_TREE_OBJECTS:
                continue
        member = parse_member(path, text)
        if not member:
            continue
        if member.obj == "Enum":
            continue
        objects.add(member.obj)
        members.append(member)

    # --- merge manual members ---
    for obj, items in MANUAL_MEMBERS.items():
        objects.add(obj)
        existing = {(m.name, m.kind) for m in members if m.obj == obj}
        for kind, name, ret, desc, readonly in items:
            if (name, kind) in existing:
                continue
            m = Member(obj, name, kind, "<manual>")
            m.ret = ret
            m.desc = desc
            m.readonly = readonly
            members.append(m)

    # --- de-duplicate (prefer the new-tree page, then methods) ---
    by_key: dict[tuple[str, str], Member] = {}
    for m in members:
        key = (m.obj, m.name)
        if key not in by_key:
            by_key[key] = m
        else:
            prev = by_key[key]
            rank = {"property": 0, "method": 1, "event": 2}
            if rank[m.kind] > rank[prev.kind]:
                by_key[key] = m
    members = sorted(by_key.values(), key=lambda m: (m.obj, m.name))

    interface_names = set(objects)
    interface_names.update({"Application", "EventContext", "User", "AnyView", "Hash", "Hmac"})
    interface_names.update(MANUAL_INTERFACES)
    enum_names = set(enums) | set(EXTRA_ENUM_TYPES)
    tm = TypeMapper(interface_names, enum_names)

    # --- build interface bodies ---
    # group members by object
    grouped: dict[str, list[Member]] = {obj: [] for obj in objects}
    for m in members:
        grouped.setdefault(m.obj, []).append(m)

    def member_line(m: Member) -> str:
        extra: list[str] = []
        example = example_tag(m.example)
        if example:
            extra.append(example)
        see = doc_url(m.origin)
        if see:
            extra.append("@see " + see)
        doc = make_jsdoc(m.desc, extra)
        if m.kind == "property":
            if m.name == "Count":
                ret = "number"
            else:
                ret = TYPE_OVERRIDES.get((m.obj, m.name)) or tm.map(m.ret)
            readonly = "readonly " if m.readonly else ""
            line = f"{readonly}{m.name}: {ret};"
        elif m.kind == "event":
            if len(m.payload) == 1 and m.payload[0][0] == "data":
                ptype = tm.map(m.payload[0][1])
                cb = f"(data: {ptype}) => void"
                tags = ["@param callback 事件回调，data 为事件返回数据"]
            elif m.payload:
                data_name = f"{m.obj}{m.name}EventData"
                cb = f"(data: {data_name}) => void"
                tags = ["@param callback 事件回调，data 为事件返回数据"]
            else:
                cb = "() => void"
                tags = ["@param callback 事件回调"]
            doc = make_jsdoc(m.desc, tags + extra)
            line = f"{m.name}(callback: {cb}): EventContext;"
        else:
            override = SIGNATURE_OVERRIDES.get((m.obj, m.name))
            if override:
                params_str, ret = override
                sig = f"{m.name}({params_str}): {ret};"
                tags = ["@param options 参数对象"] if "options" in params_str else []
                doc = make_jsdoc(m.desc, tags + extra)
                return (doc + "\n" if doc else "") + sig
            params: list[str] = []
            tags: list[str] = []
            # TypeScript does not allow a required parameter after an optional
            # one.  When the docs do that (e.g. Sheets.Add(Before?, After?,
            # Type, Config?)), keep the required flag and make the preceding
            # optional parameters required-but-nullable, matching the docs'
            # instruction to pass null for the unused Before/After slot.
            last_required = max(
                (i for i, p in enumerate(m.params) if p[1]), default=-1
            )
            force_required = (
                {
                    i
                    for i, p in enumerate(m.params[:last_required])
                    if not p[1]
                }
                if last_required > 0
                else set()
            )
            for i, (pname, required, ptype, pdesc) in enumerate(m.params):
                mapped = PARAM_TYPE_OVERRIDES.get(
                    (m.obj, m.name, pname)
                ) or tm.map(ptype)
                required = required or i in force_required
                if i in force_required and "null" not in mapped:
                    mapped += " | null"
                params.append(f"{pname}: {mapped}" if required else f"{pname}?: {mapped}")
                if pdesc:
                    tags.append(f"@param {pname} {pdesc}")
            ret_raw = m.ret
            if m.obj in ITEM_RETURN_OVERRIDE and m.name == "Item":
                ret = ITEM_RETURN_OVERRIDE[m.obj]
            else:
                ret = tm.map(ret_raw)
            sig = f"{m.name}({', '.join(params)}): {ret};"
            if ret not in ("void", "any"):
                tags.append(f"@returns {tm.map(ret_raw) if ret_raw else ret}")
            doc = make_jsdoc(m.desc, tags + extra)
            line = sig
        return (doc + "\n" if doc else "") + line

    # --- emit interfaces ---
    out: list[str] = []
    out.append("// Type definitions for WPS 多维表格 AirScript")
    out.append("// AUTO-GENERATED by tools/gen_dts.py from docs/*.md -- do not edit by hand.")
    out.append("// Most AirScript APIs are synchronous; a few newer ones (Sheet.Export,")
    out.append("// Storage/Misc) return Promise and are marked in their JSDoc.")
    out.append("")
    out.append("declare namespace AirScript {")

    # EventContext first
    out.append("  /** 事件监听句柄，调用 Destroy() 取消监听。 */")
    out.append("  interface EventContext {")
    out.append("    /** 取消该事件监听。 */")
    out.append("    Destroy(): void;")
    out.append("  }")
    out.append("")


    # simple built-in types
    out.append("  /** 摘要对象（Crypto.createHash 的返回值）。 */")
    out.append("  interface Hash {")
    out.append("    update(data: string | Buffer, inputEncoding?: string): Hash;")
    out.append("    digest(encoding: 'hex' | 'base64' | 'latin1'): string;")
    out.append("    digest(): Buffer;")
    out.append("  }")
    out.append("")
    out.append("  /** HMAC 对象（Crypto.createHmac 的返回值）。 */")
    out.append("  interface Hmac {")
    out.append("    update(data: string | Buffer, inputEncoding?: string): Hmac;")
    out.append("    digest(encoding: 'hex' | 'base64' | 'latin1'): string;")
    out.append("    digest(): Buffer;")
    out.append("  }")
    out.append("")
    out.append("  /** Buffer 实例，由全局 Buffer.from(...) 创建。 */")
    out.append("  interface Buffer {")
    out.append("    toString(encoding?: string): string;")
    out.append("  }")
    out.append("")

    # enum unions
    if enums:
        out.append("  // ---------------------------------------------------------------------")
        out.append("  // Enums (string literal unions)")
        out.append("  // ---------------------------------------------------------------------")
        for name in sorted(enums):
            values = enums[name]
            if not values:
                continue
            desc = enum_descs.get(name) or f"{name} 枚举值。"
            out.append("  /**")
            for line in desc.splitlines():
                out.append("   * " + line if line.strip() else "   *")
            origin = enum_origins.get(name, "")
            if origin.endswith(".md"):
                out.append(f"   * @see {DOC_BASE}/Enum/{name}")
            out.append("   */")
            union = " | ".join("'" + v[1].replace("'", "\\'") + "'" for v in values)
            out.append(f"  type {name} = {union};")
            if name == "RoleBuiltInType":
                out.append("  /** @deprecated 文档中的旧拼写，等同于 RoleBuiltInType。 */")
                out.append("  type RoleBuildInType = RoleBuiltInType;")
        for name, alias in EXTRA_ENUM_TYPES.items():
            if name in enums:
                continue
            out.append(f"  /** {name}（文档未列出具体取值）。 */")
            out.append(f"  type {name} = {alias};")
        out.append("")

    # AnyView
    out.append("  /** 任意视图类型：视图可能是表格、日历、表单、甘特、看板或查询视图。 */")
    out.append("  type AnyView = " + " & ".join(VIEW_TYPES) + ";")
    out.append("")

    for name, alias in MANUAL_TYPES.items():
        out.append(f"  /** {name} 的取值。 */")
        out.append(f"  type {name} = {alias};")
    if MANUAL_TYPES:
        out.append("")

    # object interfaces
    for obj in sorted(objects):
        if obj in ("Enum", "Application"):
            continue
        desc = object_desc.get(obj, "").strip()
        if not desc:
            desc = f"{obj} 对象。"
        doc = make_jsdoc(desc)
        ext = f" extends {INHERITS[obj]}" if obj in INHERITS else ""
        out.append(doc)
        out.append(f"  interface {obj}{ext} {{")

        if obj in CALLABLE:
            ret, params = CALLABLE[obj]
            has_count = any(m.name == "Count" and m.kind == "property" for m in grouped.get(obj, []))
            if not has_count:
                out.append("    /** 集合中的元素个数。 */")
                out.append("    readonly Count: number;")
            out.append(f"    /** 直接调用集合，等价于 {obj}.Item(...)。 */")
            out.append(f"    ({params}): {ret};")

        ms = grouped.get(obj, [])
        props = sorted([m for m in ms if m.kind == "property"], key=lambda m: m.name)
        methods = sorted([m for m in ms if m.kind == "method"], key=lambda m: m.name)
        events = sorted([m for m in ms if m.kind == "event"], key=lambda m: m.name)

        for m in props:
            out.append(indent(member_line(m), 4))
        if props and (methods or events):
            out.append("")
        for m in methods:
            out.append(indent(member_line(m), 4))
        if methods and events:
            out.append("")
        for m in events:
            out.append(indent(member_line(m), 4))
        out.append("  }")
        out.append("")

    # manually declared interfaces for pages that 404
    for name in sorted(MANUAL_INTERFACES):
        if name in objects:
            continue
        out.append(MANUAL_INTERFACES[name])
        out.append("")

    # Application
    out.append("  /** AirScript 全局入口对象。 */")
    out.append("  interface Application {")
    out.append(indent(APPLICATION_MEMBERS.rstrip(), 2))
    out.append("  }")
    out.append("")

    # event payload interfaces
    payload_ifaces: list[tuple[str, list[tuple[str, str, str]]]] = []
    for m in members:
        if m.kind == "event" and m.payload and not (len(m.payload) == 1 and m.payload[0][0] == "data"):
            payload_ifaces.append((f"{m.obj}{m.name}EventData", m.payload))
    if payload_ifaces:
        out.append("  // ---------------------------------------------------------------------")
        out.append("  // Event payloads")
        out.append("  // ---------------------------------------------------------------------")
        for name, fields in payload_ifaces:
            out.append(f"  interface {name} {{")
            for fname, ftype, fdesc in fields:
                field_doc = make_jsdoc(fdesc) if fdesc else ""
                if field_doc:
                    out.append(indent(field_doc, 4))
                out.append(f"    {fname}: {tm.map(ftype)};")
            out.append("  }")
            out.append("")

    out.append("}")
    out.append("")

    # --- global value declarations ---
    out.append("declare const Application: AirScript.Application;")
    out.append("")

    if enums:
        out.append("declare const Enum: {")
        for name in sorted(enums):
            values = enums[name]
            if not values:
                continue
            out.append(f"  readonly {name}: {{")
            for member, literal, desc in values:
                if desc:
                    out.append(f"    /** {desc} */")
                out.append(f"    readonly {member}: '{literal.replace(chr(39), chr(92) + chr(39))}';")
            out.append("  };")
        out.append("  [key: string]: any;")
        out.append("};")
        out.append("")

    out.append(BUILTIN_GLOBALS.rstrip())
    out.append("")

    text = "\n".join(out) + "\n"
    with open(OUT, "w", encoding="utf-8", newline="\n") as fh:
        fh.write(text)

    optional_text = (
        "// AirScript 内置的 console / Crypto。\n"
        "// 这两个全局名与 TypeScript 的 lib.dom 冲突，因此单独成文件：\n"
        "// 工作区的 lib 不含 DOM 时由 .airscript/globals.d.ts 引用。\n\n"
        + OPTIONAL_GLOBALS
        + "\n"
    )
    with open(OUT_OPTIONAL, "w", encoding="utf-8", newline="\n") as fh:
        fh.write(optional_text)

    # --- report ---
    print(f"wrote {OUT}")
    print(f"wrote {OUT_OPTIONAL}")
    print(
        f"objects={len(objects)} members={len(members)} enums={len(enums)} "
        f"lines={text.count(chr(10))}"
    )
    kinds = Counter(m.kind for m in members)
    print("kinds:", dict(kinds))
    if tm.unknown:
        print("unmapped type tokens (-> any):")
        for token, count in tm.unknown.most_common(40):
            print(f"  {count:3d}  {token!r}")
    if stats:
        print("objects:", ", ".join(sorted(objects)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
