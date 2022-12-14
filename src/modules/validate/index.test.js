const test = require('ava')

const { validateTitle } = require('./index')

const testPrefix = 'modules/validate'

test(`${testPrefix}/validateTitle - should validate acceptable pr title`, async t => {
  // given ... a pull request object and preset input
  const inputs = {
    preset: 'conventional'
  }
  const pullRequest = {
    title: 'chore(module): valid pr title'
  }

  // when ... validating the pr title
  const result = await validateTitle(pullRequest, inputs)

  // then ... should return a valid result
	t.true(result.valid)
})

test(`${testPrefix}/validateTitle - should invalidate an invalid pr title`, async t => {
  // given ... a pull request object and preset input
  const inputs = {
    preset: 'conventional'
  }
  const pullRequest = {
    title: 'bad: invalid pr title'
  }

  // when ... validating the pr title
  const result = await validateTitle(pullRequest, inputs)

  // then ... should return a invalid result
	t.false(result.valid)
})

test(`${testPrefix}/prTitle - should throw an error if preset is not defined`, async t => {
  // given ... a pull request object and preset input
  const inputs = {
    preset: 'invalid'
  }
  const pullRequest = {
    title: 'chore(module): valid pr title'
  }

  // when ... validating the pr title
  // then ... should throw an error
  const error = await t.throwsAsync(() => validateTitle(pullRequest, inputs))
  t.is(error.message, 'Preset is not defined')
})
