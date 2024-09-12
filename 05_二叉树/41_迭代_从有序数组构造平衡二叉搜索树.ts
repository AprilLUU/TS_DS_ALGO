import TreeNode from "./type"

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) return null

  const nodeQueue: TreeNode[] = []
  const leftQueue: number[] = []
  const rightQueue: number[] = []
  const root = new TreeNode(0)
  nodeQueue.push(root)
  leftQueue.push(0)
  rightQueue.push(nums.length - 1)

  while (nodeQueue.length) {
    const left = leftQueue.shift()!
    const right = rightQueue.shift()!
    const mid = Math.floor((left + right) / 2)
    const current = nodeQueue.shift()!
    current.val = nums[mid]

    if (left <= mid - 1) {
      current.left = new TreeNode(0)
      nodeQueue.push(current.left)
      leftQueue.push(left)
      rightQueue.push(mid - 1)
    }

    if (right >= mid + 1) {
      current.right = new TreeNode(0)
      nodeQueue.push(current.right)
      leftQueue.push(mid + 1)
      rightQueue.push(right)
    }
  }

  return root
}

export {}
