import TreeNode from "./type"

/**
 * 搜索以每个节点作为根节点的所有路径
 * 两次遍历即可
 */
function pathSum(root: TreeNode | null, targetSum: number): number {
  let res = 0
  let pathSum = 0

  // 前序遍历树 获取满足的解
  const traverse = (node: TreeNode | null) => {
    if (!node) return

    pathSum += node.val
    // 找到正确的路径
    if (pathSum === targetSum) res++

    if (node.left) {
      traverse(node.left)
      // 回溯
      pathSum -= node.left.val
    }

    if (node.right) {
      traverse(node.right)
      // 回溯
      pathSum -= node.right.val
    }
  }

  let stack: TreeNode[] = []
  let curr = root

  // 前序遍历树
  while (curr || stack.length) {
    while (curr) {
      // 以当前节点作为根节点 求解
      traverse(curr)
      // 重置路径和 进行下一次搜索
      pathSum = 0
      stack.push(curr)
      curr = curr.left
    }

    curr = stack.pop()!
    curr = curr.right
  }

  return res
}

export {}
