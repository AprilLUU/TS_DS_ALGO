class _Node {
  val: number
  left: _Node | null
  right: _Node | null
  next: _Node | null
  constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.next = next === undefined ? null : next
  }
}

function connect(root: _Node | null): _Node | null {
  if (!root) return root
  const queue: _Node[] = []
  queue.push(root)

  while (queue.length !== 0) {
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!
      const next = queue[0]
      node.next = next && i < n - 1 ? next : null 
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return root
}
