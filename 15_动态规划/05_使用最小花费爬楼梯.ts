function minCostClimbingStairs(cost: number[]): number {
  // const n = cost.length
  // const dp: number[] = new Array(n + 1).fill(0)
  // dp[0] = cost[0]
  // dp[1] = cost[1]

  // for (let i = 2; i <= n; i++) {
  //   if (i === n) dp[i] = Math.min(dp[i - 2], dp[i - 1])
  //   else dp[i] = Math.min(dp[i - 2] + cost[i], dp[i - 1] + cost[i])
  // }

  // console.log(dp)

  // return dp[n]
  const n = cost.length
  // dp[i] 从第i层跳走需要花费的体力
  const dp: number[] = new Array(n).fill(0)
  dp[0] = cost[0]
  dp[1] = cost[1]

  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i]
  }

  return Math.min(dp[n - 2], dp[n - 1])
}

function minCostClimbingStairsV2(cost: number[]): number {
  const n = cost.length
  let pre = cost[0]
  let curr = cost[1]
  let res = 0

  for (let i = 2; i < n; i++) {
    res = Math.min(pre + cost[i], curr + cost[i])
    pre = curr
    curr = res
  }

  return Math.min(pre, curr)
}

const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
minCostClimbingStairsV2(cost)

export {}
