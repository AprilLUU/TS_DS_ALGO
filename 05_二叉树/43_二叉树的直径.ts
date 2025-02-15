import TreeNode from "./type"

function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0

  const depth = (node: TreeNode | null): number => {
    if (!node) return 0
    // 获取左右子树的最大深度
    const left = depth(node.left)
    const right = depth(node.right)
    // 最大直径为以该节点为根节点的左右子树的深度之和
    res = Math.max(res, left + right)
    // 返回给上一层
    return Math.max(left, right) + 1
  }

  depth(root)

  return res
}
