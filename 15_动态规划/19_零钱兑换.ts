function coinChange(coins: number[], amount: number): number {
  // dp[j] 容量为j的背包装的最少物品数
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  // 这样初始化在边界情况会出问题
  // for (let i = coins[0] - 1; i > 0; i--) dp[i] = -1
  console.log(dp)

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      // 背包容量为j - coins[i]时可以装满
      if (dp[j - coins[i]] !== Number.MAX_SAFE_INTEGER) {
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
      }
    }
    console.log(dp)
  }

  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount]
}

/**
 * dp = [0, Max, Max, Max, Max, Max]
 * dp = [0, 1, 2, 3, 4, 5]
 * dp = [0, 1, 1, 2, 2, 3]
 * dp = [0, 1, 1, 2, 2, 1]
 */
const coins = [1, 2, 5],
  amount = 5
coinChange(coins, amount)

/**
 * dp = [0, -1, Max, Max]
 * dp = [0, -1, 1, 0]
 */
const coins1 = [2],
  amount1 = 3
coinChange(coins1, amount1)

/**
 * dp = [0]
 */
const coins2 = [1],
  amount2 = 0
coinChange(coins2, amount2)

/**
 *
 */
const coins3 = [2147483647],
  amount3 = 2
coinChange(coins3, amount3)
