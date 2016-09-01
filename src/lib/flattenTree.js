const flattenTree = arr => {
  return arr.reduce((acc, el) => {
    if (el.hasOwnProperty('children')) {
      return Object.assign(acc, { [Object.keys(el.node)[0]]: flattenTree(el.children) })
    } else {
      return Object.assign(acc, el.node)
    }
  }, {})
}

module.exports = flattenTree
