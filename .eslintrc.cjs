const path = require('path');

const tsRules = {
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/unbound-method': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/restrict-plus-operands': 'off',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/restrict-template-expressions': 'off',
  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/await-thenable': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/no-floating-promises': 'off',
  "no-restricted-imports": "off",
  "@typescript-eslint/no-restricted-imports": [
    "warn",
    {
      "name": "react-redux",
      "importNames": ["useSelector", "useDispatch"],
      "message": "Use typed hooks `useAppDispatch` and `useAppSelector` instead."
    }
  ],
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
};
const reactRules = {
  'react/prop-types': 'off',
  'react/display-name': 'off',
  'react/react-in-jsx-scope': 'off'
};

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': path.join(__dirname, 'tsconfig.json'),
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
      'react-refresh',
      '@typescript-eslint'
  ],
  rules: {
    ...tsRules,
    ...reactRules,
    'react-refresh/only-export-components': 'warn',
  },
}
