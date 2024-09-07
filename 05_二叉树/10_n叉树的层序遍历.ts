class _Node {
  val: number
  children: _Node[]

  constructor(v: number) {
    this.val = v
    this.children = []
  }
}

function levelOrder(root: _Node | null): number[][] {
  const res: number[][] = []
  if (!root) return res
  const queue: _Node[] = []
  queue.push(root)

  while (queue.length !== 0) {
    const levelVal: number[] = []
    for (let i = 0, n = queue.length; i < n; i++) {
      const node = queue.shift()!
      levelVal.push(node.val)
      node.children.forEach((item) => queue.push(item))
    }
    res.push(levelVal)
  }

  return res
}

export {}