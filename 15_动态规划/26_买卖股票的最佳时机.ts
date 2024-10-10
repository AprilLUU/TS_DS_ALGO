function maxProfitV1(prices: number[]): number {
  let res = 0

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      res = Math.max(res, prices[j] - prices[i])
    }
  }

  return res
}

function maxProfitV2(prices: number[]): number {
  // dp[i][0]表示第i天持有股票的最大利润
  // dp[i][1]表示第i天不持有股票的最大利润
  const dp: number[][] = new Array(prices.length)
    .fill(0)
    .map(() => new Array(2).fill(0))
  dp[0][0] = -prices[0]
  dp[0][1] = 0

  for (let i = 1; i < prices.length; i++) {
    // 第i天持有股票的最大利润为 [0, i]之间哪一天买入股票取得最大利润
    // 第i天之前买入股票 和 第i天买入股票 两者的最大值
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
    // 第i天不持有股票的最大利润为 [0, i]之间哪一天卖出股票取得最大利润
    // 第i天之前卖出股票 和 第i天卖出股票 两者的最大值
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
  }

  return dp[prices.length - 1][1]
}

function maxProfitV3(prices: number[]): number {
  const dp: number[] = [-prices[0], 0]

  for (let i = 1; i < prices.length; i++) {
    // dp[1]需要依赖之前的dp[0]状态，因此需要先更新
    dp[1] = Math.max(dp[1], dp[0] + prices[i])
    dp[0] = Math.max(dp[0], -prices[i])
  }

  return dp[1]
}

/**
 * dp = [[-7, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
 * dp = [[-7, 0], [-1, 0], [-1, 4], [-1, 4], [-1, 5], [-1, 5]]
 */
// [-7, 0] [-1, 0] [-1, 4] [-1, 4] [-1, 5] [-1, 5]
const prices = [7, 1, 5, 3, 6, 4]

export {}
