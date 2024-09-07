class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true

  function compare(pNode: TreeNode | null, qNode: TreeNode | null): boolean {
    if (!pNode && !qNode) return true
    if (!pNode || !qNode || pNode.val !== qNode.val) return false

    return compare(pNode.left, qNode.left) && compare(pNode.right, qNode.right)
  }

  return compare(p, q)
}

export {}
