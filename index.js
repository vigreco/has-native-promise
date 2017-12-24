'use strict'

module.exports = function() {
  return (
    typeof Promise === 'function' &&
    Promise.toString().indexOf('[native code]') !== -1
  )
}
