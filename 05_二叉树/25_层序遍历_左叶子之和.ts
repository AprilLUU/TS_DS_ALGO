import TreeNode from "./type"

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0
  const queue: TreeNode[] = []
  queue.push(root)
  let sum = 0

  while (queue.length) {
    const node = queue.shift()!
    if (node.left) {
      queue.push(node.left)
      // 判断是否为叶子节点
      if (!node.left.left && !node.left.right) {
        sum += node.left.val
      }
    }
    if (node.right) queue.push(node.right)
  }

  return sum
}

export {}