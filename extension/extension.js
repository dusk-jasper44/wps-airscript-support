// WPS AirScript 支持扩展（多维表格 1.0 / 数据表 1.0 / 表格 2.0）
// 负责把类型声明安装到工作区，并生成/合并 jsconfig.json，
// 让 VSCode 内置的 JavaScript/TypeScript 语言服务为 AirScript 提供补全与检查。

const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// getConfiguration('airscript') 返回的是 section 子树，get/update 必须使用相对键；
// 传完整键会被拼成 airscript.airscript.apiVersion。
const API_VERSION_KEY = 'apiVersion';
const API_V1 = '1.0';
const API_DATABOOK = '1.0-databook';
const API_V2 = '2.0';

// API 1.0 有两套彼此独立的模型：
//   1.0          = 多维表格（dbSheet）：Sheets / Views / Records / Fields
//   1.0-databook = 数据表 / 工作表：Sheet.Field / Sheet.Record / Range / Workbook
// API 2.0 = 表格的 Excel 对象模型（仅工作表，没有多维表格对象）。
const TYPE_SETS = {
  [API_V1]: [
    { source: 'airscript.d.ts', target: 'airscript.d.ts' },
    { source: 'airscript-services.d.ts', target: 'airscript-services.d.ts' },
    { source: 'airscript-builtins.d.ts', target: 'airscript-builtins.d.ts' }
  ],
  [API_DATABOOK]: [
    { source: 'databook/ApiV1.d.ts', target: 'ApiV1.d.ts' }
  ],
  [API_V2]: [
    { source: 'v2/ApiV2.d.ts', target: 'ApiV2.d.ts' },
    { source: 'v2/lib.kso.d.ts', target: 'lib.kso.d.ts' }
  ]
};
const ALL_TYPE_TARGETS = [
  'airscript.d.ts',
  'airscript-services.d.ts',
  'airscript-builtins.d.ts',
  'ApiV1.d.ts',
  'ApiV2.d.ts',
  'lib.kso.d.ts'
];
const GLOBALS_INCLUDE = '.airscript/globals.d.ts';
const LEGACY_TYPES_INCLUDE = '.airscript/**/*.d.ts';
const DOCS_URL =
  'https://open.wps.cn/documents/app-integration-dev/guide/dbsheet/AirScript/AirScript-instro';
const DOCS_URL_V2 = 'https://airsheet.wps.cn/docs/apiV2/overview.html';

let output;
let statusBar;

function log(message) {
  if (output) {
    output.appendLine(`[${new Date().toLocaleTimeString()}] ${message}`);
  }
}

function versionLabel(version) {
  if (version === API_DATABOOK) return '数据表 1.0';
  if (version === API_V2) return '表格 2.0';
  return '多维表格 1.0';
}

function normalizeVersion(value) {
  const raw = String(value || '').trim().toLowerCase();
  if (raw === '2.0' || raw === '2' || raw === 'worksheet' || raw === 'excel') {
    return API_V2;
  }
  if (
    raw === '1.0-databook' ||
    raw === 'databook' ||
    raw === 'data-table' ||
    raw === 'datasheet' ||
    raw === 'sheet'
  ) {
    return API_DATABOOK;
  }
  return API_V1;
}

/** 读取工作区的 API 版本；读取失败时回退到 1.0。 */
function getApiVersion(folder) {
  try {
    const config = vscode.workspace.getConfiguration('airscript', folder?.uri);
    return normalizeVersion(config.get(API_VERSION_KEY, API_V1));
  } catch (error) {
    log(`读取 API 版本失败：${error}`);
    return API_V1;
  }
}

async function setApiVersion(folder, version) {
  const target =
    vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 1
      ? vscode.ConfigurationTarget.WorkspaceFolder
      : vscode.ConfigurationTarget.Workspace;
  await vscode.workspace
    .getConfiguration('airscript', folder.uri)
    .update(API_VERSION_KEY, version, target);
}

/** 选择要操作的工作区文件夹；多根工作区让用户选择。 */
function isPathInside(parentPath, childPath) {
  const normalize = (value) => (process.platform === 'win32' ? value.toLowerCase() : value);
  const relative = path.relative(normalize(parentPath), normalize(childPath));
  return relative === '' || (
    relative !== '..' &&
    !relative.startsWith(`..${path.sep}`) &&
    !path.isAbsolute(relative)
  );
}

