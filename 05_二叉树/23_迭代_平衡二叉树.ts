class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function isBalanced(root: TreeNode | null): boolean {

  if (!root) return true
  const stack: TreeNode[] = []
  stack.push(root)

  function getDepth(root: TreeNode | null): number {
    if (!root) return 0
    const queue: TreeNode[] = []
    queue.push(root)

    let depth = 0
    while (queue.length) {
      depth++
      for (let i = 0, n = queue.length; i < n; i++) {
        const node = queue.shift()!
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }

    return depth
  }

  while (stack.length) {
    const node = stack.pop()!
    if (Math.abs(getDepth(node.left) - getDepth(node.right)) > 1) {
      return false
    }
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }

  return true
}

const root = new TreeNode(1)
const left = new TreeNode(2)
const right = new TreeNode(2)
root.left = left
root.right = right
left.left = new TreeNode(3)
left.right = new TreeNode(3)
left.left.left = new TreeNode(4)
left.left.right = new TreeNode(4)
console.log(isBalanced(root))

export {}
