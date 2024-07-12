module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "prettier",
    "airbnb",
    "airbnb-typescript"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "project": ["./tsconfig.app.json"]
  },
  overrides: [
    {
      "files": ["*.ts", "*.tsx"], 
      "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ]
    }
  ],
plugins: [
    "@typescript-eslint",
    "react"
],
  rules: {
    "linebreak-style": 0,
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
    "no-console": "warn",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "no-nested-ternary": "warn",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "react/function-component-definition": [
        2,
        {
          "namedComponents": "arrow-function",
          "unnamedComponents": "arrow-function"
        }
      ],
  },
}
