export type RuntimeEnv = Record<string, string | undefined>;

export interface KVNamespace {
  get(key: string): Promise<string | null>;
  put(
    key: string,
    value: string,
    options?: {
      expirationTtl?: number;
    },
  ): Promise<void>;
  delete(key: string): Promise<void>;
}

export interface RuntimeBindings {
  SESSION_KV?: KVNamespace;
}

let runtimeEnv: RuntimeEnv | undefined;
let runtimeBindings: RuntimeBindings | undefined;

export const setRuntimeEnv = (env: RuntimeEnv) => {
  runtimeEnv = env;
};

export const setRuntimeBindings = (bindings: RuntimeBindings) => {
  runtimeBindings = bindings;
};

export const getEnv = (key: string): string | undefined => {
  return runtimeEnv?.[key] ?? (globalThis as any)?.process?.env?.[key];
};

export const requireEnv = (key: string): string => {
  const value = getEnv(key);
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

export const getBindings = (): RuntimeBindings => runtimeBindings ?? {};
