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


function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [] 
  const stack: TreeNode[] = []
  let current = root

  while (current) {
    // 根左右
    res.push(current.val)
    // 先压入右孩子 弹栈时左孩子先出栈 符合顺序
    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
    current = stack.pop() ?? null
  }

  return res
}

const root = new TreeNode(1)
const right = new TreeNode(2)
root.right = right
right.left = new TreeNode(3)

console.log(preorderTraversal(root))

export {}