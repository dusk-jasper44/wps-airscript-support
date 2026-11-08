# WPS AirScript Support 2.3.0 — 优化说明

这是对 WPScomate 生成的 `wps-airscript-support-1.1.1` 的重建版本。旧插件源没有被修改，交付物全部在本目录。

## 下载

- 最新版 VSIX：[GitHub Releases](https://github.com/dusk-jasper44/wps-airscript-support/releases/latest)
- 源码仓库：[github.com/dusk-jasper44/wps-airscript-support](https://github.com/dusk-jasper44/wps-airscript-support)

> 仓库不包含 `docs/` 下 634 篇 WPS 官方文档原文，避免再分发；需要重新生成时运行 `python tools/crawl_docs.py`。VSIX 已内置生成后的声明，安装时不需要联网。

2.3.0 支持三套模型，可在工作区设置或状态栏里随时切换：

| 设置值 | 模型 | 核心对象 |
|---|---|---|
| `1.0`（默认） | 多维表格（dbSheet） | `Application.ActiveSheet`、`Views`、`Fields`、`Records`、`RecordRange` |
| `1.0-databook` | 数据表 / 工作表（1.0） | `sheet.Field`、`sheet.Record`、`Range`、`ActiveWorkbook` |
| `2.0` | 表格（Excel 对象模型） | `Application.ActiveWorkbook`、`Worksheets`、`Range` |

官方 1.0 同时存在“多维表格”和“数据表 / 工作表”两套对象；2.0 目前只提供工作表模型，多维表格仍用 1.0。

## 旧版的核心问题

| # | 问题 | 后果 |
|---|---|---|
| 1 | 事件被生成为 `OnRename?: any` 属性 | 文档里的 `sheet.OnRename(cb)` 无法调用，`eventContext.Destroy()` 无类型 |
| 2 | 集合没有调用签名 | 文档标准写法 `Application.Sheets(1)`、`view.Records(10)` 在 checkJs 下报 “This expression is not callable”；文档中这类写法出现数千次 |
| 3 | `Application` 只保留了能匹配 interface 的成员 | 缺 `ActiveView`、`Selection`、`User`、`Window`、`Enum`，`Application.ActiveView.` 没有提示 |
| 4 | 声明使用全局 `interface` | `Window`/`Navigator` 与 `lib.dom` 合并污染 DOM 类型；`Record` 与 TS 内置工具类型重名，只能改名为 `RecordItem` |
| 5 | 属性 JSDoc 只取说明第一行 | 214 个属性大多只剩“可读写”，真正的说明丢失；返回值大量退化为 `any`（旧声明里 `: any` 出现 211 次） |
| 6 | 初始化逻辑只处理第一个工作区根目录，且 `jsconfig.json` 已存在就直接跳过 | 多根工作区无效；已有配置的项目可能根本不会加载 `.airscript` 类型；`globals.d.ts` 自身不在 `include` 中，是无效文件 |
| 7 | `air-ext/` 没有 `.vscodeignore`，目录里还混着 3 个旧 `.vsix` | 打包会把旧插件和 `node_modules` 一起打进去 |

## 2.3.0 新增：数据表 1.0

- 新增设置值 `"1.0-databook"`，对应 WPS 数据表 / 工作表的 1.0 对象模型。
- 类型来自 `wps-airscript-types@1.0.0` 的 `ApiV1.d.ts`（MIT，happyuz），由 `tools/prepare_databook.py` 清洗：
  - 原文件注释是 UTF-8/GBK 双重编码，换行被吞掉后会触发 `TS1046`，因此移除损坏注释；
  - `interface Record` 与 TS 内置 `Record<K,V>` 重名，改名为 `DBRecord`，`sheet.Record` 属性名不变；
  - 给 `ESaveResult`、`Enum` 补 `declare`；
  - 补 `URL` / `Buffer` 环境类型。
- 覆盖 `Application.ActiveSheet`、`Sheet.Field`（`GetFields` / `CreateFields` / `UpdateFields` / `DeleteFields`）、`Sheet.Record`（`GetRecords` / `GetRecord` / `CreateRecords` / `UpdateRecords` / `DeleteRecords` / `GetAttachmentURL`）、`Range`、`Workbook`、`HTTP`、`SMTP`、`KSDrive`。
- 切换命令改为三选一：**多维表格 1.0** / **数据表 1.0** / **表格 2.0**；状态栏显示当前模型。
- 新增 10 个数据表片段：`airfields`、`airrecords`、`aircreate`、`airupdate`、`airdelete`、`airattach`、`airrange`、`airnewsheet`、`airhttp`、`airmain`。
- 新增 `test/make-databook-project.js`，用扩展真实初始化流程生成数据表项目；`tsc` 与 `--strict` 均 0 error；smoke 覆盖数据表初始化与切换。

## 2.2.0 起保留：模型切换

- 设置项 `airscript.apiVersion`，作用域为资源，可给每个工作区单独配置。
- 命令 **AirScript: 切换 API 模型（多维表格 / 数据表 / 表格）**；状态栏显示 `AirScript 多维表格 1.0` / `AirScript 数据表 1.0` / `AirScript 表格 2.0`，点击也可切换。
- 切换时只保留当前模型的声明，自动删除另外两套，并重写 `.airscript/globals.d.ts`；不会同时加载两套声明。
- 示例脚本与“新建脚本”模板按当前模型生成；示例只覆盖扩展自己生成的文件，用户改过的内容不会被覆盖。
- 代码片段按模型写入 `.vscode/airscript.code-snippets`：多维表格 18 个、数据表 10 个、2.0 表格 8 个。

## 2.1.0 起保留的能力

- 类型声明改为 `declare namespace AirScript`，只向全局暴露必要对象；解决 `Record` 重名与 `Window` 污染 DOM。
- 多维表格 1.0：81 个对象、398 个成员（236 属性、148 方法、14 事件），文档 634 篇。
- 13 个枚举生成字符串字面量联合类型 + `Enum` 常量对象；额外补全文档用到但没有页面的 `DbSheetFieldType`（25 个字段类型）。
- 14 个事件改为方法：`OnRename(callback: (data: SheetOnRenameEventData) => void): EventContext`，并按文档“事件返回数据”表生成 payload interface。
- 18 个集合补上调用签名，例如 `Sheets(Index?): Sheet`、`Views(Index?): AnyView`、`Records(Index?): Record`；`RecordRange` 单独补了 `(selector, fields)` 重载。
- `AnyView = View & CalendarView & FormView & GanttView & GridView & KanbanView & QueryView`；`SyncDBSheet extends Sheet`、`SummarySheet extends SyncDBSheet`。
- 属性说明保留全文，`只读`/`可读` 自动加 `readonly`；返回值映射 `Self → this`、`DbSheet[] → Sheet[]`、Markdown 链接去链接、多类型拆联合类型。
- 高级服务按官方 HTTP / SQL / SMTP / KSDrive / Context 文档重写，放在 `AirScript.Services` 命名空间。
- 2.0 使用 `ApiV2.d.ts` + `lib.kso.d.ts`，覆盖 `Application.ActiveWorkbook`、`Workbook.Worksheets`、`Worksheet.Range`、`Kso` 命名空间、`HTTP`、`KSDrive`。
- `Sheets.Add` 的 `Type` 改为必填，`Config` 改为结构化的 `SheetAddConfig`（2.0.2 修复）。

## 验证结果

- `tsc -p test/jsconfig.json` → 0 error（多维表格 1.0）。
- `tsc --strict`（`test/check.js` + 多维表格 1.0 的 3 个 d.ts）→ 0 error。
- 2.0：`test/make-v2-project.js` 生成真实项目，`Application.ActiveSheet.Range("A1")`、`ActiveWorkbook.Worksheets.Count` → `tsc` 0 error；`--strict` 也 0 error。
- 数据表 1.0：`test/make-databook-project.js` 生成真实项目，`sheet.Field.GetFields()`、`sheet.Record.GetRecords()`、`CreateRecords`、`UpdateRecords`、`DeleteRecords`、`Range`、`Sheets.Add`、`HTTP` → `tsc` 0 error。
- `node test/smoke-extension.js` → 通过（新建项目、JSONC 合并/备份、重复初始化、损坏配置保护、新建脚本、DOM 分支、三套模型切换、按模型写入片段）。
- VSIX 只含声明、代码与文档，无 `node_modules`、无旧 `.vsix`。
- `code --install-extension` 安装成功；`code --list-extensions` 显示 `airscript-tools.wps-airscript-support@2.3.0`。

## 安装

从 [Releases](https://github.com/dusk-jasper44/wps-airscript-support/releases/latest) 下载 `wps-airscript-support-2.3.0.vsix` 后：

```powershell
code --install-extension .\wps-airscript-support-2.3.0.vsix --force
```

或直接使用仓库内产物：

```powershell
code --install-extension dist\wps-airscript-support-2.3.0.vsix --force
```

安装后打开脚本项目，执行命令 **AirScript: 初始化 / 更新工作区**。

如果机器上还留着旧版 `jsa-tools.wps-airscript-support@1.1.1`，建议卸载，避免命令面板里出现两个同名扩展：

```powershell
code --uninstall-extension jsa-tools.wps-airscript-support
```

## 重新生成

```powershell
python tools\crawl_docs.py     # 可选：文档更新后重新爬取
python tools\gen_dts.py        # 生成 extension\types\airscript.d.ts 与 builtins

# 数据表 1.0（从 npm 包取源文件后清洗）
npm pack wps-airscript-types@1.0.0
tar -xzf wps-airscript-types-1.0.0.tgz
python tools\prepare_databook.py --src package\types\ApiV1.d.ts --out extension\types\databook\ApiV1.d.ts

cd extension
npx @vscode/vsce package --no-dependencies --allow-missing-repository --out ..\dist\wps-airscript-support-2.3.0.vsix
```

2.0 的类型文件同样来自 `wps-airscript-types`，修补了缺失的 `lib.kso.d.ts`、两个顶层枚举的 `declare`、以及 `URL`/`Default`/`Buffer` 环境类型。

## 目录

```
wps-airscript-support/
├── docs/                     # 634 篇官方文档 Markdown（本地生成用，不随仓库分发）
├── tools/                    # 爬虫、页面清单、d.ts 生成器、数据表清洗脚本
├── extension/                # 扩展源码与 vsce 打包根目录
├── test/                     # tsc 与初始化冒烟测试
├── dist/                     # VSIX 与 SHA256SUMS.txt
└── README.md
```

## 已知限制

- `Sheets.Add` 的官方参数表把 `Type` 标为必填、`Before`/`After` 可选；TypeScript 不允许必选参数跟在可选参数后，因此声明为 `Add(Before: number | string | null, After: number | string | null, Type: SheetType, Config?: SheetAddConfig)`，未使用的位置按文档传 `null`。
- API 2.0 与 `lib: ["DOM"]` 冲突（`Range`/`console`/`URL`），请使用独立工作区或从 `lib` 移除 DOM。
- 数据表 1.0（`1.0-databook`）同样不能与 `lib: ["DOM"]` 同时使用，原因同上；扩展切换时会检测并提示。
- 项目若安装 `@types/node`，其 `Buffer`/`Crypto`/`console` 可能与 AirScript 内置声明冲突；在 `jsconfig.json` 设置 `"types": []`，或使用独立工作区。
- 多维表格 1.0 且 `lib` 含 DOM 时，扩展会跳过 `airscript-builtins.d.ts`（DOM 自带 `console`/`Crypto`），代价是 `Crypto.createHash` 没有类型提示。
- 数据表声明来自社区包，原文件的 JSDoc 注释已损坏，生成时被移除；数据表成员的中文悬停说明因此比多维表格少，但类型签名完整。
- 浏览器专用 API（`Components`、`Window.ActiveDetailRecord` 等）在 JSDoc 中已注明，只在浏览器环境可用。
- 扩展只提供静态类型与片段，不连接 WPS，也不执行脚本。
