import { eq } from 'the-office/helpers/eq'
import { module, test } from 'qunit'

module('Unit | Helpers | eq', function() {
  test('it checks equalty', async function(assert) {
    assert.equal(eq([1, 1]), true)
  })

  test('it checks inequalty', async function(assert) {
    assert.equal(eq([1, 2]), false)
  })
})
