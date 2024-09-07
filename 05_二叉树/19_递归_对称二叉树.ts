class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true

  // 比较节点
  // 左节点和右节点
  // 递归比较
  // 左节点的左孩子 VS 右节点的右孩子
  // 左节点的右孩子 VS 右节点的左孩子
  function compare(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true
    if (!left || !right || left!.val !== right!.val) return false

    return compare(left!.left, right!.right) && compare(left!.right, right!.left) 
  }

  return compare(root!.left, root!.right)
}

const root = new TreeNode(2)
const right = new TreeNode(3)
root.right = right
root.left = new TreeNode(1)

console.log(isSymmetric(root))

export {}
