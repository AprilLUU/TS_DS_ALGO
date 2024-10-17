function minDistance(word1: string, word2: string): number {
  const dp: number[][] = new Array(word1.length + 1)
    .fill(0)
    .map(() => new Array(word2.length + 1).fill(0))

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  // 两个字符串各自减去最长公共子序列的长度 即为需要删除的步数
  return word1.length + word2.length - dp[word1.length][word2.length] * 2
}

function minDistanceV2(word1: string, word2: string): number {
  // dp[i][j] word1中以i - 1结尾的子串达到与word2中以j - 1结尾的子串所需要的最少删除次数
  const dp: number[][] = new Array(word1.length + 1)
    .fill(0)
    .map(() => new Array(word2.length + 1).fill(0))

  // 一个串为空串 达到相同的最少删除次数为另一个串的长度
  for (let i = 0; i <= word1.length; i++) dp[i][0] = i
  for (let i = 0; i <= word2.length; i++) dp[0][i] = i

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 相等时，需要删除的最少次数为加入word1[i - 1]和word2[i - 2]之前的次数
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        // 不相等时
        // 1. 删除word1[i - 1], 最少次数为dp[i - 1][j] + 1
        // 2. 删除word2[j - 1], 最少次数为dp[i][j - 1] + 1
        // 3. 删除word1[i - 1]和word2[j - 1], 最少次数为dp[i - 1][j - 1] + 2 === dp[i -1][j] + 1 === dp[i][j - 1] + 1
        // dp[i][j] = Math.min(dp[i - 1][j - 1] + 2, dp[i - 1][j] + 1, dp[i][j - 1] + 1)
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1)
      }
    }
  }

  return dp[word1.length][word2.length]
}

const word1 = "sea"
const word2 = "eat"
const dp = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 1, 2, 3],
  [3, 2, 1, 2]
]

export {}
