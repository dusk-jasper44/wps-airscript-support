// 用扩展自己的初始化流程生成一个 API 1.0 数据表项目，供 tsc 验证。
const fs = require('fs');
const os = require('os');
const path = require('path');
const Module = require('module');

const extensionDir = path.resolve(__dirname, '..', 'extension');
const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'airscript-databook-'));
const commands = {};

const vscode = {
  workspace: {
    workspaceFolders: [{ name: 'databook', uri: { fsPath: workspace } }],
    openTextDocument: async (p) => ({ uri: { fsPath: p } }),
    getConfiguration: () => ({
      get: (key, fallback) => (key.endsWith('apiVersion') ? '1.0-databook' : fallback),
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

  const fields = sheet.Field.GetFields()
  console.log(fields.length, fields[0].id, fields[0].name, fields[0].type)

  const page = sheet.Record.GetRecords({ PageSize: 10, Offset: 0 })
  console.log(page.Offset, page.Records.length)
  page.Records.forEach(function (record) {
    console.log(record.id, record.Fields)
  })

  const created = sheet.Record.CreateRecords({ Records: [{ Fields: { "名称": "苹果" } }] })
  const updated = sheet.Record.UpdateRecords({ Records: [{ id: created[0].id, Fields: { "数量": 20 } }] })
  const deleted = sheet.Record.DeleteRecords({ RecordIds: [updated[0].id] })
  console.log(deleted.length)

  const url = sheet.Record.GetAttachmentURL({ Attachment: "a", UploadId: "u", Source: "" })
  console.log(url)

  sheet.Range("A1").Value = "Hello"
  console.log(sheet.Range("A1").Text, sheet.UsedRange.Row)

  Application.ActiveWorkbook.Sheets.Add()
  console.log(Application.ActiveWorkbook.Sheets.Count)

  const response = HTTP.fetch("https://example.com", { method: "GET", timeout: 5000 })
  if (response.status() === 200) console.log(response.text(), response.json(), response.binary())
  console.log(SMTP, KSDrive)
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
