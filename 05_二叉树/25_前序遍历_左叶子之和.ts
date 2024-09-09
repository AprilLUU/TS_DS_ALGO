import TreeNode from "./type"

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0
  let sum = 0
  if (root.left && !root.left.left && !root.left.right) {
    sum += root.left.val
  }

  const leftSum = sumOfLeftLeaves(root.left)
  const rightSum = sumOfLeftLeaves(root.right)

  return sum + leftSum + rightSum
}

export {}