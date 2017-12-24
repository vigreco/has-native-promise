'use strict'

var test = require('tape')
var semver = require('semver')
var hasNativePromise = require('./index')

var nodeVerWithPromise = '0.11.13'
var currentNodeVer = process.version

test('Has native promise', function(t) {
  t.plan(1)

  if (semver.lt(currentNodeVer, nodeVerWithPromise)) {
    t.notOk(
      hasNativePromise(),
      'Should return false if node version is < ' + nodeVerWithPromise
    )
  } else {
    t.ok(
      hasNativePromise(),
      'Should return true if node version is >= ' + nodeVerWithPromise
    )
  }
})
