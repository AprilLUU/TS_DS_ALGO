import TreeNode from "./type"

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1) return root2
  if (!root2) return root1

  function merge(node1: TreeNode, node2: TreeNode) {
    node1.val += node2.val
    if (node1.left && node2.left) merge(node1.left, node2.left)
    if (node1.right && node2.right) merge(node1.right, node2.right)

    if (!node1.left && node2.left) {
      node1.left = node2.left
    }
    if (!node1.right && node2.right) {
      node1.right = node2.right
    }
    return node1
  }

  return merge(root1, root2)
}

function mergeTreesV2(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1) return root2
  if (!root2) return root1

  root1.val += root2.val
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)
  
  return root1
}

export {}