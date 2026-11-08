// 用扩展自己的初始化流程生成一个 API 2.0 项目，供 tsc 验证。
const fs = require('fs');
const os = require('os');
const path = require('path');
const Module = require('module');

const extensionDir = path.resolve(__dirname, '..', 'extension');
const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'airscript-v2-'));
const commands = {};

const vscode = {
  workspace: {
    workspaceFolders: [{ name: 'v2', uri: { fsPath: workspace } }],
    openTextDocument: async (p) => ({ uri: { fsPath: p } }),
    getConfiguration: () => ({
      get: (key, fallback) => (key.endsWith('apiVersion') ? '2.0' : fallback),
      update: async () => undefined
    })
  },
  window: {
    activeTextEditor: undefined,
    createOutputChannel: () => ({ appendLine() {}, dispose() {} }),
    createStatusBarItem: () => ({ show() {}, dispose() {}, text: '', tooltip: '' }),
    showInformationMessage: async () => undefined,
    showWarningMessage: () => undefined,
    showErrorMessage: (message) => {
      throw new Error(message);
    },
    showInputBox: async () => undefined,
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
  if (request === 'vscode') return vscode;
  return originalLoad.apply(this, arguments);
};

const extension = require(path.join(extensionDir, 'extension.js'));
extension.activate({ extensionPath: extensionDir, subscriptions: [] });

(async () => {
  await commands['airscript.init']();
  fs.writeFileSync(
    path.join(workspace, 'check.js'),
    `function main() {
  const sheet = Application.ActiveSheet
  const range = sheet.Range("A1")
  range.Value2 = "Hello"
  console.log(sheet.Name + ":" + range.Address)

  const used = sheet.UsedRange
  const lastRow = used.Row + used.Rows.Count - 1
  for (let r = 2; r <= lastRow; r++) {
    console.log(sheet.Range("A" + r).Text, sheet.Range("B" + r).Value2)
  }

  const wb = Application.ActiveWorkbook
  console.log(wb.Name, wb.Worksheets.Count)
  Application.Worksheets.Add()
  const added = Application.ActiveSheet
  added.Name = "新工作表"

  const resp = HTTP.fetch("https://example.com", { method: "GET", timeout: 5000 })
  if (resp.status() === 200) console.log(resp.text(), resp.json(), resp.binary())

  console.log(MsgBox("完成"))
  console.log(InputBox("名称", "输入"))
}
main()
`,
    'utf8'
  );
  console.log(workspace);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
