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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root && !subRoot) return true
  if (!root) return false
  if (!subRoot) return true

  const traverseStack: TreeNode[] = []
  traverseStack.push(root)
  const sameValSubRoot: TreeNode[] = []
  // 找到相同的子树根节点
  while (traverseStack.length) {
    const node = traverseStack.pop()!
    if (node.val === subRoot.val) sameValSubRoot.push(node)
    if (node.left) traverseStack.push(node.left)
    if (node.right) traverseStack.push(node.right)
  }

  for (let i = 0; i < sameValSubRoot.length; i++) {
    const stack: (TreeNode | null)[] = []
    stack.push(subRoot)
    stack.push(sameValSubRoot[i])
    let isSame = true
    // 对比是否相同
    while (stack.length) {
      const qNode = stack.pop()
      const pNode = stack.pop()
      if (!qNode && !pNode) continue
      if (!pNode || !qNode || qNode.val !== pNode.val) {
        isSame = false
        break
      }
      stack.push(pNode.left)
      stack.push(qNode.left)
      stack.push(pNode.right)
      stack.push(qNode.right)
    }

    if (isSame) return true
  }

  return false
}

const root = new TreeNode(1)
root.left = new TreeNode(1)
const subRoot = new TreeNode(1)
console.log(isSubtree(root, subRoot))

export {}
