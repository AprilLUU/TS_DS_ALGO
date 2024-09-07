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
  const queue: _Node[] = []
  queue.push(root)
  let depth = 0

  while (queue.length) {
    const n = queue.length
    depth++
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!
      node.children.forEach((item) => {
        queue.push(item)
      })
    }
  }

  return depth
}
