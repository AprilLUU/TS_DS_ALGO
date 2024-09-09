import TreeNode from "./type"

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0
  let sum = 0
  const stack: TreeNode[] = []
  stack.push(root)

  while (stack.length) {
    const node = stack.pop()!
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val
    }
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }

  return sum
}

export {}