# WPS AirScript Support 2.4.6 — 优化说明

这是对 WPScomate 生成的 `wps-airscript-support-1.1.1` 的重建版本。旧插件源没有被修改，交付物全部在本目录。

## 下载

- 最新版 VSIX：[GitHub Releases](https://github.com/dusk-jasper44/wps-airscript-support/releases/latest)
- 源码仓库：[github.com/dusk-jasper44/wps-airscript-support](https://github.com/dusk-jasper44/wps-airscript-support)

> 仓库不包含 `docs/` 下 634 篇 WPS 官方文档原文，避免再分发；需要重新生成时运行 `python tools/crawl_docs.py`。VSIX 已内置生成后的声明，安装时不需要联网。

2.4.6 支持三套模型，可在工作区设置或状态栏里随时切换：

| 设置值 | 模型 | 核心对象 |
|---|---|---|
| `1.0`（默认） | 多维表格（dbSheet） | `Application.ActiveSheet`、`Views`、`Fields`、`Records`、`RecordRange` |
| `1.0-databook` | 数据表 / 工作表（1.0） | `sheet.Field`、`sheet.Record`、`Range`、`ActiveWorkbook` |
| `2.0` | 表格（Excel 对象模型） | `Application.ActiveWorkbook`、`Worksheets`、`Range` |

官方 1.0 同时存在“多维表格”和“数据表 / 工作表”两套对象；2.0 目前只提供工作表模型，多维表格仍用 1.0。

## 2.4.6：配置合并保留注释

- 合并已有 `tsconfig.json` / `jsconfig.json` 时不再整体 `JSON.stringify`：内置 [`jsonc-parser`](https://github.com/microsoft/node-jsonc-parser)（MIT），只修改 `compilerOptions`、`include`、`exclude` 的必要节点。
- 用户的 `//`、`/* */` 注释、缩进、键顺序与尾逗号都会保留；新增的 `checkJs`、`include` 等只追加/更新到对应位置。
- 新增 smoke 用例覆盖行注释、块注释、尾逗号配置；仍要求 VS Code 1.77.0+，类型声明不变。

## 2.4.5：片段保留与 Doctor 增强

- 用户自定义 `.vscode/airscript.code-snippets` 后，初始化/切换模型不再覆盖；首次检测到自定义内容时仍备份为 `.bak`。
- Doctor 增加 `allowJs: false` 与 `exclude` 排除所有文件的检查。
- `engines.vscode` 仍为 `^1.77.0`，1.77 兼容性不变。

## 2.4.4：BOM 兼容与 CI

- 读取 `jsconfig.json` / `tsconfig.json` 时去除 UTF-8 BOM；Windows PowerShell 的 `Set-Content -Encoding utf8` 会写 BOM，此前会导致解析失败、初始化中止。
- 新增 GitHub Actions CI：smoke、TypeScript 4.9.5 / 5.9.2 类型检查、VSIX 打包检查。
- `engines.vscode` 仍为 `^1.77.0`；2.4.3 已在真实 1.77.0 上安装验证，2.4.4 未改引擎。

## 2.4.3：片段保护

- 初始化/切换 API 模型写入 `.vscode/airscript.code-snippets` 前，检测文件是否被用户改过；非扩展生成的内容先备份为 `airscript.code-snippets.bak`，避免自定义片段被静默覆盖。
- 已有 `.bak` 不会被覆盖；扩展生成的三套片段仍会按当前模型更新。
- 仅运行时逻辑变化，类型声明与 2.4.2 相同；仍要求 VS Code 1.77.0+。

## 2.4.2：类型增强

- `Sheet.Type` 从 `any` 改为 `BaseSheetType`（`xlEtDataBaseSheet` / `xlDbDashBoardSheet` / `xlEtFlexPaperSheet`）。
- `Permission.VisitorProtectType` 从 `any` 改为 `DbProtectType`（`Admin` / `Editor` / `Reader` / `ReaderSubmitter` / `NoPermissions`）。
- `Sheet.Export({ Type })` 现在返回 `Promise<boolean>`，`Type` 为 `ExportType`；`Storage.SetValue` 返回 `Promise<void>`，`Misc.GetAttachmentUrl` 返回 `Promise<string | null>`。
- `Permission.AddUser` / `DeleteUser` 的 `Type` 改为 `DbProtectTypeNum`；`ViewShare.AddContact` / `DeleteContact` 的 `UserType` 改为 `DbPermissionUserType`。
- 新增 `ExportType`、`DbProtectType`、`DbProtectTypeNum`、`DbPermissionUserType` 的 `Enum` 常量，支持 `Application.Enum.DbProtectTypeNum.Editor` 等写法。
- 仍要求 VS Code 1.77.0+，TypeScript 4.9.5 / 5.9.2 下三套模型 `tsc` 与 `--strict` 均为 0 error。

## 2.4.1：bug 修复

- **修复模型切换设置键**：`getConfiguration('airscript')` 返回的是 section 子树，`get`/`update` 必须用相对键 `apiVersion`。此前使用 `airscript.apiVersion` 会被解析成 `airscript.airscript.apiVersion`，真实 VS Code 中切换可能一直无效。这是 2.4.1 最重要的修复。
- 修复 JSONC 尾逗号处理误伤字符串（`"a,}.js"`）的问题。
- 初始化/启动更新不再覆盖用户改过的 `airscript-example.js`，只覆盖与内置模板完全一致的文件。
- 成功提示和 DOM 警告使用实际配置文件（tsconfig/jsconfig），不再硬编码。
- Doctor 检查 `include` / `files` / `exclude` 是否让 `.airscript/globals.d.ts` 真正进入编译。
- 多根工作区路径判断改用 `path.relative`（Windows 大小写、盘符根安全）。
- 配置解析前先备份；内容未变化时不重写，保留注释与格式。
- 类型文件缺失时先报错；切换失败回滚设置。
- 新建脚本拒绝 Windows 非法字符、保留名与空基名。
- 生成器转义示例中的 `*/`。

## 2.4.0：文档质量与工程接入

- 每个成员优先收录官方「脚本编辑器示例」：兼容 `## 脚本编辑器示例` 与 `## 脚本编辑器 示例` 两种标题，忽略浏览器示例。
- 每个成员附 `@see` 官方文档页链接；枚举 union 同样带文档链接。
- 数据表 `ApiV1.d.ts` 恢复上游完整 JSDoc（原注释是合法 UTF-8），悬停不再只有类型。
- 支持已有 `tsconfig.json`：优先合并 tsconfig，其次 jsconfig；备份分别为 `.airscript/tsconfig.backup.json` / `.airscript/jsconfig.backup.json`。
- 新增 `airscript.checkJs` 设置（默认 `true`），只影响新建或尚未显式设置 `checkJs` 的配置。
- 新增 `AirScript: 检查工作区配置（Doctor）`：检查配置解析、`checkJs`、DOM/Node 类型冲突、类型文件、globals 引用与片段。
- 切换模型后提示重新加载窗口。
- `package.json` 增加 `extensionKind: ["workspace"]`，继续兼容 VS Code 1.77.0。
- 用 TypeScript **4.9.5**（VS Code 1.77 内置版本）与 **5.9.2** 对三套模型分别跑 `tsc` 与 `--strict`，全部 0 error。

## 2.3.1：兼容 VS Code 1.77

- `engines.vscode` 从 `^1.80.0` 下调到 `^1.77.0`，VS Code 1.77.0 可直接安装。
- 复核扩展实际调用的 API：`workspace.getConfiguration`、`ConfigurationTarget.WorkspaceFolder`、`createStatusBarItem`、`QuickPick`、`showInputBox`、`showInformationMessage`、`openTextDocument`、`env.openExternal` 等均为 1.77 之前已有接口，不依赖 1.78+ 新 API。
- 运行时代码保持 Node 16 兼容（VS Code 1.77 自带 Node 16），只使用 `fs`/`path` 与可选链，不使用更新的内置模块能力。
- 功能与 2.3.0 相同：三套模型、类型声明、片段、初始化与切换。

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

## 数据表 1.0（2.3.0 起）

- 新增设置值 `"1.0-databook"`，对应 WPS 数据表 / 工作表的 1.0 对象模型。
- 类型来自 `wps-airscript-types@1.0.0` 的 `ApiV1.d.ts`（MIT，happyuz），由 `tools/prepare_databook.py` 处理：
  - 上游 JSDoc 是合法 UTF-8，**完整保留**，悬停有中文说明；
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

- `tsc -p test/jsconfig.json` → 0 error（多维表格 1.0，TypeScript 4.9.5 与 5.9.2 均通过）。
- `tsc --strict`（`test/check.js` + 多维表格 1.0 的 3 个 d.ts）→ 0 error。
- 2.0：`test/make-v2-project.js` 生成真实项目，`Application.ActiveSheet.Range("A1")`、`ActiveWorkbook.Worksheets.Count` → `tsc` 0 error；`--strict` 也 0 error（4.9.5 与 5.9.2）。
- 数据表 1.0：`test/make-databook-project.js` 生成真实项目，`sheet.Field.GetFields()`、`sheet.Record.GetRecords()`、`CreateRecords`、`UpdateRecords`、`DeleteRecords`、`Range`、`Sheets.Add`、`HTTP` → `tsc` 0 error；`--strict` 也 0 error（4.9.5 与 5.9.2）。
- `node test/smoke-extension.js` → 通过（新建项目、JSONC 合并/备份、tsconfig 优先、`checkJs` 开关、Doctor、重复初始化、损坏配置保护、新建脚本、DOM 分支、三套模型切换、按模型写入片段、自定义片段备份、带注释配置合并）。
- VSIX 只含声明、代码、文档与内置解析器，无 `node_modules`、无旧 `.vsix`；26 文件，221.5 KB（226,811 B）。
- `wps-airscript-support-2.4.6.vsix` SHA256：`8E132FE53743FA8631A53B298B1106C742416722562DE3C24FA58BFF6F0A6243`（见 `dist/SHA256SUMS.txt`）。
- `code --install-extension` 安装成功；`code --list-extensions` 显示 `airscript-tools.wps-airscript-support@2.4.6`。
- `engines.vscode` 保持 `^1.77.0`；2.4.6 已在真实 VS Code 1.77.0（commit `7f329fe6c66b0f86ae1574c2911b681ad5a45d63`）便携实例上安装验证，`--list-extensions` 显示 `@2.4.6`。

## 安装

从 [Releases](https://github.com/dusk-jasper44/wps-airscript-support/releases/latest) 下载 `wps-airscript-support-2.4.6.vsix` 后：

```powershell
code --install-extension .\wps-airscript-support-2.4.6.vsix --force
```

或直接使用仓库内产物：

```powershell
code --install-extension dist\wps-airscript-support-2.4.6.vsix --force
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
npx -y @vscode/vsce@3 package --no-dependencies --out ..\dist\wps-airscript-support-2.4.6.vsix
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

## 许可证

MIT。详见 [LICENSE](LICENSE)。`extension/types/databook/ApiV1.d.ts` 与 `extension/types/v2/ApiV2.d.ts` 来自 `wps-airscript-types`（MIT，happyuz），文件头保留来源说明。
