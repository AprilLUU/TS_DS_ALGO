function maxProfit(nums: number[]): number {
  let res = 0

  for (let i = 1; i < nums.length; i++) {
    const profit = nums[i] - nums[i - 1]
    if (profit > 0) res += profit 
  }

  return res
}

export {}