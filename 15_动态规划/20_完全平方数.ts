function numSquares(n: number): number {
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0

  for (let i = 1; i * i <= n; i++) {
    for (let j = i * i; j <= n; j++) {
      dp[j] = Math.min(dp[j - i * i] + 1, dp[j])
    }
  }

  return dp[n]
}

// n = 5
// dp = [0, max, max, max, max, max]
// dp = [0, 1, 2, 3, 4, 5]
// dp = [0, 1, 2, 3, 1, 2]
// dp[5] = 2
