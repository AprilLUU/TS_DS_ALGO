import TreeNode from "./type"

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let current = root

  while (current) {
    if (current.val < p!.val && current.val < q!.val) {
      current = current.right
    } else if (current.val > p!.val && current.val > q!.val) {
      current = current.left
    } else {
      break
    }
  }

  return current
}
