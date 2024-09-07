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

function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = []
  let queue: TreeNode[] = []
  if (!root) return res
  queue.push(root)

  while (queue.length !== 0) {
    const leverVal: number[] = []
    for (let i = 0, n = queue.length; i < n; i++) {
      const node = queue.shift()!
      leverVal.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(leverVal)
  }

  return res
}

const root = new TreeNode(1)
const right = new TreeNode(2)
root.right = right
right.left = new TreeNode(3)

console.log(levelOrder(root))

export {}