async function pickFolder() {
  const folders = vscode.workspace.workspaceFolders;
  if (!folders || folders.length === 0) {
    vscode.window.showErrorMessage('AirScript: 请先打开一个文件夹，再执行初始化。');
    return undefined;
  }
  if (folders.length === 1) {
    return folders[0];
  }

  // 优先使用当前文件所在的工作区。
  const activeUri = vscode.window.activeTextEditor?.document.uri;
  if (activeUri) {
    const owner = folders.find((folder) => isPathInside(folder.uri.fsPath, activeUri.fsPath));
    if (owner) {
      return owner;
    }
  }

  const picked = await vscode.window.showQuickPick(
    folders.map((folder) => ({
      label: folder.name,
      description: folder.uri.fsPath,
      folder
    })),
    { placeHolder: '选择要初始化 AirScript 的工作区文件夹' }
  );
  return picked?.folder;
}

/** 去掉 JSONC 中的注释与尾逗号，便于 JSON.parse。字符串内的内容保持不变。 */
function stripJsonComments(text) {
  let result = '';
  let inString = false;
  let quote = '';
  let escaped = false;
  let i = 0;

  while (i < text.length) {
    const ch = text[i];
    const next = text[i + 1];

    if (inString) {
      result += ch;
      if (escaped) {
        escaped = false;
      } else if (ch === '\\') {
        escaped = true;
      } else if (ch === quote) {
        inString = false;
      }
      i += 1;
      continue;
    }

    if (ch === '"' || ch === "'") {
      inString = true;
      quote = ch;
      result += ch;
      i += 1;
      continue;
    }

    if (ch === '/' && next === '/') {
      while (i < text.length && text[i] !== '\n') {
        i += 1;
      }
      continue;
    }

    if (ch === '/' && next === '*') {
      i += 2;
      while (i < text.length && !(text[i] === '*' && text[i + 1] === '/')) {
        i += 1;
      }
      i += 2;
      continue;
    }

    result += ch;
    i += 1;
  }

  // 不能直接用正则删尾逗号：字符串里的 ",}"、",]" 也会被误改。
  return removeTrailingCommas(result);
}

function removeTrailingCommas(text) {
  let result = '';
  let inString = false;
  let quote = '';
  let escaped = false;
  let i = 0;

  while (i < text.length) {
    const ch = text[i];
    if (inString) {
      result += ch;
      if (escaped) {
        escaped = false;
      } else if (ch === '\\') {
        escaped = true;
      } else if (ch === quote) {
        inString = false;
      }
      i += 1;
      continue;
    }

    if (ch === '"' || ch === "'") {
      inString = true;
      quote = ch;
      result += ch;
      i += 1;
      continue;
    }

    if (ch === ',') {
      let j = i + 1;
      while (j < text.length && /\s/.test(text[j])) {
        j += 1;
      }
      if (text[j] === '}' || text[j] === ']') {
        i += 1;
        continue;
      }
    }

    result += ch;
    i += 1;
  }
  return result;
}

function readExistingJsonc(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const text = stripJsonComments(raw).trim();
  if (!text) {
    return {};
  }
  return JSON.parse(text);
}

/** 合并 include，不覆盖用户已有配置。 */
function addInclude(config, pattern) {
  if (!Array.isArray(config.include)) {
    config.include = [];
  }
  if (!config.include.includes(pattern)) {
    config.include.push(pattern);
  }
}

function removeInclude(config, pattern) {
  if (Array.isArray(config.include)) {
    config.include = config.include.filter((item) => item !== pattern);
  }
}

function findConfigPath(rootPath) {
  // Prefer tsconfig.json: it is what tsc and VS Code use when both exist.
  const tsconfig = path.join(rootPath, 'tsconfig.json');
  if (fs.existsSync(tsconfig)) {
    return tsconfig;
  }
  return path.join(rootPath, 'jsconfig.json');
}

function getCheckJs(folder) {
  try {
    return (
      vscode.workspace.getConfiguration('airscript', folder && folder.uri).get('checkJs', true) !==
      false
    );
  } catch {
    return true;
  }
}

