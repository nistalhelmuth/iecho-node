const assert = require('assert')
const { revertString } = require('../index')

assert.describe('Test Index', function () {
  assert.it('Testing palindrome', function () {
    assert.equal(revertString('ana'), 'ana')
  })

  assert.it('Testing common word', function () {
    assert.equal(revertString('text'), 'txet')
  })
})
