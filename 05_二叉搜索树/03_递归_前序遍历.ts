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

  function preorder(root: TreeNode | null) {
    if (root) {
      res.push(root.val)
      preorder(root.left)
      preorder(root.right)
    }
  }

  preorder(root)

  return res
}

const root = new TreeNode(1)
const right = new TreeNode(2)
root.right = right
right.left = new TreeNode(3)

console.log(preorderTraversal(root))

export {}
