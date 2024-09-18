function climbStairsV2(n: number): number {
  if (n <= 1) return n

  const dp: number[] = []
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }

  return dp[dp.length - 1]
}

function climbStairs(n: number): number {
  if (n <= 2) return n

  let pre = 1
  let curr = 2
  let res = 0

  for (let i = 3; i <= n; i++) {
    console.log(pre, curr)
    res = pre + curr
    pre = curr
    curr = res
  }

  return res
}

console.log(climbStairs(3))

export {}
