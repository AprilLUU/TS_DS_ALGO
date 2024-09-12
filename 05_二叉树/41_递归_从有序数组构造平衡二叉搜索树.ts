import TreeNode from "./type"

function sortedArrayToBST(nums: number[]): TreeNode | null {

  function traverse(left: number, right: number) {
    if (left > right) return null
    const mid = left + Math.floor((right - left) / 2)
    const root = new TreeNode(nums[mid])
    root.left = traverse(left, mid - 1)
    root.right = traverse(mid + 1, right)
    return root
  }

  return traverse(0, nums.length - 1)
}

export {}
