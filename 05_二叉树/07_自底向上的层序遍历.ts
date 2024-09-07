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
  const res: number[][] = []
  const queue: TreeNode[] = []
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
  // 反转即为自底向上的遍历
  return res.reverse()
}

// function levelOrder(root: TreeNode | null): number[][] {
//   const res: number[][] = []
//   const allLevelNode: TreeNode[][] = []
//   const queue: TreeNode[] = []
//   if (!root) return res
//   queue.push(root)

//   while (queue.length !== 0) {
//     const leverNode: TreeNode[] = []
//     for (let i = 0, n = queue.length; i < n; i++) {
//       const node = queue.shift()!
//       leverNode.push(node)
//       if (node.left) queue.push(node.left)
//       if (node.right) queue.push(node.right)
//     }
//     allLevelNode.push(leverNode)
//   }

//   for (let i = allLevelNode.length - 1; i >= 0; i--) {
//     const levelVal: number[] = []
//     const levelNode: TreeNode[] = allLevelNode[i]
//     for (let j = 0; j < levelNode.length; j++) {
//       levelVal.push(levelNode[j].val)
//     }
//     res.push(levelVal)
//   }

//   return res
// }

const root = new TreeNode(1)
const right = new TreeNode(2)
root.right = right
right.left = new TreeNode(3)

console.log(levelOrder(root))

export {}
