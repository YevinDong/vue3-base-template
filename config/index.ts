export function inject_proces(env: any): any {
    const { NODE_ENV } = env;
    const obj = {
        env: NODE_ENV || 'development',
    };

    return () => {
        return obj;
    };
}
