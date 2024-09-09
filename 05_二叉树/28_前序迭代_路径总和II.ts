import TreeNode from "./type"

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = []
  if (!root) return res

  const traverseStack: TreeNode[] = []
  const pathStack: number[][] = []
  traverseStack.push(root)
  pathStack.push([root.val, root.val])

  while (traverseStack.length) {
    const node = traverseStack.pop()!
    const path = pathStack.pop()!
    const pathSum = path[0]
    if (!node.left && !node.right && pathSum === targetSum) {
      path.shift()
      res.push(path)
    }
    if (node.right) {
      traverseStack.push(node.right)
      const newPath = [...path]
      newPath.push(node.right.val)
      newPath[0] = pathSum + node.right.val
      pathStack.push(newPath)
    }
    if (node.left) {
      traverseStack.push(node.left)
      const newPath = [...path]
      newPath.push(node.left.val)
      newPath[0] = pathSum + node.left.val
      pathStack.push(newPath)
    }
  }

  return res
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(2)
console.log(pathSum(root, 3))
export {}
