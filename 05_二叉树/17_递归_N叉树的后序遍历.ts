class _Node {
  val: number
  children: _Node[]

  constructor(val?: number, children?: _Node[]) {
    this.val = val === undefined ? 0 : val
    this.children = children === undefined ? [] : children
  }
}

function postorder(root: _Node | null): number[] {
  const res: number[] = []

  function traverse(root: _Node | null) {
    if (root) {
      root.children.forEach((item) => traverse(item))
      res.push(root.val)
    }
  }

  traverse(root)
  return res
}

export {}
