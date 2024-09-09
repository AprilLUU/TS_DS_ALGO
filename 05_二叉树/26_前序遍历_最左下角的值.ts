import TreeNode from "./type"

function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) return 0
  let res = 0
  let max = 0

  function getLeftLeaf(node: TreeNode, depth: number) {
    if (!node.left && !node.right) {
      res = max >= depth ? res : node.val
      max = max >= depth ? max : depth
      return
    }

    if (node.left) getLeftLeaf(node.left, depth + 1)
    if (node.right) getLeftLeaf(node.right, depth + 1)
  }

  getLeftLeaf(root, 1)
  return res
}

export {}