function findMaxForm(strs: string[], m: number, n: number): number {
  // 相当于一个二维背包 一个维度放指定容量的物品 满足两个维度的最大物品数
  const dp: number[][] = new Array(m + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(0))

  for (const str of strs) {
    // 此时物品有多少个0 多少个1
    let zeroNum = 0
    let oneNum = 0
    for (const char of str) {
      if (char === "0") zeroNum++
      else oneNum++
    }
    // 从后往前遍历 避免状态覆盖
    for (let i = m; i >= zeroNum; i--) {
      for (let j = n; j >= oneNum; j--) {
        // dp[i][j] 有两个来源
        // 放得下此时的物品 物品数为dp[i - zeroNum][j - oneNum] + 1
        // 放不下此时的物品 物品数为上一时刻的dp[i][j]
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)
      }
    }
  }

  return dp[m][n]
}

function findMaxFormV1(strs: string[], m: number, n: number): number {
  let dp: number[][][] = new Array(strs.length)
    .fill(0)
    .map(() => new Array(m + 1).fill(0))
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j <= m; j++) {
      dp[i][j] = new Array(n + 1).fill(0)
    }
  }

  // 初始化放第一个物品的状态
  let firstZeroNum = 0
  let firstOneNum = 0
  for (const char of strs[0]) {
    if (char === "0") firstZeroNum++
    else firstOneNum++
  }
  for (let i = firstZeroNum; i <= m; i++) {
    for (let j = firstOneNum; j <= n; j++) {
      dp[0][i][j] = 1
    }
  }

  for (let i = 1; i < strs.length; i++) {
    let zeroNum = 0
    let oneNum = 0
    for (const char of strs[i]) {
      if (char === "0") zeroNum++
      else oneNum++
    }

    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        if (j < zeroNum || k < oneNum) dp[i][j][k] = dp[i - 1][j][k]
        else dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - zeroNum][k- oneNum] + 1)
      }
    }
  }

  console.log(dp)

  return dp[strs.length - 1][m][n]
}

const strs = ["10", "0001", "111001", "1", "0"]
const m = 3
const n = 3
console.log(findMaxFormV1(strs, m, n))

// "10", zeroNum = 1, oneNum = 1
// i >= 1, j >= 1
// [[0, 0, 0, 0], [0, 1, 1, 1], [0, 1, 1, 1], [0, 1, 1, 1]]
// "0001", zeroNum = 3, oneNum = 1
// i >= 3, j >= 1
// [[0, 0, 0, 0], [0, 1, 1, 1], [0, 1, 1, 1], [0, 1, 1, 1]]
// "111001", zeroNum = 2, oneNum = 4
// i >= 2, j >= 4
// [[0, 0, 0, 0], [0, 1, 1, 1], [0, 1, 1, 1], [0, 1, 1, 1]]
// "1", zeroNum = 0, oneNum = 1
// i >= 0, j >= 1
// [[0, 1, 1, 1], [0, 1, 2, 2], [0, 1, 2, 2], [0, 1, 2, 2]]
// "0", zeroNum = 1, oneNum = 0
// i >= 1, j >= 0
// [[0, 1, 1, 1], [1, 2, 2, 2], [1, 2, 3, 3], [1, 2, 3, 3]]
