const core = require('@actions/core')
const github = require('@actions/github')

const { validateTitle } = require('./modules/validate')

async function run() {
  try {
    const pullRequest = github.context.payload.pull_request

    if (!pullRequest) {
      throw new Error('Payload does not have a pull request')
    }

    const inputs = {
      preset: core.getInput('lint_preset')
    }

    const result = await validateTitle(pullRequest, inputs)

    if (!result.valid) {
      result.errors.forEach(error => core.info(error.message))
      throw new Error('The title is not valid')
    }
  }
  catch (error) {
    core.setFailed(error.message)
  }
}

run()
