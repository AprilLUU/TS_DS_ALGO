import TreeNode from "./type"

function deleteNodeV1(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null
  let parent: TreeNode | null = null
  let current: TreeNode | null = root

  while (current) {
    if (current.val === key) break
    parent = current
    if (current.val > key) current = current.left
    else current = current.right
  }

  if (!current) return root

  const isSuccessor = current.left && current.right
  let replaceNode: TreeNode | null = null
  if (!current.left && !current.right) replaceNode = null
  else if (!current.left) replaceNode = current.right
  else if (!current.right) replaceNode = current.left
  else {
    let delNode = current.right
    while (delNode.left) delNode = delNode.left
    deleteNode(root, delNode.val)
    current.val = delNode.val
  }

  if (!isSuccessor) {
    if (current === root) root = replaceNode
    else {
      const isLeft = parent!.val > current.val
      isLeft ? (parent!.left = replaceNode) : (parent!.right = replaceNode)
    }
  }

  return root
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null
  let parent: TreeNode | null = null
  let current: TreeNode | null = root

  while (current) {
    if (current.val === key) break
    parent = current
    if (current.val > key) current = current.left
    else current = current.right
  }

  if (!current) return root

  function removeNode(delNode: TreeNode, parentNode: TreeNode | null) {
    let replaceNode: TreeNode | null = null
    if (!delNode.left && !delNode.right) replaceNode = null
    else if (!delNode.left) replaceNode = delNode.right
    else if (!delNode.right) replaceNode = delNode.left

    if (delNode === root) root = replaceNode
    else if (parentNode!.val > delNode.val) parentNode!.left = replaceNode
    else parentNode!.right = replaceNode
  }

  if (current.left && current.right) {
    let delNode = current.right
    let delParentNode = current
    while (delNode.left) {
      delParentNode = delNode
      delNode = delNode.left
    }
    current.val = delNode.val
    removeNode(delNode, delParentNode)
  } else {
    removeNode(current, parent)
  }

  return root
}

const root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.right.right = new TreeNode(7)
const delRoot = deleteNodeV1(root, 5)
console.log(delRoot)
