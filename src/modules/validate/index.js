const { presets } = require('../lint')

const validateTitle = async (pullRequest, inputs) => {
  const lintFunction = presets[inputs.preset]

  if (!lintFunction instanceof Function) {
    throw new Error('Preset is not defined')
  }
  
  const result = await lintFunction(pullRequest.title)

  if (!result.valid) {
    throw new Error(JSON.stringify(result.errors))
  }

  return result
}

module.exports = {
  validateTitle,
}
