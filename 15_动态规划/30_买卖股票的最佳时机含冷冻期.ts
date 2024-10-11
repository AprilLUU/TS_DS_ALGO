function maxProfit(prices: number[]): number {
  /**
   * 0：持有股票
   * 不持有股票
   *  1：延续之前不持有股票的状态
   *  2：当天卖出股票
   * 3：冷冻期
   */
  const dp: number[][] = new Array(prices.length)
    .fill(0)
    .map(() => new Array(4).fill(0))
  dp[0][0] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    /**
     * 买入股票的状态来源
     * 1. 延续之前持有股票的状态
     * 2. 前一天是延续不持有股票的状态，当天才可以买入
     * 3. 前一天是冷冻期
     */
    dp[i][0] = Math.max(
      dp[i - 1][0],
      dp[i - 1][1] - prices[i],
      dp[i - 1][3] - prices[i]
    )
    /**
     * 延续之前卖出股票的状态来源
     * 1. 前一天是延续之前卖出股票的状态
     * 2. 前一天是冷冻期，股票已卖出
     */
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3])
    // 当天卖出，一定是前一天是持有股票的状态
    dp[i][2] = dp[i - 1][0] + prices[i]
    // 冷冻期，一定是在前一天卖出股票的状态
    dp[i][3] = dp[i - 1][2]
  }

  /**
   * 保持卖出股票的状态才可获得最大利润
   * 冷冻期也属于已经卖出股票的状态
   */
  return Math.max(
    dp[prices.length - 1][1],
    dp[prices.length - 1][2],
    dp[prices.length - 1][3]
  )
}

const prices = [1, 2, 3, 0, 2]
/**
 * dp = [
 *   [-1, 0, 0, 0],
 *   [-1, 0, 1, 0],
 *   [-1, 0, 2, 1],
 *   [1, 1, -1, 2],
 *   [1, 2, 3, -1]
 * ]
 */
export {}