function buildMergedConfig(existing, options = {}) {
  const config = existing && typeof existing === 'object' ? existing : {};
  config.compilerOptions = config.compilerOptions || {};
  const co = config.compilerOptions;

  if (co.checkJs === undefined) co.checkJs = options.checkJs !== false;
  if (co.allowJs === undefined) co.allowJs = true;
  if (co.noEmit === undefined) co.noEmit = true;
  if (!co.target) co.target = 'ES2020';
  if (!co.module) co.module = 'ESNext';

  if (co.lib === undefined) {
    co.lib = ['ES2020'];
  } else if (Array.isArray(co.lib) && !co.lib.includes('ES2020')) {
    // AirScript 是服务端同步运行时，至少需要 ES2020；用户原有的 lib 保留。
    co.lib.push('ES2020');
  }

  // 新建配置时禁用自动引入 @types，避免 @types/node 的 Buffer/Crypto/console
  // 与 AirScript 内置声明冲突。已有配置不动这一项。
  if (co.types === undefined && !existing) {
    co.types = [];
  }

  addInclude(config, '**/*.js');
  addInclude(config, '**/*.ts');
  // 只引用 globals.d.ts，而不是整个 .airscript/**/*.d.ts：
  // 这样在 lib 含 DOM 的项目里可以有选择地不加载 builtins（console/Crypto）。
  removeInclude(config, LEGACY_TYPES_INCLUDE);
  addInclude(config, GLOBALS_INCLUDE);

  if (!Array.isArray(config.exclude)) {
    config.exclude = ['node_modules', '**/node_modules/*'];
  }
  return config;
}

/** 拷贝 d.ts；返回拷贝的文件名列表。切换版本时会删除另一套类型文件。 */
function installTypes(extensionPath, rootPath, version) {
  const sourceDir = path.join(extensionPath, 'types');
  const targetDir = path.join(rootPath, '.airscript', 'types');
  fs.mkdirSync(targetDir, { recursive: true });

  const selected = TYPE_SETS[version] || TYPE_SETS[API_V1];
  // 先确认源文件齐全，避免删掉旧类型后才发现包损坏。
  for (const item of selected) {
    const source = path.join(sourceDir, item.source);
    if (!fs.existsSync(source)) {
      throw new Error(`扩展缺少类型文件：${source}`);
    }
  }

  const keep = new Set(selected.map((item) => item.target));
  for (const name of ALL_TYPE_TARGETS) {
    if (keep.has(name)) continue;
    const stale = path.join(targetDir, name);
    if (fs.existsSync(stale)) {
      fs.rmSync(stale, { force: true });
    }
  }

  const copied = [];
  for (const item of selected) {
    const source = path.join(sourceDir, item.source);
    fs.copyFileSync(source, path.join(targetDir, item.target));
    copied.push(item.target);
  }
  return copied;
}

/** 把当前 API 版本的片段写入工作区 .vscode/airscript.code-snippets。 */
function installSnippets(extensionPath, rootPath, version) {
  const name =
    version === API_V2
      ? 'airscript-v2.json'
      : version === API_DATABOOK
        ? 'airscript-databook.json'
        : 'airscript.json';
  const source = path.join(extensionPath, 'snippets', name);
  if (!fs.existsSync(source)) {
    log(`缺少片段文件：${source}`);
    return false;
  }
  const targetDir = path.join(rootPath, '.vscode');
  fs.mkdirSync(targetDir, { recursive: true });
  fs.copyFileSync(source, path.join(targetDir, 'airscript.code-snippets'));
  return true;
}

function writeGlobals(rootPath, version, includeBuiltins) {
  const lines = [
    '// 由 WPS AirScript Support 生成，请勿手动修改。',
    '// 该文件把 AirScript 的类型声明引入当前 TS/JS 项目。'
  ];
  if (version === API_V2) {
    // ApiV2.d.ts 自己引用 lib.kso.d.ts，且已包含 HTTP/KSDrive，
    // 不能再引用 v1 的 services/builtins，否则 console/HTTP 会重复声明。
    lines.push('/// <reference path="./types/ApiV2.d.ts" />');
  } else if (version === API_DATABOOK) {
    // ApiV1.d.ts 是完整的 1.0 表格/数据表声明，已包含 console/HTTP/SMTP/KSDrive。
    lines.push('/// <reference path="./types/ApiV1.d.ts" />');
  } else {
    lines.push('/// <reference path="./types/airscript.d.ts" />');
    lines.push('/// <reference path="./types/airscript-services.d.ts" />');
    if (includeBuiltins) {
      lines.push('/// <reference path="./types/airscript-builtins.d.ts" />');
    }
  }
  fs.writeFileSync(path.join(rootPath, '.airscript', 'globals.d.ts'), lines.join('\n') + '\n', 'utf8');
}

