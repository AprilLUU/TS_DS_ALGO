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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root

  const left = root.left
  const right = root.right
  root.left = right
  root.right = left

  invertTree(root.left)
  invertTree(root.right)

  return root
}

const root = new TreeNode(2)
const right = new TreeNode(3)
root.right = right
root.left = new TreeNode(1)

console.log(invertTree(root))

export {}
