// 不启动 VSCode，直接 mock `vscode` 模块来跑初始化命令的冒烟测试。
const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const Module = require('module');

const extensionDir = path.resolve(__dirname, '..', 'extension');
const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'airscript-smoke-'));
const errors = [];
const warnings = [];
const commands = {};
const settings = { apiVersion: '1.0' };

const vscode = {
  workspace: {
    workspaceFolders: [{ name: 'demo', uri: { fsPath: workspace } }],
    openTextDocument: async (p) => ({ uri: { fsPath: p } }),
    getConfiguration: () => ({
      get(key, fallback) {
        const name = key.replace(/^airscript\./, '');
        return settings[name] === undefined ? fallback : settings[name];
      },
      async update(key, value) {
        settings[key.replace(/^airscript\./, '')] = value;
      }
    })
  },
  window: {
    activeTextEditor: undefined,
    createOutputChannel: () => ({ appendLine() {}, dispose() {} }),
    createStatusBarItem: () => ({ show() {}, dispose() {}, text: '', tooltip: '' }),
    showInformationMessage: async () => undefined,
    showWarningMessage: (message) => warnings.push(message),
    showErrorMessage: (message) => errors.push(message),
    showInputBox: async () => 'demo-script.js',
    showTextDocument: async () => undefined,
    showQuickPick: async () => undefined
  },
  commands: {
    registerCommand(id, handler) {
      commands[id] = handler;
      return { dispose() {} };
    }
  },
  StatusBarAlignment: { Left: 1 },
  ConfigurationTarget: { Workspace: 2, WorkspaceFolder: 3 },
  Uri: { parse: (value) => ({ fsPath: value, toString: () => value }) },
  env: { openExternal() {} }
};

const originalLoad = Module._load;
Module._load = function (request) {
  if (request === 'vscode') {
    return vscode;
  }
  return originalLoad.apply(this, arguments);
};

const extension = require(path.join(extensionDir, 'extension.js'));
const context = { extensionPath: extensionDir, subscriptions: [] };
extension.activate(context);

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

