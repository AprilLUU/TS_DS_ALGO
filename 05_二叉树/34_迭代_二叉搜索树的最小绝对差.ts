import TreeNode from "./type"

function getMinimumDifference(root: TreeNode | null): number {
  if (!root) return 0
  const stack: TreeNode[] = []
  let minVal = Number.MAX_SAFE_INTEGER
  let pre: TreeNode | null = null
  let current: TreeNode | null = root

  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()!
    if (pre) {
      minVal = Math.min(minVal, current.val - pre.val)
    }
    pre = current
    current = current.right
  }

  return minVal
}

const root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(6)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
getMinimumDifference(root)

export {}
