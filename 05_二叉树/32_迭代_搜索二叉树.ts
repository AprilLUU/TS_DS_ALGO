import TreeNode from "./type"

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null

  let current: TreeNode | null = root
  while (current && current.val !== val) {
    if (current.val < val) current = current.right
    else current = current.left
  }

  return current
}
