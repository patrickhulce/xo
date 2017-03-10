'use strict';
module.exports = {
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2, {
      SwitchCase: 1,
      MemberExpression: 1,
      CallExpression: {arguments: 1}
    }],
    complexity: ['warn', 10],
    'unicorn/filename-case': ['warn', {case: 'kebabCase'}],
    'unicorn/explicit-length-check': 0,
    'no-else-return': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'dot-location': ['error', 'property']
  }
};
