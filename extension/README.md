# WPS AirScript 支持

为 **WPS AirScript** 提供 VSCode 内的补全、悬停文档与类型检查。扩展不执行脚本，只把官方 API 文档转换成 TypeScript 声明，让 VSCode 内置的 JavaScript/TypeScript 语言服务认识 `Application`、`Sheet`、`View`、`Records`、`Enum`、`HTTP` 等对象。

项目主页：<https://github.com/dusk-jasper44/wps-airscript-support>

支持三套模型，可在工作区里随时切换：

| 设置值 | 适用场景 | 核心对象 |
|---|---|---|
| **`1.0`**（默认） | WPS 多维表格 | `Application.ActiveSheet`、`Views`、`Fields`、`Records`、`RecordRange` |
| **`1.0-databook`** | WPS 数据表 / 工作表（1.0） | `sheet.Field`、`sheet.Record`、`Range`、`ActiveWorkbook` |
| **`2.0`** | WPS 表格（Excel 对象模型） | `Application.ActiveWorkbook`、`Worksheets`、`Range` |

> 官方 1.0 同时存在“多维表格”和“数据表 / 工作表”两套对象；2.0 目前只提供“工作表”对象模型。写多维表格用 `1.0`，写数据表用 `1.0-databook`，写 2.0 表格用 `2.0`。

## 功能

- **API 补全与悬停文档**：多维表格 1.0 覆盖 81 个对象、398 个成员（236 属性、148 方法、14 事件）；数据表 1.0 覆盖 `Field` / `Record` / `Range` / `Workbook`；2.0 使用完整的表格对象模型声明。
- **可调用集合**：支持文档里的 `Application.Sheets(1)`、`sheet.Views(1)`、`view.Fields(1)`、`view.Records(10)`、`RecordRange(1, ["@名称"])` 写法，同时保留 `.Item(...)`。
- **事件按方法建模**：`sheet.OnRename(data => { ... }).Destroy()` 有完整回调参数提示。
- **枚举**：`Enum.DbSheetFieldType.Lookup`、`Enum.DbButtonIcon.CalendarCheckIn` 等；数据表提供 `Enum.XlSheetType` 等 Excel 枚举。
- **2.4.2 类型增强**：`Sheet.Type` / `Permission.VisitorProtectType` / `Sheet.Export` / `Storage` / `Misc` / `ViewShare` 的枚举与返回值已按官方文档收窄，并补齐 `Enum.DbProtectTypeNum` 等常量。
- **2.4.3 片段保护**：写入 `.vscode/airscript.code-snippets` 前检测用户修改，先备份为 `.bak`，避免自定义片段被初始化/切换模型静默覆盖。
- **2.4.4 BOM 兼容**：读取 `jsconfig.json` / `tsconfig.json` 时自动去掉 UTF-8 BOM，修复 Windows PowerShell 写出的配置无法解析、初始化中止的问题。
- **2.4.5 片段保留**：检测到 `.vscode/airscript.code-snippets` 是用户自定义内容后，初始化/切换模型不再覆盖，只备份一次为 `.bak`。
- **高级服务**（1.0 多维表格）：`HTTP`、`SQL`、`SMTP`、`KSDrive`、`Context` 的声明与注释；数据表声明也内置 `HTTP`、`SMTP`、`KSDrive`。
- **内置能力**（1.0 多维表格）：`Crypto`、`Buffer`、`Time`、`Arguments`、`console`。
- **按版本写入代码片段**：初始化/切换时生成 `.vscode/airscript.code-snippets`，多维表格 18 个、数据表 10 个、2.0 表格 8 个。
- **悬浮文档带示例**：成员 JSDoc 优先收录官方「脚本编辑器示例」，并附官方文档页链接（`@see`）。
- **一键初始化**：自动安装声明、生成或合并 `tsconfig.json` / `jsconfig.json`（先备份）、创建示例脚本。
- **模型切换**：状态栏显示当前模型，点击即可在多维表格 / 数据表 / 2.0 表格之间切换；切换后提示重新加载窗口。
- **配置检查**：`AirScript: 检查工作区配置（Doctor）` 检查配置解析、`checkJs`、DOM/Node 类型冲突、类型文件与片段。

## 安装与首次使用

> 要求 VS Code **1.77.0** 或更高版本。

1. 安装 `wps-airscript-support-2.4.5.vsix`：
   - VSCode 扩展面板右上角 `...` → **从 VSIX 安装**；或
   - 命令行：`code --install-extension wps-airscript-support-2.4.5.vsix`
2. 打开你的脚本项目文件夹。
3. 执行命令 **AirScript: 初始化 / 更新工作区**（`Ctrl+Shift+P`）。
4. 打开任意 `.js` 文件，输入 `Application.` 即可看到补全；把鼠标悬停在成员上可查看中文说明。
5. 需要切换模型时：执行 **AirScript: 切换 API 模型**，或点击状态栏的 `AirScript 多维表格 1.0` / `AirScript 数据表 1.0` / `AirScript 表格 2.0`。

