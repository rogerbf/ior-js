const indentationOf = require('indentation-length')
const objectFromString = require('object-from-string')(':')

const splitCreateObjects = str => {
  return (
  str
    .split('\n')
    .reduce((acc, line) => {
      if (line.length > 0) {
        return acc.concat({
          indentation: indentationOf(line),
          node: objectFromString(line.trim())
        })
      } else { return acc }
    }, [])
  )
}

module.exports = splitCreateObjects
