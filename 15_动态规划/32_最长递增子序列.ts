function lengthOfLIS(nums: number[]): number {
  // dp[i] 以nums[i]为结尾的最长递增子序列长度
  const dp: number[] = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    // 需要与前面所有元素比较 取最大值为更新的长度
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
}

const nums = [0, 1, 0, 3, 2, 3]
/**
 * dp = [1, 2, 1, 2, 3, 4]
 */