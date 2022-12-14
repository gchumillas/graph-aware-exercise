module.exports = {
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'standard',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'parser': '@typescript-eslint/parser',
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'ignorePatterns': ['.eslintrc.js', '*.config.js'],
  'rules': {
    'max-len': ['error', { 'code': 80, 'ignorePattern': 'TODO:' }],
    'eqeqeq': 'off',
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-unused-vars': 'warn',
    'quote-props': ['error', 'consistent'],
    'linebreak-style': ['error', 'unix'],
    'eol-last': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-wrap-multilines': ['error', { return: 'parens-new-line' }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-newline': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-closing-bracket-location': 'error'
  }
}
