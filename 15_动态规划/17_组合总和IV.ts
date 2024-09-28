function combinationSum4(nums: number[], target: number): number {
  const dp = new Array(target + 1).fill(0)
  dp[0] = 1

  /**
   * 先遍历背包再遍历物品 求排列数
   * 每次都在之前的方案数上重复放上已放过的物品 相当于考虑顺序
   * j = 1 {1}
   * dp[0][1] = 0 + dp[0][0] = 1 dp[1][1] = dp[0][1] = 1 dp[2][1] = dp[1][1] = 1
   * dp[1] = dp[2][1] = 1
   * j = 2 {1, 1}
   *       {2}
   * dp[0][2] = 0 + dp[1] = 1 dp[1][2] = dp[0][2] + dp[0] = 2 dp[2][2] = dp[1][2] = 2
   * dp[2] = dp[2][2] = 2
   * j = 3 {1, 1, 1} {2, 1}
   *       {1, 2}
   * dp[0][3] = 0 + dp[2] = 2 dp[1][3] = dp[0][3] + dp[1] = 3 dp[2][3] = dp[1][3] = 3
   * dp[3] = dp[2][3] = 3
   * j = 4 {1, 1, 1, 1} {2, 1, 1} {1, 2, 1}
   *       {1, 1, 2} {2, 2}
   * dp[0][4] = 0 + dp[3] = 3 dp[1][4] = dp[0][3] + dp[2] = 5 dp[2][4] = dp[1][4] = 5
   * dp[4] = dp[2][4] = 5
   * j = 5 {1, 1, 1, 1, 1} {2, 1, 1, 1} {1, 2, 1, 1} {1, 1, 2, 1} {2, 2, 1}
   *       {1, 1, 1, 2} {2, 1, 2} {1, 2, 2}
   *       {5}
   * dp[0][5] = 0 + dp[4] = 5 dp[1][4] = dp[0][4] + dp[3] = 8 dp[2][4] = dp[1][4] + dp[0] = 9
   * dp[5] = dp[2][5] = 9
   */
  for (let j = 0; j <= target; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (j - nums[i] >= 0) {
        dp[j] += dp[j - nums[i]]
      }
    }
  }

  return dp[target]
}

function combinationSum4V1(nums: number[], target: number): number {
  const dp = new Array(nums.length)
    .fill(0)
    .map(() => new Array(target + 1).fill(0))

  for (let i = 0; i < nums.length; i++) dp[i][0] = 1

  // 求排列数 需要先遍历背包再遍历物品 即考虑放的顺序
  for (let j = 1; j <= target; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (j < nums[i]) {
        i === 0 ? (dp[i][j] = 0) : (dp[i][j] = dp[i - 1][j])
      } else {
        let prevState = 0
        i === 0 ? (prevState = 0) : (prevState = dp[i - 1][j])
        // 按列更新 取得前面所有的方案数 需要取最后一个状态的总方案数
        dp[i][j] = prevState + dp[nums.length - 1][j - nums[i]]
      }
    }
    console.log(dp)
  }

  return dp[nums.length - 1][target]
}

const target = 5,
  nums = [1, 2, 5]
console.log(combinationSum4(nums, target))
console.log(combinationSum4V1(nums, target))
