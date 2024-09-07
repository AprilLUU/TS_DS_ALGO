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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true
  const stack: (TreeNode | null)[] = []
  // 对比的是根节点的左右子树是否对称
  stack.push(root.left)
  stack.push(root.right)

  while (stack.length !== 0) {
    // 弹出右子树和左子树
    const right = stack.pop()!
    const left = stack.pop()!
    if (!left && !right) continue
    // 不对称的情况
    if (!left || !right || left!.val !== right!.val) return false

    // 使用了栈 需要先压入左子树的节点 再压入右子树的节点
    // 左子树的左节点和右子树的右节点对比
    stack.push(left.left)
    stack.push(right.right)
    // 左子树的右节点和右子树的左节点对比
    stack.push(left.right)
    stack.push(right.left)
  }

  return true
}

const root = new TreeNode(2)
const right = new TreeNode(3)
root.right = right
root.left = new TreeNode(1)

console.log(isSymmetric(root))

export {}
