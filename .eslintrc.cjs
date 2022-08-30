const production = process.env.NODE_ENV === 'production'

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['svelte3', '@typescript-eslint'],
    ignorePatterns: ['*.cjs'],
    overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
    settings: {
        'svelte3/typescript': () => require('typescript'),
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
    },
    env: {
        browser: true,
        es2017: true,
        node: true,
    },

    rules: {
        'arrow-parens': ['error', 'always'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        camelcase: 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-style': ['error', 'last'],
        curly: 'error',
        eqeqeq: ['warn', 'always'],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'keyword-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'new-parens': 'error',
        'no-console': production
            ? ['error', { allow: ['warn', 'info', 'error'] }]
            : ['warn', { allow: ['warn', 'info', 'error'] }],
        'no-const-assign': 'error',
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'no-unused-vars': ['error', { args: 'none' }],
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['error', 'always'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'require-await': 'off',
        semi: ['error', 'never'],
        'space-before-blocks': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        strict: ['error', 'never'],
    },
}
