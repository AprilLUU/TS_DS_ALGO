function uniquePaths(m: number, n: number): number {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}

function uniquePathsV1(m: number, n: number): number {
  const dp = new Array(n).fill(1)

  // 初始化为上一行的值 相当于加上了从上面下来的路径数 此时只需要加上左边过来的路径数即可
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      j
      dp[j] += dp[j - 1]
    }
  }

  return dp[n - 1]
}

function uniquePathsV2(m: number, n: number): number {
  // let numerator = 1
  // let denominator = 1

  // for (let x = n, y = 1; y < m; x++, y++) {
  //   numerator *= x
  //   denominator *= y
  // }

  // return Math.floor(numerator / denominator)

  let res = 1
  for (let x = n, y = 1; y < m; x++, y++) {
    res = Math.floor(res * x / y)
  }
  return res
}

uniquePaths(3, 7)