初始化会在项目里生成：

```
<项目>/
├── .airscript/
│   ├── types/
│   │   ├── airscript.d.ts            # 1.0 核心 API 声明（自动生成）
│   │   ├── airscript-services.d.ts   # 1.0 高级服务声明
│   │   ├── airscript-builtins.d.ts   # 1.0 console / Crypto（lib 含 DOM 时不引用）
│   │   ├── ApiV1.d.ts                # 1.0 数据表 / 工作表对象模型
│   │   ├── ApiV2.d.ts                # 2.0 表格对象模型
│   │   └── lib.kso.d.ts              # 2.0 依赖的环境类型桩
│   ├── globals.d.ts                  # 引用当前版本的类型声明
│   ├── jsconfig.backup.json          # 仅当原 jsconfig.json 被合并时生成
│   └── tsconfig.backup.json          # 仅当原 tsconfig.json 被合并时生成
├── jsconfig.json / tsconfig.json     # checkJs + 类型声明 include（优先已有 tsconfig）
└── airscript-example.js              # 示例脚本（不覆盖用户改过的文件）
```

已有 `jsconfig.json` / `tsconfig.json` 不会被直接覆盖：扩展会先备份，再补齐 `include` 与必要的 `compilerOptions`。两者同时存在时优先使用 `tsconfig.json`。如果不想改动原配置，也可以只把 `.airscript/types/*.d.ts` 复制到自己的项目里，再在 `tsconfig/jsconfig` 中 include 它们。

## 命令

| 命令 | 说明 |
|---|---|
| `AirScript: 初始化 / 更新工作区` | 安装/更新类型声明，生成或合并 `tsconfig.json` / `jsconfig.json` |
| `AirScript: 新建脚本文件` | 新建带 `main()` 的 `.js` 脚本（按当前 API 版本生成模板） |
| `AirScript: 切换 API 模型（多维表格 / 数据表 / 表格）` | 切换后自动重装对应声明、片段并刷新状态栏；提示重新加载窗口 |
| `AirScript: 打开 API 1.0 文档` | 打开 WPS 开放平台多维表格 AirScript 文档 |
| `AirScript: 打开 API 2.0 文档` | 打开 AirScript 2.0 文档站 |
| `AirScript: 检查工作区配置（Doctor）` | 检查配置解析、`checkJs`、DOM/Node 类型冲突、类型文件、globals 与片段 |

多根工作区会先询问目标文件夹；如果当前编辑器里的文件属于某个根目录，则优先使用该根目录。`airscript.apiVersion` 是资源级设置，可为每个工作区单独选择版本；`airscript.checkJs` 控制新建配置时是否启用 `checkJs`（默认开启）。

## 类型覆盖说明

1.0 声明由 `tools/gen_dts.py` 从 `docs/` 中的 634 篇官方 Markdown 生成：

- 对象概述页 → interface；方法/属性/事件页 → 成员。
- `## 返回值` 映射为类型：`Boolean` → `boolean`、`Self` → `this`、`DbSheet[]` → `Sheet[]`、Markdown 链接去链接、多类型拆成联合类型。
- 属性说明首行的 `可读写 / 可读 / 只读` 转换为是否 `readonly`，说明全文保留在 JSDoc 中。
- 事件页的 `## 事件返回数据` 表格 → `<对象><事件>EventData` interface；事件本身生成 `OnX(callback): EventContext`。
- 每个成员优先收录官方「脚本编辑器示例」（兼容 `脚本编辑器示例` / `脚本编辑器 示例` 两种标题），并附 `@see` 官方文档页链接；浏览器示例（`instance.ready()` / `async`）会被忽略。
- 文档没有返回值或无法识别类型的成员会退化为 `any`，这是为了优先保证不误报；这类成员在悬停注释里仍保留原始说明。
- `Window` 只在 `AirScript` 命名空间内声明，不污染浏览器的 `Window` 类型；`Record` 也不再与 TypeScript 内置的 `Record` 工具类型重名。

