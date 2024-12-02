function increasingTriplet(nums: number[]): boolean {
  const dp: number[] = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
    }
    if (dp[i] === 3) return true
  }

  return false
}
