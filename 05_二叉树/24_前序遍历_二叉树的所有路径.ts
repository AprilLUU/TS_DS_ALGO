class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = []
  if (!root) return res
  const path: number[] = []

  function getPath(node: TreeNode) {
    path.push(node.val)
    if (!node.left && !node.right) {
      res.push(path.join("->"))
      return
    }
    if (node.left) {
      getPath(node.left)
      path.pop()
    }
    if (node.right) {
      getPath(node.right)
      path.pop()
    }
  }

  getPath(root)
  return res
}

function binaryTreePathsV2(root: TreeNode | null): string[] {
  const res: string[] = []
  if (!root) return res

  function getPath(node: TreeNode, path: string) {
    path += node.val
    if (!node.left && !node.right) {
      res.push(path)
      return
    }
    if (node.left) getPath(node.left, path + "->")
    if (node.right) getPath(node.right, path + "->")
  }

  getPath(root, "")
  return res
}

export {}