import TreeNode from "./type"

function convertBST(root: TreeNode | null): TreeNode | null {
  let pre = 0

  function traverse(node: TreeNode | null) {
    if (!node) return
    traverse(node.right)
    node.val += pre
    pre = node.val
    traverse(node.left)
  }

  traverse(root)

  return root
}
