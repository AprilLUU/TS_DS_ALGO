import TreeNode from "./type"

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false
  let pathSum = 0
  let hasPath = false

  function getPathSum(node: TreeNode) {
    pathSum += node.val
    if (!node.left && !node.right && pathSum === targetSum) {
      hasPath = true
      return
    }
    if (node.left) {
      getPathSum(node.left)
      pathSum -= node.left.val
    }
    if (node.right) {
      getPathSum(node.right)
      pathSum -= node.right.val
    }
  }

  getPathSum(root)

  return hasPath
}

function hasPathSumV2(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false
  let pathSum = 0

  function getPathSum(node: TreeNode): boolean {
    pathSum += node.val
    if (!node.left && !node.right && pathSum === targetSum) {
      return true
    }
    if (node.left) {
      if (getPathSum(node.left)) return true
      pathSum -= node.left.val
    }
    if (node.right) {
      if (getPathSum(node.right)) return true
      pathSum -= node.right.val
    }

    return false
  }

  return getPathSum(root)
}

export {}