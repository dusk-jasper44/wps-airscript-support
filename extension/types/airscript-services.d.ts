/**
 * WPS 多维表格 AirScript —— 高级服务声明
 *
 * 覆盖：HTTP 网络 API、SQL 数据库 API、SMTP 邮件 API、KSDrive 云文档 API、Context 上下文。
 *
 * 使用前需在脚本编辑器【工具栏】-【服务】菜单中添加对应服务，
 * 否则运行时对象为 undefined。详细说明见 docs/ 目录中的 advanced-services 文档。
 */

declare namespace AirScript {
  namespace Services {
    /** 请求头键值对。 */
    interface HTTPHeaders {
      [name: string]: string;
    }

    /** fetch 的请求参数。 */
    interface HTTPRequestOption {
      /** 请求方法，默认 GET，如 'GET'、'POST'、'PUT'、'DELETE'。 */
      method?: string;
      /** 超时时间（毫秒），0~60000，默认 10000，超出范围按默认值处理。 */
      timeout?: number;
      /** 请求头。 */
      headers?: HTTPHeaders;
      /** 请求体，通常为字符串。 */
      body?: string;
    }

    /** get/delete/post/put 的通用请求参数。 */
    interface HTTPMethodRequestOption {
      /** 超时时间（毫秒），0~60000，默认 10000。 */
      timeout?: number;
      /** 请求头。 */
      headers?: HTTPHeaders;
    }

    /**
     * HTTP 响应对象。
     *
     * 响应体是流数据，`text()`、`json()`、`binary()` 只有首次调用能拿到数据，
     * 之后调用返回空内容，因此请只选择一种方式读取。
     */
    interface HTTPResponse {
      /** HTTP 状态码，如 200。 */
      readonly status: number;
      /** HTTP 状态描述，如 'OK'。 */
      readonly statusText: string;
      /** 响应头。 */
      readonly headers: HTTPHeaders;
      /** 以文本形式读取响应体。 */
      text(): string;
      /** 将响应体按 JSON 解析后返回。 */
      json(): any;
      /** 以 Buffer 形式读取二进制响应体。 */
      binary(): Buffer;
    }

    /** 网络 API（需添加「网络API」服务）。只允许访问不带端口号的域名，响应体最大 2M。 */
    interface HTTPService {
      /** 发起自定义类型的网络请求。 */
      fetch(url: string, options?: HTTPRequestOption): HTTPResponse;
      /** 发起 GET 请求。 */
      get(url: string, options?: HTTPMethodRequestOption): HTTPResponse;
      /** 发起 DELETE 请求。 */
      delete(url: string, options?: HTTPMethodRequestOption): HTTPResponse;
      /** 发起 POST 请求；body 为对象时发送 JSON，配合 multipart/form-data 头可发送表单。 */
      post(url: string, body?: any, options?: HTTPMethodRequestOption): HTTPResponse;
      /** 发起 PUT 请求。 */
      put(url: string, body?: any, options?: HTTPMethodRequestOption): HTTPResponse;
    }

    /** 数据库驱动集合，只读。 */
    interface SQLDrivers {
      /** MySQL 驱动。 */
      readonly MySQL: string;
      /** PostgreSQL 驱动。 */
      readonly PostgreSQL: string;
      /** SQL Server 驱动。 */
      readonly SQLServer: string;
    }

    /**
     * SQL Server 字段类型集合（仅 SQL Server 需要）。
     *
     * 常用值：Bit、TinyInt、SmallInt、Int、BigInt、Numeric、Decimal、
     * Float、Real、Date、DateTime、Time、Char、VarChar、NVarChar、Binary、
     * Null、TVP、UniqueIdentifier、Variant、xml 等。
     */
    interface SQLTypes {
      readonly [typeName: string]: string;
    }

    /** SQL.connect 的连接参数。 */
    interface SQLConnectOptions {
      /** 数据库主机。 */
      host: string;
      /** 端口，MySQL 通常 3306，SQL Server 通常 1433，PostgreSQL 通常 5432。 */
      port: number;
      /** 用户名。 */
      username: string;
      /** 密码。 */
      password: string;
      /** 数据库名。 */
      database: string;
    }

    /** 带类型的插入参数（SQL Server 必须提供 type）。 */
    interface SQLInsertData {
      /** 字段名。 */
      name: string;
      /** 字段值。 */
      value: any;
      /** 字段类型，取 SQL.Types 中的值。 */
      type?: string;
    }

    /** queryAll 的返回结果。 */
    interface SQLResult {
      /** 受影响的行数。 */
      affectRowCount: number;
      /** 查询返回的数据行。 */
      rows: any[];
    }

    /** 数据库连接对象，使用完必须调用 close()。 */
    interface SQLConnection {
      /**
       * 执行 SQL 语句。
       * @param sql SQL 语句，可使用 ? 占位符。
       * @param insertData 占位符参数；SQL Server 可传 SQLInsertData[] 指定类型。
       */
      queryAll(sql: string, insertData?: any[] | SQLInsertData[]): SQLResult;
      /** 关闭数据库连接，程序结束前务必调用。 */
      close(): void;
    }

