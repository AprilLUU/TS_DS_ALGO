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

function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = []
  if (!root) return res
  const stack: TreeNode[] = []
  const pathStack: string[] = []
  stack.push(root)
  pathStack.push(String(root.val))

  while (stack.length) {
    const node = stack.pop()!
    const path = pathStack.pop()!
    if (!node.left && !node.right) {
      res.push(path)
    }
    if (node.right) {
      stack.push(node.right)
      pathStack.push(path + "->" + node.right.val)
    }
    if (node.left) {
      stack.push(node.left)
      pathStack.push(path + "->" + node.left.val)
    }
  }

  return res
}


const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
console.log(binaryTreePaths(root))