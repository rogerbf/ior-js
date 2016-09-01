const splitCreateObjects = require('./lib/splitCreateObjects.js')
const createTree = require('./lib/createTree.js')
const flattenTree = require('./lib/flattenTree.js')

function parse (str) {
  if (str === undefined) throw new Error('missing argument')
  if (typeof str !== 'string') throw new TypeError('expecting a string')
  if (!/\w/.test(str)) return {}
  return flattenTree(createTree(splitCreateObjects(str)))
}

module.exports = {
  parse
}
