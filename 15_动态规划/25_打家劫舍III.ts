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

function rob(root: TreeNode | null): number {
  if (!root) return 0
  if (!root.left && !root.right) return root.val

  let val1 = root.val
  if (root.left) val1 += rob(root.left.left) + rob(root.left.right)
  if (root.right) val1 += rob(root.right.left) + rob(root.right.right)
  
  const val2 = rob(root.left) + rob(root.right)

  return Math.max(val1, val2)
}

function robV1(root: TreeNode | null): number {
  const map = new Map<TreeNode, number>()

  const traverse = (node: TreeNode | null): number => {
    if (!node) return 0
    if (!node.left && !node.right) return node.val
    if (map.has(node)) return map.get(node)!
  
    let val1 = node.val
    if (node.left) val1 += rob(node.left.left) + rob(node.left.right)
    if (node.right) val1 += rob(node.right.left) + rob(node.right.right)
    
    const val2 = rob(node.left) + rob(node.right)
    const res = Math.max(val1, val2)
    map.set(node, res)
  
    return res
  }

  return traverse(root)
}

function robV2(root: TreeNode | null): number {

  const robTree = (node: TreeNode | null): number[] => {
    // index=0为不偷 index=1为偷
    if (!node) return [0, 0]
    const left = robTree(node.left)
    const right = robTree(node.right)

    // 偷当前节点
    const val1 = node.val + left[0] + right[0]
    // 不偷当前节点，此时为考虑偷左右孩子的最大值
    const val2 = Math.max(...left) + Math.max(...right)

    return [val2, val1]
  }

  return Math.max(...robTree(root))
}

export {}
