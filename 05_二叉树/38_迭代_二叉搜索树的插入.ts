import TreeNode from "./type"

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val)

  let current: TreeNode | null = root
  let parent: TreeNode | null = null

  while (current) {
    parent = current
    if (current.val > val) current = current.left
    else if (current.val < val) current = current.right
  }

  if (parent!.val > val) parent!.left = new TreeNode(val)
  else parent!.right = new TreeNode(val)

  return root
}

export {}