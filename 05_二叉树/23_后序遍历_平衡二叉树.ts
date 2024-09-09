class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function isBalanced(root: TreeNode | null): boolean {
  function getDepth(root: TreeNode | null): number {
    if (!root) return 0
    const leftDepth = getDepth(root.left)
    if (leftDepth === -1) return -1
    const rightDepth = getDepth(root.right)
    if (rightDepth === -1) return -1
    return Math.abs(leftDepth - rightDepth) > 1
      ? -1
      : 1 + Math.max(leftDepth, rightDepth)
  }

  return getDepth(root) !== -1
}

export {}
