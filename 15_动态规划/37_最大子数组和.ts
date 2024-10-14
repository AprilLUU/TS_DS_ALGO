function maxSubArray(nums: number[]): number {
  const dp: number[] = [...nums]

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i], dp[i - 1] + nums[i])
  }

  return Math.max(...dp)
}

function maxSubArrayV2(nums: number[]): number {
  let curr = nums[0]
  let res = nums[0]

  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i])
    res = Math.max(res, curr)
  }

  return res
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// dp = [-2, 1, -2, 4, 3, 5, 6, 1, 5]
