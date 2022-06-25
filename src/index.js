import core from '@actions/core'
import github from '@actions/github'

import { preset } from './modules/lint'

async function run() {
  try {
    const pullRequest = github.context.payload.pull_request

    if (!pullRequest) {
      throw new Error('Payload does not have a pull request')
    }
    
    const result = await preset.conventional(pullRequest.title)

    if (!result.valid) {
      throw new Error(JSON.stringify(result.errors))
    }
  }
  catch (error) {
    core.setFailed(error.message)
  }
}

run()
