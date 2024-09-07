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
  const stack: (TreeNode | null)[] = []
  stack.push(p)
  stack.push(q)

  while (stack.length !== 0) {
    const qNode = stack.pop()
    const pNode = stack.pop()
    if (!qNode && !pNode) continue
    if (!pNode || !qNode || qNode.val !== pNode.val) return false
    stack.push(pNode.left)
    stack.push(qNode.left)
    stack.push(pNode.right)
    stack.push(qNode.right)
  }

  return true
}

export {}
