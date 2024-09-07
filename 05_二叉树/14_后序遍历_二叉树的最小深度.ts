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

// 后序遍历是从叶子节点回溯到根节点 求得是每个节点的高度
function minDepth(root: TreeNode | null): number {
  if (!root) return 0
  const leftDepth = minDepth(root.left)
  const rightDepth = minDepth(root.right)
  // 最小深度指的是从根节点到叶子节点的深度
  // 当左子树为空时，此时最小深度为1 + 右子树的高度
  // 当右子树为空时，此时最小深度为1 + 左子树的高度
  if (!root.left && root.right) return 1 + rightDepth
  if (!root.right && root.left) return 1 + leftDepth
  // 左右子树均不为空时 取其最小高度
  return 1 + Math.min(leftDepth, rightDepth)
}

const root = new TreeNode(1)
const right = new TreeNode(2)
root.right = right
right.left = new TreeNode(3)

console.log(minDepth(root))

export {}