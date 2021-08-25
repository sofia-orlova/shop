module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'max-len': ['error', { code: 500 }],
    'react/destructuring-assignment': ['off', 'always', { ignoreClassFields: true }],
    'react/no-array-index-key': ['off'],
    'react/no-deprecated': ['off'],
    'no-return-assign': ['off'],
    'no-underscore-dangle': ['off'],
    'no-nested-ternary': ['off'],
    'import/prefer-default-export': ['off'],
    'react/prop-types': ['off'],
  },
};
