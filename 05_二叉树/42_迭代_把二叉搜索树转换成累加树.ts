import TreeNode from "./type"

function convertBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  const stack: TreeNode[] = []
  let current: TreeNode | null = root
  let pre = 0

  // 右中左 反中序遍历
  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.right
    }

    current = stack.pop()!
    current.val += pre
    pre = current.val
    current = current.left
  }

  return root
}
