var semver = require('semver')
var test   = require('tape')
var vers   = require('./')

test('versions', function(t) {
  t.equal(vers, vers.versions, 'primary exports is #versions')

  vers(function(err, versions) {
    if (err) return t.fail(err.message)

    t.ok(versions, 'result is truthy')
    t.ok(Array.isArray(versions), 'result is an array')

    versions.forEach(function(v) {
      t.ok(semver.valid(v), v + ' is a valid semver version')
    })

    t.end()
  })
})

test('latest', function(t) {
  vers.latest(function(err, latest) {
    if (err) return t.fail(err.message)

    t.ok(latest, 'result is truthy')
    t.ok(typeof latest === 'string', 'result is a string')
    t.ok(semver.valid(latest), 'result is a valid semver version')
    t.end()
  })
})
