// Ambient globals required by ApiV2.d.ts.
// Kept minimal on purpose: ApiV2.d.ts assumes these exist in the AirScript 2.0 runtime.
type URL = string;
type Default<T = any, V = any> = any;

interface Buffer {
  toString(encoding?: string): string;
}

declare const Buffer: {
  from(data: any): Buffer;
};
