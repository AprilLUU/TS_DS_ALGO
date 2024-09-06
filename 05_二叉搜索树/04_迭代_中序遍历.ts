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

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  const stack: TreeNode[] = []
  if (!root) return res
  let current: TreeNode | null = root

  while (current || stack.length !== 0) {

    while (current) {
      stack.push(current)
      current = current.left
    }
  
    current = stack.pop()!
    res.push(current.val)
    // 有右子树访问右子树 没有赋值为null 避免重复访问
    // if (current.right) current = current.right
    // else current = null
    current = current.right
  }
  
  return res
}

const root = new TreeNode(1)
const right = new TreeNode(2)
root.right = right
right.left = new TreeNode(3)

console.log(inorderTraversal(root))

export {}
