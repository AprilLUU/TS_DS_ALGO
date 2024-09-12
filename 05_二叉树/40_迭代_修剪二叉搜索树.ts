import TreeNode from "./type"

function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (!root) return null

  // 先处理头节点 保证头节点位于[low, high]
  while (root && (root.val < low || root.val > high)) {
    if (root.val < low) root = root.right
    else root = root.left
  }

  // 修剪左子树
  let current: TreeNode | null = root
  while (current) {
    // 左子树上的值小于low 往右找到满足要求的节点
    while (current.left && current.left.val < low) {
      current.left = current.left.right
    }
    current = current.left
  }

  // 修剪右子树
  current = root
  while (current) {
    while (current.right && current.right.val > high) {
      current.right = current.right.left
    }

    current = current.right
  }

  return root
}

export {}
