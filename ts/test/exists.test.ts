
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ChineseMedicineClinicsSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ChineseMedicineClinicsSDK.test()
    equal(null !== testsdk, true)
  })

})
