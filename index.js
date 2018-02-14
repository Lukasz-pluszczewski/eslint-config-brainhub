'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
  ],
  plugins: [
    'babel',
    'react',
    'import',
  ],
  rules: {
    'no-cond-assign': 2,
    'no-console': 1,
    'no-debugger': 2,
    'no-irregular-whitespace': 2,
    'no-unexpected-multiline': 2,
    'no-unsafe-negation': 2,
    'valid-jsdoc': [2, {
      requireParamDescription: false,
      requireReturn: false,
      prefer: { returns: 'return' },
    }],
    curly: 2,
    'default-case': 2,
    'dot-notation': 2,
    eqeqeq: 2,
    'guard-for-in': 2,
    'no-alert': 1,
    'no-caller': 2,
    'no-empty-function': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-global-assign': 2,
    'no-invalid-this': 0,
    'no-labels': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-return-assign': 0,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-useless-concat': 2,
    'no-void': 2,
    'no-warning-comments': 1,
    'no-with': 2,
    radix: [2, 'as-needed'],
    'no-shadow': 0,
    'no-undef': 2,
    'no-undefined': 2,
    'no-unused-vars': [2, { args: 'after-used' }],
    'no-use-before-define': 2,
    'array-bracket-spacing': [2, 'never'],
    'brace-style': 2,
    camelcase: 2,
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'consistent-this': 2,
    'eol-last': 2,
    'func-call-spacing': 2,
    indent: [2, 2, { SwitchCase: 1 }],
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': 2,
    'keyword-spacing': 2,
    'linebreak-style': 2,
    'max-len': [2, {
      code: 120,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'new-cap': 0,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': 0,
    'one-var': [2, {
      var: 'never',
      let: 'never',
      const: 'never',
    }],
    'operator-linebreak': [2, 'before'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    semi: 0,
    'semi-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'spaced-comment': [2, 'always'],
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': 2,
    'constructor-super': 2,
    'generator-star-spacing': [2, 'before'],
    'no-duplicate-imports': 2,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-useless-constructor': 2,
    'no-var': 2,
    'object-shorthand': [2, 'always'],
    'prefer-const': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'rest-spread-spacing': 2,
    'yield-star-spacing': [2, 'before'],
    'react/forbid-prop-types': [2, { forbid: ['any', 'array', 'object'] }],
    'react/no-children-prop': 2,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-typos': 2,
    'react/no-string-refs': 2,
    'react/no-will-update-set-state': 2,
    'react/prop-types': [2, {}],
    'react/react-in-jsx-scope': 2,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': [2, {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        '/^render.+$/',
        'render',
      ],
    }],
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-no-bind': [2, { ignoreRefs: true }],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-pascal-case': 2,
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-extraneous-dependencies': 2,
    'import/first': 2,
    'import/no-duplicates': 2,
    'import/no-namespace': 2,
    'import/extensions': [2, { js: 'never', jsx: 'never', json: 'never' }],
    'import/newline-after-import': 2,
    'import/no-named-default': 2,
    'babel/new-cap': 2,
    'babel/object-curly-spacing': [2, 'always'],
    'babel/no-invalid-this': 2,
    'babel/semi': 2,
  },
};
