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

function minCameraCover(root: TreeNode | null): number {
  if (!root) return 0
  let res = 0

  // 0 无覆盖 1 有摄像头 2 有覆盖
  function traverse(node: TreeNode | null) {
    // 空节点设置为有覆盖 避免在叶子节点上放置摄像头
    if (!node) return 2
    const left = traverse(node.left)
    const right = traverse(node.right)

    // 左右孩子均有覆盖 此时该节点处于无覆盖状态
    if (left === 2 && right === 2) return 0
    // [0 0] [0 1] [0 2] [1 0] [2 0] 
    // 左右孩子有一个没覆盖 需要在此节点放置摄像头
    if (left === 0 || right === 0) {
      res++
      return 1
    }
    // [1, 2] [2, 1] [1, 1]
    // 左右孩子有摄像头 此时该节点处于有覆盖状态
    if (left === 1 || right === 1) return 2
  }
  // 回溯到根节点时仍处于无覆盖状态 需要在根节点防止摄像头
  if (traverse(root) === 0) res++
  return res
}
