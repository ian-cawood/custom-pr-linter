import test from 'ava'

import * as preset from './preset.js'

const testPrefix = 'modules/lint/preset'

test(`${testPrefix}/conventional - should validate acceptable string`, async t => {
  const result = await preset.conventional('chore: valid string')
	t.true(result.valid)
})

test(`${testPrefix}/conventional - should invalidate unacceptable string`, async t => {
  const result = await preset.conventional('bogus: bogus')
	t.false(result.valid)
})
