import TreeNode from "./type"

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return null
  if (root!.val > p!.val && root!.val > q!.val) {
    return lowestCommonAncestor(root.left, p, q)
  } 
  if (root!.val < p!.val && root!.val < q!.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  return root
}
