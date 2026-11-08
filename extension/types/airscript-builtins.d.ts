// AirScript 内置的 console / Crypto。
// 这两个全局名与 TypeScript 的 lib.dom 冲突，因此单独成文件：
// 工作区的 lib 不含 DOM 时由 .airscript/globals.d.ts 引用。

declare const console: {
  log(...data: any[]): void;
  info(...data: any[]): void;
  warn(...data: any[]): void;
  error(...data: any[]): void;
  debug(...data: any[]): void;
};

declare const Crypto: {
  /** 创建摘要算法实例，algorithm 支持 "md5" / "sha1" / "sha" / "sha256" / "sha512"。 */
  createHash(algorithm: string): AirScript.Hash;
  /** 创建 HMAC 算法实例。 */
  createHmac(algorithm: string, key: string): AirScript.Hmac;
};

