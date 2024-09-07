class _Node {
  val: number
  children: _Node[]

  constructor(val?: number, children?: _Node[]) {
    this.val = val === undefined ? 0 : val
    this.children = children === undefined ? [] : children
  }
}

function maxDepth(root: _Node | null): number {
  if (!root) return 0
  let res = 1

  function getDepth(node: _Node, depth: number) {
    if (!node.children.length) {
      res = Math.max(res, depth)
      return
    }
    node.children.forEach((item) => {
      getDepth(item, depth + 1)
    })
  }

  getDepth(root, res)
  return res
}

export {}