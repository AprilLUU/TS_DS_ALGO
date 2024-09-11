import TreeNode from "./type"

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true
  const stack: TreeNode[] = []
  let pre: TreeNode | null = null
  let current: TreeNode | null = root

  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop()!
    if (pre) {
      if (pre.val >= current.val) return false
    }
    pre = current
    current = current.right
  }

  return true
}

const root = new TreeNode(5)
root.left = new TreeNode(1)
root.right = new TreeNode(4)
root.right.left = new TreeNode(3)
root.right.right = new TreeNode(6)
isValidBST(root)

export {}