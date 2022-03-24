module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/indent': 'off',
        'import/prefer-default-export': 'off',
        'linebreak-style': 'off',
        'no-console': 'off',
        'max-len': 'off',
        'no-restricted-syntax': 'warn',
        indent: [
            'error', 4,
        ],
        'no-new': 'off',
    },
    ignorePatterns: [
        '.eslintrc.js',
        '*.js',
    ],
};
