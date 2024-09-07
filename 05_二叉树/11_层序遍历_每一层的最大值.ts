class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function largestValues(root: TreeNode | null): number[] {
  const res: number[] = []
  if (!root) return res
  const queue: TreeNode[] = []
  queue.push(root)

  while (queue.length !== 0) {
    const n = queue.length
    let max = queue[0].val
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!
      max = max > node.val ? max : node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(max)
  }

  return res
}

const root = new TreeNode(1)
const right = new TreeNode(2)
root.right = right
right.left = new TreeNode(3)

console.log(largestValues(root))

export {}