import TreeNode from "./type"

function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (!root) return null
  // 小于 寻找右子树上满足区间要求的节点
  if (root.val < low) return trimBST(root.right, low, high)
  // 大于 寻找左子树上满足区间要求的节点
  if (root.val > high) return trimBST(root.left, low, high)
  
  // 递归处理左右子树 找到满足区间要求的节点
  root.left = trimBST(root.left, low, high)
  root.right = trimBST(root.right, low, high)

  // 满足区间要求直接返回
  return root
}

export {}
