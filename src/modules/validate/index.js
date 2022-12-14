const { presets } = require('../lint')

const validateTitle = async (pullRequest, inputs) => {
  const lintFunction = presets[inputs.preset]

  if (typeof lintFunction !== 'function') {
    throw new Error('Preset is not defined')
  }
  
  const result = await lintFunction(pullRequest.title)

  return result
}

module.exports = {
  validateTitle,
}
