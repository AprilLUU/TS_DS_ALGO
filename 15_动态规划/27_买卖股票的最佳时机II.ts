function maxProfitV1(prices: number[]): number {
  const dp: number[][] = new Array(prices.length)
    .fill(0)
    .map(() => new Array(2).fill(0))
  dp[0][0] = -prices[0]
  dp[0][1] = 0

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
  }

  return dp[prices.length - 1][1]
}

function maxProfitV2(prices: number[]): number {
  const dp: number[][] = [[-prices[0], 0], [0, 0]]

  for (let i = 1; i < prices.length; i++) {
    dp[i % 2][0] = Math.max(dp[(i - 1) % 2][0], dp[(i - 1) % 2][1] - prices[i])
    dp[i % 2][1] = Math.max(dp[(i - 1) % 2][1], dp[(i - 1) % 2][0] + prices[i])
  }

  return dp[(prices.length - 1) % 2][1]
}

/**
 * dp = [[-7, 0], [-1, 0], [-1, 4], [1, 4], [1, 7], [3, 7]]
 */
const prices = [7, 1, 5, 3, 6, 4]

export {}
