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
const infos = [];
const outputLines = [];
const commands = {};
const settings = { apiVersion: '1.0' };
let inputBox = async () => 'demo-script.js';

const vscode = {
  workspace: {
    workspaceFolders: [{ name: 'demo', uri: { fsPath: workspace } }],
    openTextDocument: async (p) => ({ uri: { fsPath: p } }),
    getConfiguration: (section) => ({
      get(key, fallback) {
        // 真实 VSCode 的 getConfiguration(section) 返回 section 子树，get 只接受相对键。
        if (section && key.startsWith(`${section}.`)) {
          throw new Error(`get 使用了相对 section 的完整键：${key}`);
        }
        return settings[key] === undefined ? fallback : settings[key];
      },
      async update(key, value) {
        if (section && key.startsWith(`${section}.`)) {
          throw new Error(`update 使用了相对 section 的完整键：${key}`);
        }
        settings[key] = value;
      }
    })
  },
  window: {
    activeTextEditor: undefined,
    createOutputChannel: () => ({
      appendLine(line) {
        outputLines.push(line);
      },
      clear() {},
      show() {},
      dispose() {}
    }),
    createStatusBarItem: () => ({ show() {}, dispose() {}, text: '', tooltip: '' }),
    showInformationMessage: async (message) => {
      infos.push(message);
      return undefined;
    },
    showWarningMessage: (message) => warnings.push(message),
    showErrorMessage: (message) => errors.push(message),
    showInputBox: (options) => inputBox(options),
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

  // 2f2. 用户编辑示例正文后，初始化（含启动自动更新）不能覆盖。
  const examplePath = path.join(workspace, 'airscript-example.js');
  fs.appendFileSync(examplePath, '\n// user custom code\n');
  await commands['airscript.init']();
  assert.ok(
    fs.readFileSync(examplePath, 'utf8').includes('// user custom code'),
    'user-edited example preserved'
  );

  // 2f2b. 用户自定义片段不能被静默覆盖，首次写入前备份为 .bak。
  const snippetsPath = path.join(workspace, '.vscode/airscript.code-snippets');
  const customSnippets = `{
  "custom": { "prefix": "myair", "body": ["custom body"] }
}
`;
  fs.writeFileSync(snippetsPath, customSnippets);
  await commands['airscript.init']();
  assert.strictEqual(
    fs.readFileSync(snippetsPath + '.bak', 'utf8'),
    customSnippets,
    'custom snippets backed up'
  );
  assert.ok(
    !fs.readFileSync(snippetsPath, 'utf8').includes('custom body'),
    'generated snippets replace the managed file'
  );
  await commands['airscript.init']();
  assert.ok(
    fs.readFileSync(snippetsPath + '.bak', 'utf8').includes('custom body'),
    'existing snippet backup is preserved'
  );

  // 2f3. 字符串里的 ",}" 不能被当成尾逗号删掉。
  fs.writeFileSync(
    path.join(workspace, 'jsconfig.json'),
    JSON.stringify({
      compilerOptions: { lib: ['ES2020'] },
      include: ['src/a,}.js']
    })
  );
  await commands['airscript.init']();
  const commaConfig = readJson(path.join(workspace, 'jsconfig.json'));
  assert.ok(
    commaConfig.include.includes('src/a,}.js'),
    'comma inside JSON string preserved'
  );

  // 2f4. UTF-8 BOM 的 jsconfig 也必须能解析。
  fs.writeFileSync(
    path.join(workspace, 'jsconfig.json'),
    '\uFEFF' + JSON.stringify({ compilerOptions: { lib: ['ES2020'] } })
  );
  await commands['airscript.init']();
  assert.strictEqual(errors.length, 0, 'BOM config initialized without errors');
  assert.ok(
    readJson(path.join(workspace, 'jsconfig.json')).compilerOptions.checkJs === true,
    'BOM config merged'
  );

  settings.apiVersion = '1.0';
  settings.checkJs = true;
  await commands['airscript.init']();

  // 2g. 已有 tsconfig.json：优先合并 tsconfig，而不是另建 jsconfig。
  const tsconfigUser = `{
  "compilerOptions": { "strict": true },
  "include": ["src/**/*.ts"]
}
`;
  fs.writeFileSync(path.join(workspace, 'tsconfig.json'), tsconfigUser);
  const infosBeforeTsconfig = infos.length;
  await commands['airscript.init']();
  const mergedTs = readJson(path.join(workspace, 'tsconfig.json'));
  assert.strictEqual(mergedTs.compilerOptions.strict, true, 'tsconfig user option kept');
  assert.strictEqual(mergedTs.compilerOptions.checkJs, true, 'tsconfig checkJs added');
  assert.ok(mergedTs.include.includes('src/**/*.ts'), 'tsconfig user include kept');
  assert.ok(mergedTs.include.includes('**/*.js'), 'tsconfig JS include added');
  const tsconfigInfos = infos.slice(infosBeforeTsconfig);
  assert.ok(
    tsconfigInfos.some((message) => message.includes('tsconfig.json')),
    'success message names tsconfig.json'
  );
  assert.ok(
    !tsconfigInfos.some((message) => message.includes('jsconfig.json')),
    'success message does not name jsconfig.json'
  );
  assert.ok(
    fs.existsSync(path.join(workspace, '.airscript/tsconfig.backup.json')),
    'tsconfig backup written'
  );
  assert.strictEqual(
    fs.readFileSync(path.join(workspace, '.airscript/tsconfig.backup.json'), 'utf8'),
    tsconfigUser,
    'tsconfig backup is verbatim'
  );

  // 2h. airscript.checkJs=false 只影响新建配置。
  settings.checkJs = false;
  fs.rmSync(path.join(workspace, 'tsconfig.json'));
  fs.rmSync(path.join(workspace, 'jsconfig.json'));
  await commands['airscript.init']();
  assert.strictEqual(
    readJson(path.join(workspace, 'jsconfig.json')).compilerOptions.checkJs,
    false,
    'checkJs setting applied to new config'
  );
  settings.checkJs = true;
  fs.rmSync(path.join(workspace, 'jsconfig.json'));
  await commands['airscript.init']();

  // 2h2. 配置内容未变化时不要重写，保留用户注释与格式。
  const commentConfig = `{
  // 用户注释必须保留
  "compilerOptions": {
    "checkJs": true,
    "allowJs": true,
    "noEmit": true,
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020"]
  },
  "include": ["**/*.js", "**/*.ts", ".airscript/globals.d.ts"],
  "exclude": ["node_modules", "**/node_modules/*"]
}
`;
  fs.writeFileSync(path.join(workspace, 'jsconfig.json'), commentConfig);
  await commands['airscript.init']();
  assert.strictEqual(
    fs.readFileSync(path.join(workspace, 'jsconfig.json'), 'utf8'),
    commentConfig,
    'unchanged config keeps comments'
  );
  // 后续用例需要纯 JSON 配置。
  fs.writeFileSync(
    path.join(workspace, 'jsconfig.json'),
    JSON.stringify({
      compilerOptions: {
        checkJs: true,
        allowJs: true,
        noEmit: true,
        target: 'ES2020',
        module: 'ESNext',
        lib: ['ES2020']
      },
      include: ['**/*.js', '**/*.ts', '.airscript/globals.d.ts'],
      exclude: ['node_modules', '**/node_modules/*']
    })
  );

  // 2i. Doctor 命令已注册，正常配置不报问题。
  assert.strictEqual(commands['airscript.doctor'] instanceof Function, true, 'doctor registered');
  const warningsBeforeDoctor = warnings.length;
  await commands['airscript.doctor']();
  assert.strictEqual(warnings.length, warningsBeforeDoctor, 'doctor passes clean workspace');

  // 2j. Doctor 能发现 exclude 排除 .airscript、include 漏掉 globals。
  const jsconfigPath = path.join(workspace, 'jsconfig.json');
  const brokenDoctorConfig = readJson(jsconfigPath);
  brokenDoctorConfig.exclude = ['.airscript'];
  fs.writeFileSync(jsconfigPath, JSON.stringify(brokenDoctorConfig));
  const warningsBeforeExclude = warnings.length;
  await commands['airscript.doctor']();
  assert.ok(warnings.length > warningsBeforeExclude, 'doctor reports .airscript exclude');
  assert.ok(
    outputLines.some((line) => line.includes('exclude') && line.includes('.airscript')),
    'doctor output mentions exclude'
  );

  const missingGlobalsConfig = readJson(jsconfigPath);
  delete missingGlobalsConfig.exclude;
  missingGlobalsConfig.include = ['src/**/*.js'];
  fs.writeFileSync(jsconfigPath, JSON.stringify(missingGlobalsConfig));
  const warningsBeforeInclude = warnings.length;
  await commands['airscript.doctor']();
  assert.ok(warnings.length > warningsBeforeInclude, 'doctor reports missing globals include');
  assert.ok(
    outputLines.some((line) => line.includes('include/files')),
    'doctor output mentions include/files'
  );
  await commands['airscript.init']();

  // 2k. Windows 非法文件名与保留名在输入框阶段被拒绝。
  let inputOptions;
  const normalInputBox = inputBox;
  inputBox = async (options) => {
    inputOptions = options;
    return undefined;
  };
  await commands['airscript.newScript']();
  assert.ok(inputOptions.validateInput('bad:name.js'), 'invalid character rejected');
  assert.ok(inputOptions.validateInput('CON.js'), 'Windows reserved name rejected');
  assert.ok(inputOptions.validateInput('.js'), 'empty base name rejected');
  assert.strictEqual(inputOptions.validateInput('good-name.js'), undefined, 'normal name accepted');
  inputBox = normalInputBox;

  // 3. 新建脚本命令
  await commands['airscript.newScript']();
  const script = path.join(workspace, 'demo-script.js');
  assert.ok(fs.existsSync(script), 'new script written');
  assert.ok(fs.readFileSync(script, 'utf8').includes('function main()'), 'script template');

  // 4. 损坏的 jsconfig：先备份原文件、保留原文件并提示
  const broken = '{ "compilerOptions": { "checkJs": true, } ';
  const brokenBackup = path.join(workspace, '.airscript/jsconfig.backup.json');
  fs.rmSync(brokenBackup, { force: true });
  fs.writeFileSync(path.join(workspace, 'jsconfig.json'), broken);
  await commands['airscript.init']();
  assert.strictEqual(
    fs.readFileSync(path.join(workspace, 'jsconfig.json'), 'utf8'),
    broken,
    'broken config untouched'
  );
  assert.ok(errors.some((message) => message.includes('无法解析')), 'parse error reported');
  assert.strictEqual(
    fs.readFileSync(brokenBackup, 'utf8'),
    broken,
    'broken config backed up before parse'
  );

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
