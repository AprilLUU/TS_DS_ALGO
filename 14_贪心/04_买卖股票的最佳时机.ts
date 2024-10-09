function maxProfit(prices: number[]): number {
  let res = 0
  let low = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < prices.length; i++) {
    // 区间左边取最小值
    low = Math.min(low, prices[i])
    // 区间右边取最大值
    res = Math.max(res, prices[i] - low)
  }

  return res
}

export {}