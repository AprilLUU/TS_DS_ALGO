import TreeNode from "./type"

// 需要遍历整棵树，O(N)
function kthSmallest(root: TreeNode | null, k: number): number {
  let res: number[] = []

  const traverse = (node: TreeNode | null) => {
    if (!node) return
    traverse(node.left)
    res.push(node.val)
    traverse(node.right)
  }

  traverse(root)

  return res[k - 1]
}

/**
 * 中序迭代 访问k次即可得到第k小的节点
 * 时间：需要树高H的时间到达叶节点然后再经过K次访问 O(H + K)
 * 空间：栈的大小取决于树高 O(H)
 * 频繁需要查找时，可以给树节点增加子树节点数
 * 当左子树节点数小于k - 1时，第k小的节点位于右子树，查找右子树
 * 当左子树节点数等于k - 1时，查找到第k小的节点
 * 当左子树节点数大于k - 1时，第k小的节点位于左子树，查找左子树
 */
function kthSmallestV2(root: TreeNode | null, k: number): number {
  let count = 0
  let stack: TreeNode[] = []
  let current = root

  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()!
    if (++count === k) return current.val
    current = current.right
  }

  return -1
}

export {}
