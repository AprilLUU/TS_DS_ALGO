function change(amount: number, coins: number[]): number {
  const dp = new Array(coins.length)
    .fill(0)
    .map(() => new Array(amount + 1).fill(0))
  // console.log(dp)

  for (let i = coins[0]; i <= amount; i++) {
    // 可以整除物品0 说明可以用物品0装满 此时方案数为1
    if (i % coins[0] === 0) dp[0][i] = 1
  }
  // 装满背包容量为0的方案为1 不放任何物品 
  for (let i = 0; i < coins.length; i++) dp[i][0] = 1
  // console.log(dp)

  for (let i = 1; i < coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      // 放不下物品i 方案数为dp[i - 1][j]
      if (j < coins[i]) dp[i][j] = dp[i - 1][j]
      // 放得下物品i 方案总数为不放物品i + 放物品i
      // dp[i][j - coins[i]]的方案总数就是放物品i的方案总数
      else dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]]
    }
  }

  /**
   * 先遍历背包再遍历物品 求排列数
   * 每次都在之前的方案数上重复放上已放过的物品 相当于考虑顺序
   * j = 1 {1}
   * j = 2 {1, 1} 
   *       {2}
   * j = 3 {1, 1, 1} {2, 1} 
   *       {1, 2}
   * j = 4 {1, 1, 1, 1} {2, 1, 1} {1, 2, 1} 
   *       {1, 1, 2} {2, 2}
   * j = 5 {1, 1, 1, 1, 1} {2, 1, 1, 1} {1, 2, 1, 1} {1, 1, 2, 1} {2, 2, 1}
   *       {1, 1, 1, 2} {2, 1, 2} {1, 2, 2}
   *       {5}
   */
  // for (let j = 1; j <= amount; j++) {
  //   for (let i = 1; i < coins.length; i++) {
  //     if (j < coins[i]) dp[i][j] = dp[i - 1][j]
  //     else dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]]
  //   }
  //   console.log(j)
  //   console.log(dp)
  // }

  // console.log(dp)

  return dp[coins.length - 1][amount]
}

function changeV1(amount: number, coins: number[]): number {
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1

  /**
   * 先遍历物品后遍历背包 求组合数
   * 每一个物品放入之后 就不会再放入 相当于不考虑顺序
   * i = 0 coins[i] = 1 j = 1 {1} 
   *                    j = 2 {1, 1} 
   *                    j = 3 {1, 1, 1} 
   *                    j = 4 {1, 1, 1, 1} 
   *                    j = 5 {1, 1, 1, 1, 1}
   * i = 1 coins[i] = 2 j = 2 {1, 1} {2} 
   *                    j = 3 {1, 1, 1} {1, 2} 
   *                    j = 4 {1, 1, 1, 1} {1, 1, 2} {2, 2}
   *                    j = 5 {1, 1, 1, 1, 1} {1, 1, 1, 2} {1, 2, 2}
   * i = 2 coins[i] = 5 j = 5 {1, 1, 1, 1, 1} {1, 1, 1, 2} {1, 2, 2} {5}
   */
  // for (let i = 0; i < coins.length; i++) {
  //   for (let j = coins[i]; j <= amount; j++) {
  //     dp[j] += dp[j - coins[i]]
  //   }
  //   console.log(dp)
  // }
  
  /**
   * 先遍历背包再遍历物品 求排列数
   * 每次都在之前的方案数上重复放上已放过的物品 相当于考虑顺序
   * j = 1 {1}
   * j = 2 {1, 1} 
   *       {2}
   * j = 3 {1, 1, 1} {2, 1} 
   *       {1, 2}
   * j = 4 {1, 1, 1, 1} {2, 1, 1} {1, 2, 1} 
   *       {1, 1, 2} {2, 2}
   * j = 5 {1, 1, 1, 1, 1} {2, 1, 1, 1} {1, 2, 1, 1} {1, 1, 2, 1} {2, 2, 1}
   *       {1, 1, 1, 2} {2, 1, 2} {1, 2, 2}
   *       {5}
   */
  for (let j = 0; j <= amount; j++) {
    for (let i = 0; i < coins.length; i++) {
      if (j - coins[i] >= 0) dp[j] += dp[j - coins[i]]
    }
    console.log(dp)
  }

  return dp[amount]
}


const amount = 5, coins = [1, 2, 5]
console.log(change(amount, coins))
console.log(changeV1(amount, coins))

// const amount1 = 100, coins1 = [99, 1]
// console.log(change(amount1, coins1))
// console.log(changeV1(amount1, coins1))

export {}
