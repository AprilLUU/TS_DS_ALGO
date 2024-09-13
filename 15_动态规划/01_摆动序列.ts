function wiggleMaxLength(nums: number[]): number {
  if (nums.length <= 1) return nums.length

  // dp[i][0]代表nums[i]作为山峰出现的最长摆动序列长度
  // dp[i][1]代表nums[i]作为山谷出现的最长摆动序列长度
  let dp: number[][] = new Array(nums.length)
    .fill(0)
    .map(() => new Array(2).fill(0))
  // 初始化 第一个元素即可作为山谷或者山峰出现
  dp[0][0] = dp[0][1] = 1

  for (let i = 1; i < nums.length; i++) {
    // 初始化nums[i]只有其自身作为山峰或者山谷
    dp[i][0] = dp[i][1] = 1

    for (let j = 0; j < i; j++) {
      // 如果nums[j] < nums[i], 说明nums[i]可以作为山峰接替在nums[j]的摆动序列之后
      if (nums[j] < nums[i]) {
        // 取最长子序列长度
        dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1)
      }
    }

    for (let j = 0; j < i; j++) {
      // 如果nums[j] > nums[i], 说明nums[i]可以作为山谷接替在nums[j]的摆动序列之后
      if (nums[j] > nums[i]) {
        dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1)
      }
    }
  }

  let res: number[] = []
  dp.forEach((item) => res.push(...item))

  return Math.max(...res)
}
