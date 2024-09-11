import TreeNode from "./type"

function getMinimumDifference(root: TreeNode | null): number {
  if (!root) return 0
  let minVal = Number.MAX_SAFE_INTEGER
  
  function getLeftMaxVal(node: TreeNode) {
    let current: TreeNode | null = node
    let maxVal = 0
    while (current) {
      maxVal = current.val
      current = current.right
    }
    return maxVal
  }

  function getRightMinVal(node: TreeNode) {
    let current: TreeNode | null = node
    let minVal = 0
    while (current) {
      minVal = current.val
      current = current.left
    }
    return minVal
  }

  function traverse(node: TreeNode) {
    let leftVal = minVal
    if (node.left) {
      leftVal = Math.abs(getLeftMaxVal(node.left) - node.val)
    }
    let rightVal = minVal
    if (node.right) {
      rightVal = Math.abs(getRightMinVal(node.right) - node.val)
    } 
    minVal = Math.min(leftVal, rightVal, minVal)
    if (node.left) traverse(node.left)
    if (node.right) traverse(node.right)
  }

  traverse(root)

  return minVal
}

function getMinimumDifferenceV2(root: TreeNode | null): number {
  if (!root) return 0
  let minVal = Number.MAX_SAFE_INTEGER
  let pre: TreeNode | null = null

  function traverse(node: TreeNode | null) {
    if (!node) return
    traverse(node.left)
    if (pre) {
      minVal = Math.min(minVal, node.val - pre.val)
    }
    pre = node
    traverse(node.right)
  }

  traverse(root)

  return minVal
}

const root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(6)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
getMinimumDifferenceV2(root)

export {}