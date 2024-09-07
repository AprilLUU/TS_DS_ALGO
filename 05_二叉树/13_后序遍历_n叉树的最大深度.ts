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
  let depth = 0

  for (let i = 0; i < root.children.length; i++) {
    depth = Math.max(depth, maxDepth(root.children[i]))
  }

  return depth + 1
}

export {}