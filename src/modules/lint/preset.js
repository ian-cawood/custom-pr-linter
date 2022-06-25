const lint = require('@commitlint/lint')
const conventionalConfig = require('@commitlint/config-conventional')

const conventional = (input) => lint.default(input, conventionalConfig.rules)

module.exports = {
  conventional,
}
