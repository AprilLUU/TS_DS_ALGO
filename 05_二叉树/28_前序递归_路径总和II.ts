import TreeNode from "./type"

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = []
  if (!root) return res
  const path: number[] = []
  let pathSum = 0

  function getPathSum(node: TreeNode) {
    pathSum += node.val
    path.push(node.val)

    if (!node.left && !node.right && pathSum === targetSum) {
      res.push([...path])
      return
    }
    if (node.left) {
      getPathSum(node.left)
      pathSum -= node.left.val
      path.pop()
    }
    if (node.right) {
      getPathSum(node.right)
      pathSum -= node.right.val
      path.pop()
    }
  }

  getPathSum(root)

  return res
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(2)
console.log(pathSum(root, 3))
export {}