/** lib 是否包含 DOM（含 DOM.Iterable 等）。未配置 lib 时 TS 默认包含 DOM。 */
function libHasDom(config) {
  const lib = config?.compilerOptions?.lib;
  if (!Array.isArray(lib)) {
    return true;
  }
  return lib.some((item) => typeof item === 'string' && item.toUpperCase().startsWith('DOM'));
}

function exampleContent(version) {
  if (version === API_DATABOOK) {
    return `/**
 * WPS AirScript 1.0（数据表 / 工作表）示例。
 *
 * 在 WPS 表格的「脚本编辑器」中运行；本地仅用于编辑和类型检查。
 * 数据表通过 sheet.Field 与 sheet.Record 访问，工作表单元格通过 sheet.Range 访问。
 */
function main() {
  const sheet = Application.ActiveSheet

  // 数据表：字段与记录
  const fields = sheet.Field.GetFields()
  console.log("字段：" + fields.map(function (field) { return field.name }).join("、"))

  const page = sheet.Record.GetRecords({ PageSize: 10 })
  console.log("本页记录数：" + page.Records.length)

  // 工作表：单元格
  sheet.Range("A1").Value = "Hello AirScript 1.0"
  console.log("A1 = " + sheet.Range("A1").Text)
}
main()
`;
  }
  if (version === API_V2) {
    return `/**
 * WPS AirScript 2.0（表格 / Excel 对象模型）示例。
 *
 * 在 WPS 表格的「脚本编辑器」中运行；本地仅用于编辑和类型检查。
 * API 2.0 与 DOM lib 冲突（Range/console/URL），jsconfig 不要包含 DOM。
 */
function main() {
  const sheet = Application.ActiveSheet
  const range = sheet.Range("A1")
  range.Value2 = "Hello AirScript 2.0"
  console.log(sheet.Name + " -> " + range.Address)
  console.log("工作表数量：" + Application.ActiveWorkbook.Worksheets.Count)
}
main()
`;
  }
  return `/**
 * WPS 多维表格 AirScript 示例。
 *
 * 这个文件只用于在 VSCode 中编辑与类型检查；真正的运行方式是：
 * 多维表格 → 脚本编辑器 → 粘贴代码 → 运行。
 * AirScript 在服务端同步执行，不支持 async/await 与 Promise。
 */
function main() {
  const sheet = Application.ActiveSheet
  const view = sheet.Views(1)
  const records = view.Records

  console.log('当前表：' + sheet.Name)
  console.log('记录数：' + records.Count)
}
main()
`;
}

function normalizeExampleText(text) {
  return text.replace(/\r\n/g, '\n');
}

function isKnownGeneratedExample(text) {
  const normalized = normalizeExampleText(text);
  return [API_V1, API_DATABOOK, API_V2].some(
    (version) => normalized === normalizeExampleText(exampleContent(version))
  );
}

function writeExample(rootPath, version) {
  const examplePath = path.join(rootPath, 'airscript-example.js');
  const content = exampleContent(version);
  let existed = false;
  if (fs.existsSync(examplePath)) {
    existed = true;
    const text = fs.readFileSync(examplePath, 'utf8');
    // 只覆盖“与任一内置模板完全一致”的文件；
    // 用户只要改过正文，即使保留文件头也不会被初始化/启动更新覆盖。
    if (
      normalizeExampleText(text) !== normalizeExampleText(content) &&
      !isKnownGeneratedExample(text)
    ) {
      return false;
    }
  }
  fs.writeFileSync(examplePath, content, 'utf8');
  return !existed;
}

function writeConfig(rootPath, existingPath, options = {}) {
  let existing;
  let before = null;
  if (fs.existsSync(existingPath)) {
    // 先备份再解析：即使配置损坏，也留下用户原始文件。
    const backupName = path.basename(existingPath).replace(/\.json$/i, '.backup.json');
    const backupPath = path.join(rootPath, '.airscript', backupName);
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(existingPath, backupPath);
    }
    existing = readExistingJsonc(existingPath);
    if (existing === null || typeof existing !== 'object' || Array.isArray(existing)) {
      throw new Error('配置根必须是 JSON 对象');
    }
    before = JSON.stringify(existing);
  }

  const merged = buildMergedConfig(existing, options);
  // 内容没有变化时不要重写：保留用户配置里的注释、格式和键顺序。
  if (before !== null && before === JSON.stringify(merged)) {
    return {
      created: false,
      changed: false,
      config: merged,
      file: path.basename(existingPath)
    };
  }

  fs.writeFileSync(existingPath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  return {
    created: !existing,
    changed: true,
    config: merged,
    file: path.basename(existingPath)
  };
}

