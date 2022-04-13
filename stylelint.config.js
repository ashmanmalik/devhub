module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'tailwind',
          'mixin',
          'each',
          'include',
          'screen',
        ],
      },
    ],
    'block-no-empty': null,
    'no-descending-specificity': null,
    'custom-property-empty-line-before': null,
    'font-family-no-missing-generic-family-keyword': null,
  },
}
