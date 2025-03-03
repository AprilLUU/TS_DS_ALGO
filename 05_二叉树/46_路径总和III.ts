import TreeNode from "./type"

/**
 * 搜索以每个节点作为根节点的所有路径
 * 两次遍历即可
 */
function pathSumV1(root: TreeNode | null, targetSum: number): number {
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

/**
 * 前缀和
 * 哈希表存储路径的前缀和
 */
function pathSum(root: TreeNode | null, targetSum: number): number {
  let res = 0
  const map = new Map<number, number>()
  map.set(0, 1)

  const dfs = (node: TreeNode | null, pre: number) => {
    if (!node) return

    pre += node.val
    if (map.has(pre - targetSum)) {
      res += map.get(pre - targetSum)!
    }
    map.set(pre, (map.get(pre) ?? 0) + 1)
    dfs(node.left, pre)
    dfs(node.right, pre)
    // map.delete(pre)
    // 回溯到上一层结点时，清除当前路径存储的前缀和
    map.set(pre, map.get(pre)! - 1)
  }

  dfs(root, 0)

  return res
}

const root = new TreeNode(0)
root.left = new TreeNode(1)
root.right = new TreeNode(1)
pathSum(root, 1)

export {}