async function initialize(folder, options = {}) {
  const rootPath = folder.uri.fsPath;
  const airscriptDir = path.join(rootPath, '.airscript');
  fs.mkdirSync(airscriptDir, { recursive: true });

  const extensionPath = folder.extensionPath || options.extensionPath;
  if (!extensionPath) {
    vscode.window.showErrorMessage('AirScript: 找不到扩展安装目录，无法复制类型声明。');
    return false;
  }

  const version = normalizeVersion(options.version || getApiVersion(folder));

  // 先解析/合并配置，再改类型文件：配置解析失败时不会留下半切换的类型。
  const configPath = findConfigPath(rootPath);
  let result;
  try {
    result = writeConfig(rootPath, configPath, { checkJs: getCheckJs(folder) });
  } catch (error) {
    vscode.window.showErrorMessage(
      `AirScript: 无法解析已有的 ${path.basename(configPath)}（${error.message}）。` +
        '已保留原文件，请修复 JSON 后重试。'
    );
    log(`${path.basename(configPath)} 解析失败：${error}`);
    return false;
  }

  let copied;
  try {
    copied = installTypes(extensionPath, rootPath, version);
  } catch (error) {
    vscode.window.showErrorMessage(`AirScript: ${error.message}`);
    log(`安装类型声明失败：${error}`);
    return false;
  }
  // DOM 自己声明了 console 与 Crypto，加载 builtins 会报 TS2451。
  // 此时改用 DOM 的声明（console 完整，Crypto 没有 createHash）。
  const hasDom = libHasDom(result.config);

  let snippets = false;
  let createdExample = false;
  try {
    snippets = installSnippets(extensionPath, rootPath, version);
    writeGlobals(rootPath, version, !hasDom);
    createdExample = writeExample(rootPath, version);
  } catch (error) {
    vscode.window.showErrorMessage(
      `AirScript: 类型已复制，但写入工作区文件失败（${error.message}）。` +
        '请检查目录是否只读或磁盘是否已满。'
    );
    log(`写入工作区文件失败：${error}`);
    updateStatusBar(folder);
    return false;
  }
  log(
    `初始化完成：${rootPath}；${versionLabel(version)}（${version}）；类型 ${copied.length} 个；` +
      `片段 ${snippets ? '已写入' : '缺失'}；` +
      `${result.file} ${result.created ? '新建' : '合并'}；示例 ${createdExample ? '新建' : '已存在'}` +
      (hasDom ? '；检测到 DOM lib' : '')
  );

  if (hasDom && !options.silent) {
    const detail =
      version === API_V2
        ? 'API 2.0 的 Range/console/URL 会与 DOM 冲突（TS2451/TS2300），' +
          '请把 jsconfig 的 lib 改为 ["ES2020"]，或把这个脚本放到独立工作区。'
        : version === API_DATABOOK
          ? 'API 1.0 数据表的 Range/console/URL 会与 DOM 冲突（TS2451/TS2300），' +
            '请把 jsconfig 的 lib 改为 ["ES2020"]，或把这个脚本放到独立工作区。'
          : 'console/Crypto 将使用 DOM 的声明，Crypto.createHash 没有类型提示。' +
            '需要完整提示时，请从 lib 移除 DOM，或把脚本放到独立工作区后重新初始化。';
    vscode.window.showWarningMessage(
      `AirScript ${versionLabel(version)}: ${result.file} 的 lib 含 DOM。${detail}`
    );
  }

  if (!options.silent && !options.quietSuccess) {
    const actions = ['打开示例脚本', '打开官方文档'];
    const picked = await vscode.window.showInformationMessage(
      `AirScript ${versionLabel(version)} 工作区已就绪：.airscript/ 类型声明 + ${result.file}。`,
      ...actions
    );
    if (picked === actions[0]) {
      const doc = await vscode.workspace.openTextDocument(path.join(rootPath, 'airscript-example.js'));
      await vscode.window.showTextDocument(doc);
    } else if (picked === actions[1]) {
      vscode.env.openExternal(vscode.Uri.parse(DOCS_URL));
    }
  }

  updateStatusBar(folder);
  return true;
}

