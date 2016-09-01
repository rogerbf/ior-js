const createTree = arr => {
  if (arr.length > 0) {
    const indentation = arr.slice(0, 1)[0].indentation
    return (
    arr
      .reduce((acc, el, i) => {
        if (el.indentation === indentation) {
          return acc.concat(Object.assign({}, { index: arr.indexOf(el) }, el))
        } else { return acc }
      }, [])
      .map((branch, i, branches) => {
        const next = branches[i + 1]
        if (arr[branch.index + 1]) {
          if (branch.indentation < arr[branch.index + 1].indentation) {
            if (next) {
              branch.children = (
                createTree(arr.slice(branch.index + 1, next.index))
              )
              return branch
            } else {
              branch.children = createTree(arr.slice(branch.index + 1))
              return branch
            }
          }
        }
        return branch
      })
    )
  }
}

module.exports = createTree
