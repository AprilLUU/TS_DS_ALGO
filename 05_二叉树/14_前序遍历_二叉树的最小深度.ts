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

function minDepth(root: TreeNode | null): number {
  if (!root) return 0
  let res = Number.MAX_SAFE_INTEGER

  function getDepth(node: TreeNode, depth: number) {
    // 走到叶子结点才能计算此时路径的深度
    if (!node.left && !node.right) {
      res = res < depth ? res : depth
      return
    }
    if (node.left) getDepth(node.left, depth + 1)
    if (node.right) getDepth(node.right, depth + 1)
  }

  getDepth(root, 1)
  return res
}

const root = new TreeNode(1)
const right = new TreeNode(2)
root.right = right
right.left = new TreeNode(3)

console.log(minDepth(root))

export {}