function updateStatusBar(folder) {
  if (!statusBar) return;
  if (!folder) {
    statusBar.text = '$(symbol-method) AirScript';
    statusBar.tooltip = '打开一个工作区后初始化 AirScript';
    statusBar.command = 'airscript.init';
    return;
  }

  const version = getApiVersion(folder);
  const expected =
    version === API_V2 ? 'ApiV2.d.ts' : version === API_DATABOOK ? 'ApiV1.d.ts' : 'airscript.d.ts';
  const configured = fs.existsSync(path.join(folder.uri.fsPath, '.airscript', 'types', expected));
  statusBar.text = configured
    ? `$(symbol-method) AirScript ${versionLabel(version)}`
    : '$(symbol-method) AirScript 未初始化';
  statusBar.tooltip = configured
    ? `WPS AirScript ${versionLabel(version)} 类型已安装：${folder.uri.fsPath}\n点击切换 API 模型`
    : '点击初始化 AirScript 工作区';
  statusBar.command = configured ? 'airscript.switchApi' : 'airscript.init';
}

async function newScript() {
  const folder = await pickFolder();
  if (!folder) return;

  const name = await vscode.window.showInputBox({
    prompt: '输入脚本文件名（.js）',
    value: 'airscript-script.js',
    validateInput: (value) => {
      const trimmed = value.trim();
      if (!trimmed) return '文件名不能为空';
      if (trimmed.includes('/') || trimmed.includes('\\')) {
        return '文件名不能包含路径分隔符';
      }
      if (trimmed === '.' || trimmed === '..') return '文件名无效';
      if (/[<>:"|?*]/.test(trimmed)) return '文件名不能包含 < > : " | ? *';
      const base = trimmed.replace(/\.js$/i, '');
      if (!base) return '文件名无效';
      if (/[. ]$/.test(base)) return '文件名不能以点或空格结尾';
      if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i.test(base)) {
        return '该名称是 Windows 保留名，请换一个';
      }
      if (!/\.js$/i.test(trimmed)) return '请使用 .js 扩展名';
      return undefined;
    }
  });
  if (!name) return;

  const target = path.join(folder.uri.fsPath, name.trim());
  if (fs.existsSync(target)) {
    vscode.window.showErrorMessage(`AirScript: 文件已存在：${name.trim()}`);
    return;
  }

  const version = getApiVersion(folder);
  let content;
  if (version === API_V2) {
    content = `/**
 * WPS AirScript 2.0（表格）脚本
 * 在 WPS 表格的「脚本编辑器」中运行；本地仅用于编辑和类型检查。
 */
function main() {
  const sheet = Application.ActiveSheet
  console.log(sheet.Name)
}
main()
`;
  } else if (version === API_DATABOOK) {
    content = `/**
 * WPS AirScript 1.0（数据表 / 工作表）脚本
 * 在 WPS 表格的「脚本编辑器」中运行；本地仅用于编辑和类型检查。
 */
function main() {
  const sheet = Application.ActiveSheet
  console.log(sheet.Name)
  console.log(sheet.Field.GetFields().length)
}
main()
`;
  } else {
    content = `/**
 * WPS 多维表格 AirScript 脚本
 * 在 WPS 多维表格的「脚本编辑器」中运行；本地仅用于编辑和类型检查。
 */
function main() {
  const sheet = Application.ActiveSheet
  console.log(sheet.Name)
}
main()
`;
  }
  try {
    fs.writeFileSync(target, content, 'utf8');
  } catch (error) {
    vscode.window.showErrorMessage(
      `AirScript: 无法创建 ${name.trim()}（${error.message}）。请检查目录是否只读或文件是否被占用。`
    );
    log(`创建脚本失败：${error}`);
    return;
  }
  const doc = await vscode.workspace.openTextDocument(target);
  await vscode.window.showTextDocument(doc);
}

function expectedTypeFiles(version) {
  return (TYPE_SETS[version] || TYPE_SETS[API_V1]).map((item) => item.target);
}

/** 检查工作区配置，输出可操作的问题列表。 */
async function doctor() {
  const folder = await pickFolder();
  if (!folder) return;

  const rootPath = folder.uri.fsPath;
  const version = getApiVersion(folder);
  const lines = [
    `AirScript Doctor`,
    `工作区：${rootPath}`,
    `模型：${versionLabel(version)}（${version}）`
  ];
  const issues = [];

  const configPath = findConfigPath(rootPath);
  const configName = path.basename(configPath);
  if (!fs.existsSync(configPath)) {
    issues.push(`未找到 ${configName}，请运行「AirScript: 初始化 / 更新工作区」。`);
  } else {
    let config;
    try {
      config = readExistingJsonc(configPath);
      lines.push(`${configName}：可解析`);
    } catch (error) {
      issues.push(`${configName} 无法解析：${error.message}`);
    }
    if (config) {
      const co = config.compilerOptions || {};
      if (co.checkJs !== true) {
        issues.push(`${configName} 的 compilerOptions.checkJs 不是 true，JS 文件不会做类型检查。`);
      }
      if (Array.isArray(co.types) && co.types.includes('node')) {
        issues.push(`${configName} 的 compilerOptions.types 含 "node"，会与 Buffer/Crypto 声明冲突。`);
      }
      if (libHasDom(config) && version !== API_V1) {
        issues.push(
          `${configName} 的 compilerOptions.lib 含 DOM；${versionLabel(version)} 会报 TS2451/TS2300。` +
            '请改为 ["ES2020"] 或使用独立工作区。'
        );
      }

      const normalizePattern = (value) => String(value).replace(/\\/g, '/').replace(/^\.\//, '');
      const files = Array.isArray(config.files) ? config.files.map(normalizePattern) : [];
      const include = Array.isArray(config.include) ? config.include.map(normalizePattern) : [];
      const coversGlobals = (pattern) =>
        pattern === '**' ||
        pattern === '**/*' ||
        pattern === '**/*.ts' ||
        pattern === '**/*.d.ts' ||
        pattern === '.airscript/globals.d.ts' ||
        pattern === '.airscript/*.d.ts' ||
        pattern === '.airscript/**/*.d.ts' ||
        pattern.endsWith('/.airscript/globals.d.ts') ||
        (pattern.includes('.airscript') && pattern.endsWith('/**/*.d.ts'));

      const inputPatterns = files.concat(include);
      if (inputPatterns.length > 0 && !inputPatterns.some(coversGlobals)) {
        issues.push(
          `${configName} 的 include/files 未包含 .airscript/globals.d.ts，类型声明没有进入编译。`
        );
      }

      const fileHasGlobals = files.some(coversGlobals);
      const exclude = Array.isArray(config.exclude) ? config.exclude.map(normalizePattern) : [];
      const excludesAirscript = (pattern) => {
        const clean = pattern.replace(/\/+$/, '');
        return (
          clean === '.airscript' ||
          clean === '**/.airscript' ||
          clean === '.airscript/**' ||
          clean.startsWith('.airscript/') ||
          clean.includes('/.airscript/')
        );
      };
      if (!fileHasGlobals && exclude.some(excludesAirscript)) {
        issues.push(`${configName} 的 exclude 排除了 .airscript，类型声明不会生效。`);
      }
    }
  }

  const typeDir = path.join(rootPath, '.airscript', 'types');
  for (const target of expectedTypeFiles(version)) {
    if (!fs.existsSync(path.join(typeDir, target))) {
      issues.push(`缺少类型文件 .airscript/types/${target}`);
    }
  }

  const globalsPath = path.join(rootPath, '.airscript', 'globals.d.ts');
  if (!fs.existsSync(globalsPath)) {
    issues.push('缺少 .airscript/globals.d.ts');
  } else {
    const refs = fs.readFileSync(globalsPath, 'utf8');
    const necessary =
      version === API_V2 ? 'ApiV2.d.ts' : version === API_DATABOOK ? 'ApiV1.d.ts' : 'airscript.d.ts';
    if (!refs.includes(necessary)) {
      issues.push(`.airscript/globals.d.ts 未引用 ${necessary}`);
    }
    if (version === API_V1 && !refs.includes('airscript-services.d.ts')) {
      issues.push('.airscript/globals.d.ts 未引用 airscript-services.d.ts');
    }
  }

  const snippetsPath = path.join(rootPath, '.vscode', 'airscript.code-snippets');
  if (!fs.existsSync(snippetsPath)) {
    issues.push('缺少 .vscode/airscript.code-snippets（代码片段未安装）');
  }

  lines.push('');
  if (issues.length) {
    lines.push('发现的问题：');
    for (const issue of issues) {
      lines.push('  - ' + issue);
    }
  } else {
    lines.push('检查通过：类型、globals、配置与片段均正常。');
  }

  output.clear();
  for (const line of lines) {
    output.appendLine(line);
  }
  output.show(true);

  if (issues.length) {
    vscode.window.showWarningMessage(`AirScript Doctor：发现 ${issues.length} 个问题，详见输出面板。`);
  } else {
    vscode.window.showInformationMessage('AirScript Doctor：检查通过。');
  }
}

async function switchApi(extensionPath) {
  const folder = await pickFolder();
  if (!folder) return;

  const current = getApiVersion(folder);
  const items = [
    {
      label: 'API 1.0 · 多维表格',
      description: 'Application.ActiveSheet / Views / Records / Fields',
      version: API_V1
    },
    {
      label: 'API 1.0 · 数据表 / 工作表',
      description: 'Sheet.Field / Sheet.Record / Range / ActiveWorkbook',
      version: API_DATABOOK
    },
    {
      label: 'API 2.0 · 表格（Excel 对象模型）',
      description: 'Application.ActiveWorkbook / Worksheets / Range',
      version: API_V2
    }
  ];
  const picked = await vscode.window.showQuickPick(items, {
    placeHolder: `选择 AirScript API 版本（当前 ${current}）`
  });
  if (!picked || picked.version === current) return;

  try {
    await setApiVersion(folder, picked.version);
  } catch (error) {
    vscode.window.showErrorMessage(`AirScript: 无法保存模型设置（${error.message}）。`);
    log(`保存 API 版本失败：${error}`);
    return;
  }

  const initialized = await initialize(folder, {
    extensionPath,
    version: picked.version,
    quietSuccess: true
  });
  if (!initialized) {
    // 初始化失败时回滚设置，避免状态栏与磁盘上的类型不一致。
    try {
      await setApiVersion(folder, current);
    } catch (error) {
      log(`回滚 API 版本失败：${error}`);
    }
    updateStatusBar(folder);
    return;
  }

  const reload = '重新加载窗口';
  const choice = await vscode.window.showInformationMessage(
    `已切换到 ${versionLabel(picked.version)}。重新加载窗口后类型提示会完全生效。`,
    reload
  );
  if (choice === reload) {
    await vscode.commands.executeCommand('workbench.action.reloadWindow');
  }
}

function activate(context) {
  output = vscode.window.createOutputChannel('AirScript');
  statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
  statusBar.command = 'airscript.init';
  statusBar.show();
  context.subscriptions.push(output, statusBar);

  const initCommand = vscode.commands.registerCommand('airscript.init', async () => {
    const folder = await pickFolder();
    if (!folder) return;
    await initialize(folder, { extensionPath: context.extensionPath });
  });

  const newCommand = vscode.commands.registerCommand('airscript.newScript', newScript);

  const switchCommand = vscode.commands.registerCommand('airscript.switchApi', () =>
    switchApi(context.extensionPath)
  );

  const docsCommand = vscode.commands.registerCommand('airscript.openDocs', () => {
    vscode.env.openExternal(vscode.Uri.parse(DOCS_URL));
  });

  const docsV2Command = vscode.commands.registerCommand('airscript.openDocsV2', () => {
    vscode.env.openExternal(vscode.Uri.parse(DOCS_URL_V2));
  });

  const doctorCommand = vscode.commands.registerCommand('airscript.doctor', doctor);

  context.subscriptions.push(
    initCommand,
    newCommand,
    switchCommand,
    docsCommand,
    docsV2Command,
    doctorCommand
  );

  // 已初始化的项目在扩展升级后静默刷新类型，避免旧声明残留。
  const folders = vscode.workspace.workspaceFolders || [];
  for (const folder of folders) {
    if (fs.existsSync(path.join(folder.uri.fsPath, '.airscript'))) {
      initialize(folder, { extensionPath: context.extensionPath, silent: true }).catch((error) => {
        log(`自动更新失败：${error}`);
      });
    }
  }
  updateStatusBar(folders[0]);
}

function deactivate() {
  // 无需清理；output 与 statusBar 已注册到 subscriptions。
}

module.exports = { activate, deactivate };
