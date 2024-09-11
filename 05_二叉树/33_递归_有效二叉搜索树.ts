import TreeNode from "./type"

function isValidBST(root: TreeNode | null): boolean {
  let pre: TreeNode | null = null

  function isValid(root: TreeNode | null) {
    if (!root) return true
    const leftIsValid = isValid(root.left)
    // 二叉搜索树的中序遍历一定是升序的 如果不满足升序则不符合
    if (pre) {
      if (pre.val >= root.val) return false
    }
    pre = root
    const rightIsValid = isValid(root.right)

    return leftIsValid && rightIsValid
  }

  return isValid(root)
}

function isValidBSTV2(root: TreeNode | null): boolean {
  const nums: number[] = []

  function traverse(node: TreeNode | null) {
    if (!node) return
    traverse(node.left)
    nums.push(node.val)
    traverse(node.right)
  }

  if (!nums.length) return true
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) return false
  }

  return true
}

const root = new TreeNode(5)
root.left = new TreeNode(4)
root.right = new TreeNode(6)
root.right.left = new TreeNode(3)
root.right.right = new TreeNode(7)
console.log(isValidBST(root))
