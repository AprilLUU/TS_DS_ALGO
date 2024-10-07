function climbStairs(n: number, m: number): number {
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1

  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= m; i++) {
      if (j - i >= 0) dp[j] += dp[j - i]
    }
  }

  return dp[n]
}

export {}
