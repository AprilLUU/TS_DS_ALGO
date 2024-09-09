import TreeNode from "./type"

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false
  const traverseStack: TreeNode[] = []
  const pathSumStack: number[] = []
  traverseStack.push(root)
  pathSumStack.push(root.val)

  while (traverseStack.length) {
    const node = traverseStack.pop()!
    const pathSum = pathSumStack.pop()!
    if (!node.left && !node.right && pathSum === targetSum) {
      return true
    }
    if (node.right) {
      traverseStack.push(node.right)
      pathSumStack.push(pathSum + node.right.val)
    }
    if (node.left) {
      traverseStack.push(node.left)
      pathSumStack.push(pathSum + node.left.val)
    }
  }

  return false
}

export {}
