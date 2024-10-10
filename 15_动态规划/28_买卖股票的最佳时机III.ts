function maxProfit(prices: number[]): number {
  // 1: 第一次买入 2：第一次卖出
  // 3: 第二次买入 4：第二次卖出
  const dp: number[][] = new Array(prices.length)
    .fill(0)
    .map(() => new Array(5).fill(0))
  dp[0][1] = -prices[0]
  dp[0][3] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    // 第一次买入的状态来源 买之前的股票 或者买当天的股票
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
    // 第一次卖出的状态来源 之前第一次卖出的利润 或者在之前买入在当天卖出
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])
    // 第二次买入的状态来源 之前第二次买入的利润 或者在卖出第一次股票的利润下买当天的股票
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
    // 第二次卖出的状态来源 之前第二次卖出的利润 或者在之前买入第二次股票在当天卖出
    dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
  }
  // 利润最大值一定是第二次卖出的状态
  return dp[prices.length - 1][4]
}

export {}
