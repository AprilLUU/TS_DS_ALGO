class _Node {
  val: number
  children: _Node[]

  constructor(val?: number, children?: _Node[]) {
    this.val = val === undefined ? 0 : val
    this.children = children === undefined ? [] : children
  }
}

function preorder(root: _Node | null): number[] {
  const res: number[] = []

  function traverse(root: _Node | null) {
    if (root) {
      res.push(root.val)
      root.children.forEach((item) => traverse(item))
    }
  }

  traverse(root)
  return res
}

export {}