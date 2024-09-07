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

function rightSideView(root: TreeNode | null): number[] {
  const res: number[] = []
  if (!root) return res
  const queue: TreeNode[] = []
  queue.push(root)

  while (queue.length !== 0) {
    for (let i = 0, n = queue.length; i < n; i++) {
      const node = queue.shift()!
      // 当前层的最后一个节点即为右视图可见节点
      if (i === n - 1) res.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return res
}

const root = new TreeNode(1)
const right = new TreeNode(2)
root.right = right
right.left = new TreeNode(3)

console.log(rightSideView(root))

export {}
