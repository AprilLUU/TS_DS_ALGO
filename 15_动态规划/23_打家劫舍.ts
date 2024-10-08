function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  const dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return dp[nums.length - 1]
}

function robV2(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  let prev = nums[0]
  let curr = Math.max(nums[0], nums[1])
  let next = 0

  for (let i = 2; i < nums.length; i++) {
    next = Math.max(curr, prev + nums[i])
    prev = curr
    curr = next
  }

  return curr
}

const nums = [1, 2, 3, 1]
// dp = [1, 2, 0, 0]
// dp = [1, 2, 4, 4]
const nums1 = [2, 7, 9, 3, 1]
// dp = [2, 7, 0, 0, 0]
// dp = [2, 7, 11, 11, 12]
