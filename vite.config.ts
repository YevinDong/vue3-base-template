import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { inject_proces } from './config/index';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3000,
        open: false,
    },
    plugins: [
        vue(),
        legacy({
            targets: ['> 1%, last 1 version, ie >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                /*
				引入var.scss全局预定义变量，
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
                additionalData: '@import "@/scss/globalVariable.scss";',
                charset: false,
            },
        },
    },
});
