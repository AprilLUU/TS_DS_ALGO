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

function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  const stack: TreeNode[] = []
  if (!root) return res
  let current: TreeNode | null = root

  while (current) {
    res.push(current.val)
    if (current.left) stack.push(current.left)
    if (current.right) stack.push(current.right)
    current = stack.pop() ?? null
  }

  return res.reverse()
}

const root = new TreeNode(1)
const right = new TreeNode(2)
root.right = right
right.left = new TreeNode(3)

console.log(postorderTraversal(root))

export {}
