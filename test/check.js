// checkJs smoke test for extension/types/airscript.d.ts
// Every line below is a pattern that appears in the official AirScript docs.

function main() {
  const app = Application;

  // Collections are callable in AirScript (this is the documented form).
  const sheet = app.Sheets(1);
  const view = sheet.Views(1);
  const field = view.Fields(1);
  const desc = sheet.FieldDescriptors("@地址");
  const records = view.Records(10);
  const rr = app.RecordRange(1, ["@名称"]);
  const rr2 = app.RecordRange([1, 2], [1, 2]);
  const bySheet = app.ActiveSheet.RecordRange("1:100", "@名称");

  // Sheets.Add: Before/After are optional in the docs but Type is required, so
  // the type keeps the required slot by making the unused position null.
  const added = app.Sheets.Add(1, null, "xlEtDataBaseSheet", {
    fields: [
      { fieldType: "SingleLineText", args: { fieldName: "文本", fieldWidth: 15 } },
      { fieldType: "Rating", args: { fieldName: "等级", fieldWidth: 15, maxRating: 6 } }
    ],
    name: "数据表",
    views: [{ name: "表格视图", type: "Grid" }]
  });
  added.Name;
  app.Sheets.Add(null, 1, "xlDbDashBoardSheet");
  // @ts-expect-error Type 是必填参数
  app.Sheets.Add(1, null);
  // @ts-expect-error Type 只接受文档中的三个表类型
  app.Sheets.Add(1, null, "not-a-sheet-type");

  // Item() form must keep working too.
  const first = app.Sheets.Item(1);
  const count = app.Sheets.Count;

  // Property + method access.
  sheet.Name = "test";
  const sheetId = app.Sheets.GetActiveSheetId();
  const rowHeight = view.RowHeight;
  const type = field.Type;
  const display = field.Name;

  // Record / RecordRange API.
  const record = records.Item(1);
  const value = record.Value;
  const text = record.Text;
  rr.Value = "hello";
  rr.SetValues([["a", "b"]]);
  rr.Select();
  rr.Add();

  // Events are methods that return an EventContext.
  const onRename = sheet.OnRename((data) => {
    /** @type {string} */ const oldValue = data.originValue;
    /** @type {string} */ const newValue = data.value;
    /** @type {AirScript.Sheet} */ const s = data.Sheet;
    console.log(oldValue, newValue, s.Name);
  });
  onRename.Destroy();

  const onUpdate = app.RecordRange(1).OnUpdate((data) => {
    data.Value;
  });
  onUpdate.Destroy();

  // Enums.
  const fieldType = Enum.DbSheetFieldType.Lookup;
  const valueType = Enum.DbFieldValueType.Fvt_Text;
  const icon = Enum.DbButtonIcon.CalendarCheckIn;
  const descriptor = Application.FieldDescriptor(fieldType, "关联字段");

  // Application factories.
  const cellValue = Application.DBCellValue({ address: "wps.cn", display: "WPS" });
  const criteria = Application.Criteria("@文本", Enum.DbFilterCriteriaOpType.Equals, ["1"]);
  const user = Application.User("283091702", "张三", "avatar.png");
  const selection = Application.Selection;
  const activeSheet = Application.ActiveSheet;

  // Built-in helpers.
  const hash = Crypto.createHash("md5").update("abc").digest("hex");
  const hmac = Crypto.createHmac("sha256", "key").update("abc").digest("hex");
  const buf = Buffer.from("abc").toString("base64");
  Time.sleep(10);
  const arg = Arguments.get("name", "default");

  // Advanced services (docs/advanced-services).
  const resp = HTTP.fetch("https://open.iciba.com/dsapi/", { timeout: 2000 });
  /** @type {number} */ const status = resp.status;
  /** @type {string} */ const bodyText = resp.text();
  const bodyJson = resp.json();
  /** @type {AirScript.Buffer} */ const binary = HTTP.get("https://example.com/a.png").binary();
  HTTP.post("https://example.com/api", { name: "morpheus" }, { headers: { "content-type": "application/json" } });
  HTTP.put("https://example.com/api/1", "body");
  HTTP.delete("https://example.com/api/1");

  const conn = SQL.connect(SQL.Drivers.MySQL, {
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "123456",
    database: "mydb"
  });
  const result = conn.queryAll("SELECT * FROM test");
  /** @type {number} */ const affected = result.affectRowCount;
  /** @type {any[]} */ const rows = result.rows;
  conn.queryAll("INSERT INTO test (id,name) VALUES (?,?)", [1, "a"]);
  conn.queryAll("INSERT INTO test (id,name) VALUES (@id,@name)", [
    { name: "id", value: 1, type: SQL.Types.Int }
  ]);
  conn.close();

  const mailer = SMTP.login({
    host: "smtp.qq.com",
    port: 465,
    secure: true,
    username: "1000000000@qq.com",
    password: "auth-code"
  });
  mailer.send({
    from: "管理员 <admin@example.com>",
    to: ["a@example.com", "B <b@example.com>"],
    subject: "subject",
    text: "text",
    html: "<p>html</p>"
  });

  const url = KSDrive.createFile(KSDrive.FileType.DB, { name: "测试" });
  const files = KSDrive.listFiles({ includeExts: ["et", "ksheet"], count: 100 });
  const next = files.nextOffset;
  const firstFile = files.files[0];
  const opened = KSDrive.openFile(firstFile);
  const opened2 = KSDrive.openFile("https://www.kdocs.cn/l/xxxx");
  opened.close();
  opened2.Application.Range("A1").Text;

  // Context fields available to webhook / automation scripts.
  /** @type {string|undefined} */ const sheetName = Context.sheet_name;
  /** @type {string|undefined} */ const range = Context.range;
  /** @type {any} */ const argv = Context.argv;

  // Values that must be assignable.
  /** @type {string} */ const s1 = hash;
  /** @type {string} */ const s2 = hmac;
  /** @type {string} */ const s3 = buf;
  /** @type {number} */ const n1 = sheetId;
  /** @type {number} */ const n2 = count;
  /** @type {boolean} */ const b1 = true;
  /** @type {any} */ const anyArg = arg;
  /** @type {string} */ const s4 = url;

  // Newly published APIs (2.1.0): legacy permissions, storage, misc, auto task.
  Application.Permissions.Open();
  Application.Permissions.AddUser({ Type: 1, UserIds: ["u1"] });
  Application.Permissions.DeleteUser({ Type: 2, UserId: "u1" });
  Application.Permissions.VisitorProtectType = Application.Enum.DbProtectType.Reader;
  /** @type {string} */ const stored = Application.Storage.GetValue({ StorageKey: "k" });
  Application.Storage.SetValue({ StorageKey: "k", StorageValue: "v" });
  Application.Misc.GetAttachmentUrl({ fileId: "f1" });
  const canEditAuto = Application.AutoTask.HasEditPermission();
  Application.AutoTask.OpenPanel();
  const exported = activeSheet.Export({ Type: "exportAsPdf" });
  /** @type {string} */ const sheetType = activeSheet.Type;
  activeSheet.Description = "desc";
  /** @type {string} */ const companyId = user.CompanyId;
  /** @type {any[] | null} */ const districts = Application.DBCellValue("x").districts;

  console.log(
    s1, s2, s3, s4, n1, n2, b1, anyArg, activeSheet.Name, selection, user.Name,
    status, bodyText, bodyJson, binary, affected, rows, next, sheetName, range, argv
  );
}

main();





