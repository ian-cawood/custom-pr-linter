import lint from '@commitlint/lint'
import conventionalConfig from '@commitlint/config-conventional'

const conventional = (input) => lint.default(input, conventionalConfig.rules)

export {
  conventional,
}
