import TreeNode from "./type"

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null

  // 删除节点包括头节点的逻辑
  if (root.val === key) {
    if (!root.left && !root.right) return null
    else if (!root.left) return root.right
    else if (!root.right) return root.left
    else {
      let successor = root.right
      while (successor.left) successor = successor.left
      successor.left = root.left
      root = root.right
      return root
    }
  }
  if (root.val > key) root.left = deleteNode(root.left, key)
  if (root.val < key) root.right = deleteNode(root.right, key)
  
  return root
}

const root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.right.right = new TreeNode(7)
const delRoot = deleteNode(root, 5)
console.log(delRoot)
