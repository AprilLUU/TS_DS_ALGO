import TreeNode from "./type"

function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) return 0
  const queue: TreeNode[] = []
  let res = root.val
  queue.push(root)

  while (queue.length) {
    res = queue[0].val
    for (let i = 0, n = queue.length; i < n; i++) {
      const node = queue.shift()!
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return res
}

export {}