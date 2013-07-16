var assert = require('assert')
  , getport = require('./')
  ;
getport(5000, function (e, p) {
  if (e) throw e
  assert.equal(5000, p)
  getport(6000, 5999, function (e, p) {
    assert.ok(e)
    getport(function (e, p) {
      if (e) throw e
      assert.equal(p, 2000)
      console.log('all tests pass.')
    })
  })
})