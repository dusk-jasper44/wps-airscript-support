# Changelog

## 2.4.0

- 类型声明为成员补充官方「脚本编辑器示例」`@example` 与官方文档页 `@see` 链接；枚举 union 也带文档链接。
- 支持已有 `tsconfig.json`：优先合并 tsconfig，其次 jsconfig；备份名分别为 `.airscript/tsconfig.backup.json` / `.airscript/jsconfig.backup.json`。
- 新增 `airscript.checkJs` 设置（默认 `true`），控制新建/未显式设置 checkJs 的配置。
- 新增「AirScript: 检查工作区配置（Doctor）」命令：检查配置解析、checkJs、DOM/Node 类型冲突、类型文件、globals 引用与片段。
- 切换模型后提示「重新加载窗口」，让新类型立即生效。
- 数据表 `ApiV1.d.ts` 恢复上游完整 JSDoc（不再删除注释），仅修正 `Record` 重名与 `declare` 修饰符。
- `package.json` 增加 `extensionKind: ["workspace"]`，保持 VS Code 1.77.0 兼容。
- 用 TypeScript 4.9.5 / 5.9.2 对三套模型做 `tsc` 与 `--strict` 验证。

## 2.3.1

- 将 `engines.vscode` 从 `^1.80.0` 下调到 `^1.77.0`，支持 VS Code 1.77.0 安装。
- 复核扩展使用的 API：`workspace.getConfiguration`、`ConfigurationTarget.WorkspaceFolder`、`StatusBarItem`、`QuickPick`、`showInformationMessage` 等均为 1.77 之前已有接口；扩展运行时不依赖新 API。
- 功能与 2.3.0 相同（三套模型、类型声明、片段、测试）。

## 2.3.0

- 新增第三套模型 **API 1.0 · 数据表 / 工作表**，设置值 `1.0-databook`：`Application.ActiveSheet.Field` / `.Record`、`Range`、`ActiveWorkbook`、`Workbook`、`HTTP`、`SMTP`、`KSDrive`。
- 数据表声明 `types/databook/ApiV1.d.ts` 来自 `wps-airscript-types@1.0.0` 的 `ApiV1.d.ts`，由 `tools/prepare_databook.py` 清洗：去掉双重编码损坏的注释、`Record` 接口改名 `DBRecord`（`sheet.Record` 属性名不变）、补 `declare enum ESaveResult` / `declare namespace Enum`、补 `URL` / `Buffer` 环境类型。
- 切换命令改为三选一：**多维表格 1.0** / **数据表 1.0** / **表格 2.0**；状态栏显示当前模型。
- 切换时只保留当前模型的声明，自动删除另外两套；新增 `workspaceContains:.airscript/types/ApiV1.d.ts` 激活事件。
- 新增数据表片段 10 个（`airfields`、`airrecords`、`aircreate`、`airupdate`、`airdelete`、`airattach`、`airrange`、`airnewsheet`、`airhttp`、`airmain`），写入 `.vscode/airscript.code-snippets`。
- `airscript.apiVersion` 枚举增加 `1.0-databook`；README 增加三套模型对照表与数据表 DOM 冲突说明。
- 新增 `test/make-databook-project.js`，用扩展真实初始化流程生成数据表项目；`tsc` 与 `--strict` 均 0 error；smoke 覆盖数据表初始化与切换。

## 2.2.0

- 新增 API 1.0 / 2.0 可选支持：`airscript.apiVersion` 资源级设置，默认 `1.0`。
- 新增 **AirScript: 切换 API 版本 (1.0 / 2.0)** 命令；状态栏显示当前版本，点击即可切换。
- 2.0 使用 `ApiV2.d.ts`（表格 / Excel 对象模型：`Application.ActiveWorkbook`、`Worksheets`、`Range`），并附带修补后的 `lib.kso.d.ts`。
- 切换版本时自动复制对应声明、删除另一套声明，并重写 `.airscript/globals.d.ts`；不会同时加载两套类型。
- 2.0 不引用 1.0 的 `airscript-services.d.ts` / `airscript-builtins.d.ts`，避免 `HTTP`、`KSDrive`、`console` 重复声明。
- 示例脚本与新建脚本模板按当前版本生成；示例只覆盖扩展自己生成的文件。
- 代码片段按版本写入 `.vscode/airscript.code-snippets`：1.0 为多维表格记录/字段/事件等 18 个，2.0 为 Range/工作表/HTTP/MsgBox 等 8 个，避免 2.0 项目插入 1.0 语法。
- 2.0 与 `lib: ["DOM"]` 冲突（`Range`/`console`/`URL`），初始化时检测并给出明确警告。
- `test/make-v2-project.js` 用扩展真实初始化流程生成 2.0 项目；`tsc` 与 `--strict` 均 0 error。

## 2.1.0

