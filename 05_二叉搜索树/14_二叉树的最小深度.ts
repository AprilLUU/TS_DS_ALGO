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

function minDepth(root: TreeNode | null): number {
  if (!root) return 0
  let depth = 0
  const queue: TreeNode[] = []
  queue.push(root)

  while (queue.length !== 0) {
    const n = queue.length
    depth++
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!
      // 层序遍历遍历到叶子节点即为最小深度
      if (!node.left && !node.right) return depth
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return depth
}

const root = new TreeNode(1)
const right = new TreeNode(2)
root.right = right
right.left = new TreeNode(3)

console.log(minDepth(root))

export {}