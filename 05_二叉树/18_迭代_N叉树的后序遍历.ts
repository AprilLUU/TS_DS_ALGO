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
  if (!root) return res
  const stack: _Node[] = []
  let current: _Node | null = root

  while (current) {
    res.push(current.val)
    const children = current.children
    for (let i = 0; i < children.length; i++) {
      stack.push(children[i])
    }
    current = stack.pop() ?? null
  }

  return res.reverse()
}

export {}