- 纳入官方文档站新发布的 42 篇 API 页面（本地 `docs/` 由 592 篇增至 634 篇）：`User` 完整对象、`DBCellValue` 完整属性、`Attachment.toString`、`Sheet.Type`/`Description`/`Export`、`Storage`、`Permission`（`Application.Permissions`）、`Misc`、`AutoTask`、`ViewShare.AddContact`/`DeleteContact`、`Window` 新方法等。
- 新增对象 6 个（`Storage`、`Permission`、`Misc`、`AutoTask`、`User`、`Components`），成员总数 370 → 398（236 属性、148 方法、14 事件）。
- 修复对象参数写法：`Storage.GetValue({ StorageKey })`、`Permission.AddUser({ Type, UserIds })`、`Sheet.Export({ Type })` 等按官方示例生成对象参数，而不是错误的位置参数。
- `Application` 增加 `Permissions`、`Storage`、`Misc`、`AutoTask`；`Sheet.Export` 标注为仪表盘专用。
- `User.CompanyId` 按文档改为 `string`（旧的手写声明误为 `number`）。
- `test/check.js` 覆盖全部新增 API；`tsc` 与 `--strict` 均 0 error。

## 2.0.2

- 修复 `Sheets.Add` 的 `Type` 被误标为可选的问题：文档参数表标为「是」，之前生成器遇到可选参数后会把后续参数一律加 `?`。
- 因为 TypeScript 不允许必选参数跟在可选参数之后，`Sheets.Add` 的 `Before`/`After` 改为 `number | string | null` 的必填参数；未使用的位置按文档要求传 `null`。
- 新增 `SheetType` 字面量联合类型，以及 `SheetAddConfig` / `SheetAddField` / `SheetAddView` 三个结构类型，`Config` 参数不再退化为 `any`。
- `test/check.js` 增加正向与 `@ts-expect-error` 反向用例，验证 `Type` 必填且只接受文档中的三个表类型。

## 2.0.1

- 把与 `lib.dom` 冲突的 `console`、`Crypto` 拆到 `types/airscript-builtins.d.ts`。
- 初始化时检测 `jsconfig.json` 的 `lib`：不含 DOM 时自动引用 builtins；含 DOM 时跳过并提示，避免整个项目出现 `TS2451: Cannot redeclare block-scoped variable`。
- `jsconfig.json` 的 `include` 改为只引用 `.airscript/globals.d.ts`，不再用 `.airscript/**/*.d.ts` 把所有声明文件都拉进来；旧配置会在重新初始化时自动替换。
- 复制类型前校验扩展安装目录，缺失时给出明确错误而不是抛出 `path.join` 异常。
- 新增 DOM 项目的 tsc 验证；`test/smoke-extension.js` 覆盖 DOM 分支与 builtins 引用。

## 2.0.0

彻底重建类型声明与扩展逻辑。

### 类型声明

- 改用 `declare namespace AirScript`，修复 `Record` 与 TS 内置工具类型重名、`Window`/`Navigator` 污染 DOM 类型的问题。
- 事件由错误的 `OnX?: any` 属性改为 `OnX(callback): EventContext` 方法，并生成 14 个事件参数 interface。
- 集合支持直接调用：`Application.Sheets(1)`、`sheet.Views(1)`、`view.Fields(1)`、`view.Records(10)`、`Application.RecordRange(1, ["@名称"])`。
- 补全 13 个枚举（字符串字面量联合类型 + `Enum` 命名空间），新增 `DbSheetFieldType`。
- 补全 `Application` 的 `ActiveView`、`Selection`、`User`、`Window`、`FieldDescriptor`、`DBCellValue`、`Criteria`、`AutoLinkGroups`、`CascadeOptions`、`DataSource`、`SummarySourceConfigs`。
- 补全内置 `Crypto`、`Buffer`、`Time`、`Arguments`、`console`。
- 新增 `airscript-services.d.ts` 的完整注释与返回类型，覆盖 HTTP/SQL/SMTP/KSDrive/Context。
- 属性 JSDoc 保留完整说明，并按 `只读` 标记 `readonly`；类型映射覆盖 `Self`、`ApiResult`、`DbSheet[]`、Markdown 链接、联合类型等。
- 支持视图继承与 `AnyView` 交叉类型；`SyncDBSheet`、`SummarySheet` 继承关系补齐。

### 扩展

- 新增多根工作区选择、状态栏、输出日志。
- `jsconfig.json` 已存在时先备份再合并，不再直接跳过。
- 新增「新建脚本文件」「打开官方文档」命令。
- 扩展升级后自动静默刷新已初始化项目的类型声明。
- 新增 `.vscodeignore`，打包不再混入 `node_modules`、旧 vsix 和测试文件。

### 片段

- 从 8 个扩展到 18 个，新增事件、枚举、字段遍历、批量写入、HTTP POST、KSDrive、Crypto、Time、Arguments 等。

## 1.1.1

- 增加高级服务声明与 8 个代码片段。
- 修复 `Record` 重名问题（改名为 `RecordItem`）。

## 1.0.0

- 首个版本：仅包含从文档生成的 API 声明。