    /** 数据库 API（需添加「数据库API」服务）。 */
    interface SQLService {
      /** 数据库驱动集合。 */
      readonly Drivers: SQLDrivers;
      /** 数据库字段类型集合，仅 SQL Server 使用。 */
      readonly Types: SQLTypes;
      /** 连接数据库，返回连接对象。 */
      connect(driver: string, options: SQLConnectOptions): SQLConnection;
    }

    /** SMTP.login 的登录参数。 */
    interface SMTPLoginOptions {
      /** 邮件服务器域名，如 smtp.qq.com。 */
      host: string;
      /** 端口；默认值由 secure 决定：false→587，true→465。 */
      port?: number;
      /** 是否使用 TLS。465 端口通常为 true，587/25 端口为 false。 */
      secure: boolean;
      /** 登录账户名（邮箱地址）。 */
      username: string;
      /** 登录密码或 SMTP 授权码。 */
      password: string;
      /** 建立连接的超时时间（毫秒），默认 10000。 */
      timeout?: number;
    }

    /** 要发送的邮件内容。 */
    interface MailMessage {
      /** 发件人，可写成 '管理员 <admin@example.com>'。 */
      from: string;
      /** 收件人，支持多个地址。 */
      to: string | string[];
      /** 邮件主题。 */
      subject: string;
      /** 纯文本正文。 */
      text: string;
      /** HTML 正文，可选。 */
      html?: string;
    }

    /** 邮件发送者（由 SMTP.login 返回）。 */
    interface Mailer {
      /** 发送一封邮件。 */
      send(message: MailMessage): void;
    }

    /** 邮件 API（需添加「邮件API」服务）。 */
    interface SMTPService {
      /** 登录 SMTP 服务器，返回邮件发送者。 */
      login(options: SMTPLoginOptions): Mailer;
    }

    /** 云文档支持的文件类型集合。 */
    interface KSDriveFileType {
      /** 智能文档。 */
      readonly AP: string;
      /** 智能表格。 */
      readonly KSheet: string;
      /** 表格。 */
      readonly ET: string;
      /** 多维表。 */
      readonly DB: string;
    }

    /** KSDrive.createFile 的创建参数。 */
    interface KSDriveCreateOptions {
      /** 新文件名。 */
      name?: string;
      /** 保存目录链接。 */
      dirUrl?: string;
      /** 源文件链接，用于「另存为」。 */
      source?: string;
    }

    /** listFiles 返回的单个文件信息。 */
    interface KSDriveFileInfo {
      /** 文件名。 */
      fileName: string;
      /** 加密后的文件 id。 */
      fileId: string;
      /** 创建时间戳。 */
      createTime: number;
      /** 修改时间戳。 */
      updateTime: number;
    }

    /** listFiles 的可选参数。 */
    interface KSDriveListOptions {
      /** 目录链接；为空时列出「我的云文档」。 */
      dirUrl?: string;
      /** 起始偏移量，通常传入上一次返回的 nextOffset。 */
      offset?: number;
      /** 本次返回的文件数量，默认 30。 */
      count?: number;
      /** 文件类型过滤，如 ['et', 'ksheet']。 */
      includeExts?: string[];
    }

    /** listFiles 的返回结果。 */
    interface KSDriveFilesInfo {
      /** 文件信息列表。 */
      files: KSDriveFileInfo[];
      /** 下一页偏移量，-1 表示没有更多。 */
      nextOffset: number;
    }

    /** 云文档打开后的文件对象。 */
    interface KSDriveFile {
      /** 被打开文件的操作对象，可继续使用 Range 等 API。 */
      Application: any;
      /** 关闭文件；使用完必须调用，否则无法再次 openFile。 */
      close(): void;
    }

    /** 云文档 API（需添加「云文档API」服务）。 */
    interface KSDriveService {
      /** 文件类型集合。 */
      readonly FileType: KSDriveFileType;
      /** 创建新文件或另存为新文件，返回新文件 URL。 */
      createFile(type: string, createOptions?: KSDriveCreateOptions): string;
      /** 打开一个云文档，返回文件对象。 */
      openFile(openInfo: string | KSDriveFileInfo): KSDriveFile;
      /** 列出目录下的文件。 */
      listFiles(options?: KSDriveListOptions): KSDriveFilesInfo;
    }

    /** 脚本运行时上下文（Webhook / 自动化触发时可用）。 */
    interface AirScriptContext {
      /** Webhook 传入的上下文参数对象。 */
      argv?: any;
      /** db / et / ksheet 运行时所在表名。 */
      sheet_name?: string;
      /** et / ksheet 运行时所在区域，如 '$B$156'。 */
      range?: string;
      /** et / ksheet 点击超链接所在单元格。 */
      link_from?: string;
      /** db 运行时所在视图名。 */
      db_active_view?: string;
      /** db 运行时所在选区。 */
      db_selection?: string;
    }
  }
}

/** 网络 API（需在「服务」菜单添加「网络API」）。 */
declare const HTTP: AirScript.Services.HTTPService;
/** 数据库 API（需在「服务」菜单添加「数据库API」）。 */
declare const SQL: AirScript.Services.SQLService;
/** 邮件 API（需在「服务」菜单添加「邮件API」）。 */
declare const SMTP: AirScript.Services.SMTPService;
/** 云文档 API（需在「服务」菜单添加「云文档API」）。 */
declare const KSDrive: AirScript.Services.KSDriveService;
/** 脚本运行时上下文。 */
declare const Context: AirScript.Services.AirScriptContext;