数据表 1.0 声明（`types/databook/ApiV1.d.ts`）同样来自 [`wps-airscript-types`](https://www.npmjs.com/package/wps-airscript-types) 的 `types/ApiV1.d.ts`。原文件注释本身是合法 UTF-8；`tools/prepare_databook.py` 保留完整 JSDoc，只把 `Record` 接口改名为 `DBRecord`（`sheet.Record` 属性名不变）、给 `ESaveResult` / `Enum` 补 `declare`，并补 `URL` / `Buffer` 环境类型。生成后的文件约 177 KB，`Application`、`Sheet.Field`、`Sheet.Record`、`Range`、`Workbook`、`HTTP`、`SMTP`、`KSDrive` 均可直接使用，悬停有上游中文说明。

2.0 声明来自同一开源包（MIT，作者 happyuz），并做了三处修补：补上缺失的 `lib.kso.d.ts`、给两个顶层枚举加 `declare`、提供 `URL`/`Default`/`Buffer` 环境类型。原包没有提供 `lib.kso.d.ts`，直接使用会报找不到引用文件。

以下内容**不在** AirScript 1.0 运行环境内，声明中不会提供：DOM、Node.js API、`async/await` / `Promise`（1.0 是服务端同步执行模型）、`setTimeout`。需要等待请用 `Time.sleep(ms)`。2.0 有少数返回 `Promise` 的新 API（如 `Storage`），JSDoc 中已注明。

## 重新生成（文档更新后）

```bash
# 1. 重新爬取文档（断点续传；需要 Python 3 与 requests）
python tools/crawl_docs.py

# 2. 解析文档并生成 extension/types/airscript.d.ts（以及 builtins）
python tools/gen_dts.py

# 2b. 生成数据表 1.0 声明（从 npm 包解包后执行一次即可）
npm pack wps-airscript-types@1.0.0
tar -xzf wps-airscript-types-1.0.0.tgz
python tools/prepare_databook.py --src package/types/ApiV1.d.ts --out extension/types/databook/ApiV1.d.ts

# 3. 打包
cd extension
npx @vscode/vsce package --no-dependencies
```

`tools/gen_dts.py` 会在结束时打印对象/成员/枚举数量，以及无法映射、退化为 `any` 的类型 token，便于发现文档格式变化。

## 目录结构

```
wps-airscript-support/
├── docs/                     # 634 篇官方文档 Markdown（离线可重建）
├── tools/
│   ├── crawl_docs.py         # 文档爬虫
│   ├── pages.json            # 文档页面清单
│   ├── gen_dts.py            # d.ts 生成器
│   └── prepare_databook.py   # 数据表 1.0 声明清洗脚本
├── extension/                # 扩展源码（vsce 打包根目录）
│   ├── extension.js
│   ├── package.json
│   ├── types/
│   │   ├── databook/ApiV1.d.ts     # 数据表 1.0
│   │   └── v2/                     # 2.0
│   ├── snippets/airscript.json          # 多维表格 1.0 片段源
│   ├── snippets/airscript-databook.json # 数据表 1.0 片段源
│   ├── snippets/airscript-v2.json       # 2.0 片段源
│   ├── icon.png
│   └── README.md
├── test/                     # tsc --noEmit 冒烟测试
└── dist/                     # 打包产物
```

## 已知限制

- `Sheets.Add` 的官方参数表把 `Type` 标为必填，但 `Before`/`After` 可选。TypeScript 不允许必选参数跟在可选参数后，因此声明为 `Add(Before: number | string | null, After: number | string | null, Type: SheetType, Config?: SheetAddConfig)`；未使用的位置请按文档传 `null`。
- **API 2.0 不能与 `lib: ["DOM"]` 同时使用**：2.0 的 `Range`、`console`、`URL` 会与 DOM 声明冲突（`TS2451` / `TS2300`）。新建项目默认只启用 `ES2020`；已有 DOM 项目请把 AirScript 2.0 脚本放到独立工作区，或从 `lib` 移除 `DOM`。
- **数据表 1.0（`1.0-databook`）同样不能与 `lib: ["DOM"]` 同时使用**：其 `Range`、`console`、`URL` 也会与 DOM 冲突。切换时扩展会检测并提示；请使用 `"lib": ["ES2020"]` 或独立工作区。
- 数据表声明来自社区包，原文件的 JSDoc 注释已损坏，生成时被移除；数据表成员的中文悬停说明因此比多维表格少，但类型签名完整。
- 如果项目里安装了 `@types/node`，它的 `Buffer`、`Crypto`、`console` 可能与 AirScript 的内置声明冲突（`TS2451` / `TS2403`）。在 `jsconfig.json` 的 `compilerOptions` 中设置 `"types": []`，或把 AirScript 脚本放到独立工作区。
- 如果 `jsconfig.json` 的 `lib` 含 `DOM`（1.0），扩展会跳过 `airscript-builtins.d.ts`（DOM 自带 `console`/`Crypto`），避免全项目 `TS2451`；代价是 `Crypto.createHash` 没有类型提示。
- 官方文档站个别页面拼写错误（如 `RatingFeild`）已按文件名纠正；如果官方后续修复，重新生成即可。
- 浏览器专用 API（`Components`、`Window.ActiveDetailRecord` 等）在 JSDoc 中已注明，只在浏览器环境可用。
- `.vscode/airscript.code-snippets` 由扩展生成，初始化/切换 API 模型时会更新；如果检测到用户改过该文件，会先备份为 `airscript.code-snippets.bak` 再写入。自定义片段建议放在独立的 `.code-snippets` 文件中。
- 本扩展只提供静态类型与片段，不会连接 WPS，也不会执行脚本。

## License

MIT。`types/v2/ApiV2.d.ts` 与 `types/databook/ApiV1.d.ts` 来自 `wps-airscript-types`（MIT，Copyright (c) happyuz）。
