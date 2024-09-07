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
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)
  return 1 + Math.max(leftDepth, rightDepth)
}

const root = new TreeNode(1)
const right = new TreeNode(2)
root.right = right
right.left = new TreeNode(3)

console.log(maxDepth(root))

export {}