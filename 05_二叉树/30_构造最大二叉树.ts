import TreeNode from "./type"

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums.length) return null

  function build(begin: number, end: number): TreeNode | null {
    if (begin === end) return null

    let delimiterIndex = begin
    let max = nums[begin]
    for (let i = begin; i < end; i++) {
      if (nums[i] > max) {
        max = nums[i]
        delimiterIndex = i
      }
    }

    console.log(`delimiter: ${delimiterIndex}`)

    const root = new TreeNode(max)
    console.log("root: " + root.val)
    root.left = build(begin, delimiterIndex)
    root.right = build(delimiterIndex + 1, end)
    return root
  }

  return build(0, nums.length)
}

const nums = [3, 2, 1]
console.log(constructMaximumBinaryTree(nums))