(async () => {
  // 1. 全新项目初始化
  await commands['airscript.init']();
  assert.ok(fs.existsSync(path.join(workspace, '.airscript/types/airscript.d.ts')), 'types copied');
  assert.ok(fs.existsSync(path.join(workspace, '.airscript/types/airscript-services.d.ts')), 'services copied');
  assert.ok(fs.existsSync(path.join(workspace, '.airscript/types/airscript-builtins.d.ts')), 'builtins copied');
  assert.ok(fs.existsSync(path.join(workspace, '.airscript/globals.d.ts')), 'globals written');
  assert.ok(fs.existsSync(path.join(workspace, 'airscript-example.js')), 'example written');

  const fresh = readJson(path.join(workspace, 'jsconfig.json'));
  assert.strictEqual(fresh.compilerOptions.checkJs, true);
  assert.strictEqual(fresh.compilerOptions.noEmit, true);
  assert.deepStrictEqual(fresh.compilerOptions.types, []);
  assert.ok(fresh.include.includes('**/*.js'));
  assert.ok(fresh.include.includes('.airscript/globals.d.ts'));
  assert.ok(!fresh.include.includes('.airscript/**/*.d.ts'), 'legacy glob include removed');
  assert.ok(
    fs.readFileSync(path.join(workspace, '.airscript/globals.d.ts'), 'utf8').includes('airscript-builtins.d.ts'),
    'builtins referenced without DOM'
  );
  assert.ok(!errors.length, 'no errors: ' + errors.join('; '));

  // 2. 已有 JSONC 配置：备份 + 合并，不丢用户设置
  const userConfig = `{
  // 用户自己的配置
  "compilerOptions": {
    "strict": true,
    "lib": ["ES2019"],
  },
  "include": ["src/**/*.js"],
}
`;
  fs.writeFileSync(path.join(workspace, 'jsconfig.json'), userConfig);
  await commands['airscript.init']();

  const merged = readJson(path.join(workspace, 'jsconfig.json'));
  assert.strictEqual(merged.compilerOptions.strict, true, 'user option kept');
  assert.strictEqual(merged.compilerOptions.checkJs, true, 'checkJs added');
  assert.ok(merged.compilerOptions.lib.includes('ES2019'), 'user lib kept');
  assert.ok(merged.compilerOptions.lib.includes('ES2020'), 'ES2020 added');
  assert.ok(merged.include.includes('src/**/*.js'), 'user include kept');
  assert.ok(merged.include.includes('**/*.ts'), 'ts include added');
  assert.ok(
    fs.existsSync(path.join(workspace, '.airscript/jsconfig.backup.json')),
    'backup written'
  );
  assert.strictEqual(
    fs.readFileSync(path.join(workspace, '.airscript/jsconfig.backup.json'), 'utf8'),
    userConfig,
    'backup is verbatim'
  );

  // 再跑一次：备份应保留最初的用户配置，而不是被合并结果覆盖。
  await commands['airscript.init']();
  assert.strictEqual(
    fs.readFileSync(path.join(workspace, '.airscript/jsconfig.backup.json'), 'utf8'),
    userConfig,
    'backup survives repeated init'
  );

  // 2b. lib 含 DOM：跳过 builtins，避免 console/Crypto 的 TS2451。
  fs.writeFileSync(
    path.join(workspace, 'jsconfig.json'),
    JSON.stringify({ compilerOptions: { lib: ['ES2020', 'DOM'] } })
  );
  await commands['airscript.init']();
  assert.ok(
    !fs.readFileSync(path.join(workspace, '.airscript/globals.d.ts'), 'utf8').includes('airscript-builtins.d.ts'),
    'builtins skipped with DOM'
  );
  assert.ok(warnings.some((message) => message.includes('DOM')), 'DOM warning shown');

  // 2c. 切到 API 2.0：安装 ApiV2/lib.kso，删除 v1 类型，globals 只引用 ApiV2。
  settings.apiVersion = '2.0';
  fs.writeFileSync(
    path.join(workspace, 'jsconfig.json'),
    JSON.stringify({ compilerOptions: { lib: ['ES2020'] } })
  );
  await commands['airscript.init']();
  assert.ok(fs.existsSync(path.join(workspace, '.airscript/types/ApiV2.d.ts')), 'ApiV2 copied');
  assert.ok(fs.existsSync(path.join(workspace, '.airscript/types/lib.kso.d.ts')), 'lib.kso copied');
  assert.ok(!fs.existsSync(path.join(workspace, '.airscript/types/airscript.d.ts')), 'v1 types removed');
  const v2Globals = fs.readFileSync(path.join(workspace, '.airscript/globals.d.ts'), 'utf8');
  assert.ok(v2Globals.includes('ApiV2.d.ts'), 'v2 globals references ApiV2');
  assert.ok(!v2Globals.includes('airscript-services.d.ts'), 'v2 globals skips v1 services');
  assert.ok(
    fs.readFileSync(path.join(workspace, 'airscript-example.js'), 'utf8').includes('ActiveWorkbook'),
    'v2 example updated'
  );
  const v2Snippets = fs.readFileSync(path.join(workspace, '.vscode/airscript.code-snippets'), 'utf8');
  assert.ok(v2Snippets.includes('Application.ActiveWorkbook'), 'v2 snippets written');
  assert.strictEqual(commands['airscript.switchApi'] instanceof Function, true, 'switch command registered');

  // 2c2. 切到 API 1.0 数据表：只安装 ApiV1，清理 v1/v2 类型。
  settings.apiVersion = '1.0-databook';
  await commands['airscript.init']();
  assert.ok(fs.existsSync(path.join(workspace, '.airscript/types/ApiV1.d.ts')), 'ApiV1 copied');
  assert.ok(!fs.existsSync(path.join(workspace, '.airscript/types/airscript.d.ts')), 'dbSheet types removed');
  assert.ok(!fs.existsSync(path.join(workspace, '.airscript/types/ApiV2.d.ts')), 'v2 types removed for databook');
  const databookGlobals = fs.readFileSync(path.join(workspace, '.airscript/globals.d.ts'), 'utf8');
  assert.ok(databookGlobals.includes('ApiV1.d.ts'), 'databook globals references ApiV1');
  assert.ok(!databookGlobals.includes('airscript-services.d.ts'), 'databook globals skips v1 services');
  assert.ok(
    fs.readFileSync(path.join(workspace, 'airscript-example.js'), 'utf8').includes('GetRecords'),
    'databook example updated'
  );
  const databookSnippets = fs.readFileSync(
    path.join(workspace, '.vscode/airscript.code-snippets'),
    'utf8'
  );
  assert.ok(databookSnippets.includes('sheet.Field.GetFields'), 'databook snippets written');

  // 2d. 切回 API 1.0：恢复 v1 类型。
  settings.apiVersion = '1.0';
  await commands['airscript.init']();
  assert.ok(fs.existsSync(path.join(workspace, '.airscript/types/airscript.d.ts')), 'v1 types restored');
  assert.ok(!fs.existsSync(path.join(workspace, '.airscript/types/ApiV2.d.ts')), 'v2 types removed');
  const v1Snippets = fs.readFileSync(path.join(workspace, '.vscode/airscript.code-snippets'), 'utf8');
  assert.ok(v1Snippets.includes('多维表格') && !v1Snippets.includes('ActiveWorkbook'), 'v1 snippets restored');

  // 2e. 切换命令：QuickPick 选择 2.0 后写入设置并重装类型。
  vscode.window.showQuickPick = async () => ({ version: '2.0' });
  await commands['airscript.switchApi']();
  assert.strictEqual(settings.apiVersion, '2.0', 'switch command updates setting');
  assert.ok(fs.existsSync(path.join(workspace, '.airscript/types/ApiV2.d.ts')), 'switch command installs v2');

  // 2f. 切换命令选择数据表：写入 1.0-databook 并安装 ApiV1。
  vscode.window.showQuickPick = async () => ({ version: '1.0-databook' });
  await commands['airscript.switchApi']();
  assert.strictEqual(settings.apiVersion, '1.0-databook', 'switch command selects databook');
  assert.ok(fs.existsSync(path.join(workspace, '.airscript/types/ApiV1.d.ts')), 'switch installs ApiV1');

  settings.apiVersion = '1.0';
  await commands['airscript.init']();

  // 3. 新建脚本命令
  await commands['airscript.newScript']();
  const script = path.join(workspace, 'demo-script.js');
  assert.ok(fs.existsSync(script), 'new script written');
  assert.ok(fs.readFileSync(script, 'utf8').includes('function main()'), 'script template');

  // 4. 损坏的 jsconfig：保留原文件并提示
  const broken = '{ "compilerOptions": { "checkJs": true, } ';
  fs.writeFileSync(path.join(workspace, 'jsconfig.json'), broken);
  await commands['airscript.init']();
  assert.strictEqual(
    fs.readFileSync(path.join(workspace, 'jsconfig.json'), 'utf8'),
    broken,
    'broken config untouched'
  );
  assert.ok(errors.some((message) => message.includes('无法解析')), 'parse error reported');

  // 恢复成可解析配置，便于随后用 tsc 检查扩展实际生成的文件。
  fs.writeFileSync(
    path.join(workspace, 'jsconfig.json'),
    JSON.stringify({ compilerOptions: { strict: true } })
  );
  await commands['airscript.init']();

  console.log('smoke ok:', workspace);
  console.log('files:', fs.readdirSync(workspace).join(', '));
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
