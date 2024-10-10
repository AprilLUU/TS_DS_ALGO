function maxProfit(k: number, prices: number[]): number {
  const dp = new Array(prices.length)
    .fill(0)
    .map(() => new Array(2 * k + 1).fill(0))

  // 第一天无论第几次买入都是-prices[0]
  for (let i = 1; i < 2 * k; i += 2) {
    dp[0][i] = -prices[0]
  }

  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j < 2 * k; j += 2) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i])
      dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] + prices[i])
    }
  }

  return dp[prices.length - 1][2 * k]
}

export {}
