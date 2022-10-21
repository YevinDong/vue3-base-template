module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/essential',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'vue/no-multiple-template-root': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'vue/custom-event-name-casing': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }],
        'no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }],
        'space-before-function-paren': 'off',
        'vue/name-property-casing': ['error', 'PascalCase'], // vue/component-definition-name-casing 对组件定义名称强制使用特定的大小
        'vue/attributes-order': 'off',
        'vue/html-closing-bracket-spacing': ['error'],
        'vue/html-quotes': ['error'],
        'vue/mustache-interpolation-spacing': ['error'],
        // 'vue/max-attributes-per-line': [
        //     'error',
        //     {
        //         singleline: 'below',
        //         multiline: 'below',
        //     },
        // ],
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                registeredComponentsOnly: false,
                ignores: [
                    // "/^van-/"
                ],
            },
        ],
        'vue/component-tags-order': [
            'error',
            {
                order: ['script', 'template', 'style'],
            },
        ],
        'vue/first-attribute-linebreak': 'off',
        'vue/one-component-per-file': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/require-default-prop': 'off',
        'vue/script-setup-uses-vars': 'off',
        'vue/no-v-model-argument': 'off',
        'vue/v-on-event-hyphenation': 'off',
        'vue/no-v-for-template-key': 'off',
        'spaced-comment': [
            'error',
            'always',
            {
                markers: ['/'],
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'any',
                    normal: 'any',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'prefer-const': 'error',
        'no-duplicate-imports': 'error',
    },
};
