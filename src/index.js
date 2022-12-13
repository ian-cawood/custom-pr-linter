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

    await validateTitle(pullRequest, inputs)
  }
  catch (error) {
    core.setFailed(error.message)
  }
}

run()
