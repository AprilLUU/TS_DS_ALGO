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

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  let max = 0
  const queue: TreeNode[] = []
  queue.push(root)

  while (queue.length !== 0) {
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    max++
  }

  return max
}

const root = new TreeNode(1)
const right = new TreeNode(2)
root.right = right
right.left = new TreeNode(3)

console.log(maxDepth(root))

export {}