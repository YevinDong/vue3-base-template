import apis from './apis';
import type { App } from 'vue';

export default {
    install: (app: App) => {
        app.config.globalProperties.$api = apis;
    },
    ...apis,
};
