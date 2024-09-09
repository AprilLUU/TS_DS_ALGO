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

function countNodes(root: TreeNode | null): number {
  if (!root) return 0
  let leftDepth = 1
  let rightDepth = 1
  let left = root.left
  let right = root.right

  while (left) {
    left = left.left
    leftDepth++
  }

  while (right) {
    right = right.right
    rightDepth++
  }

  // 左子树的高度和右子树的高度相同 在完全二叉树中属于满二叉树
  // 左移1位相当于乘2 (2 << n) -> 2^(n + 1) 
  if (leftDepth === rightDepth) return (2 << leftDepth - 1) - 1

  return 1 + countNodes(root.left) + countNodes(root.right)
}

console.log(2 << 3)

export {}