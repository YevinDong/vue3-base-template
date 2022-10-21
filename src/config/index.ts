type importMetaEnvItem = string | boolean | undefined;
interface ImportMetaEnv {
    [key: string]: importMetaEnvItem;
    BASE_URL: string;
    MODE: string;
    DEV: boolean;
    PROD: boolean;
    SSR: boolean;
}
export const env: ImportMetaEnv = import.meta.env;
export function get_env(name: string): importMetaEnvItem {
    return env[`VITE_${name.toUpperCase()}`];
}
