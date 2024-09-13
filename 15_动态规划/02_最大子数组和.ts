function maxSubArray(nums: number[]): number {
  // dp[i] 以nums[i]结尾的最大子数组和
  // const dp: number[] = new Array(nums.length).fill(0)
  // dp[0] = nums[0]
  let maxSum = nums[0]
  let curr = nums[0]

  for (let i = 1; i < nums.length; i++) {
    // dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    curr = Math.max(curr + nums[i], nums[i])
    maxSum = Math.max(curr, maxSum)
  }

  // return Math.max(...dp)
  return maxSum
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))

export {}