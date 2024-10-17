function minDistance(word1: string, word2: string): number {
  // dp[i][j] word1中以i - 1结尾的子串和word2中以j - 1结尾的子串相同的最小编辑距离
  const dp: number[][] = new Array(word1.length + 1)
    .fill(0)
    .map(() => new Array(word2.length + 1).fill(0))

  // 一个串为空串 编辑成另一个串 相当于添加n个字符 也相当于另一个串删除n个字符
  // 一个串添加等价于另一个串删除
  for (let i = 0; i <= word1.length; i++) dp[i][0] = i
  for (let i = 0; i <= word2.length; i++) dp[0][i] = i

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 相等时，最小编辑距离为加入word1[i - 1]和word2[i - 2]之前的次数
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        // 不相等时
        // 1. 删除word1[i - 1], 最少次数为dp[i - 1][j] + 1
        // 2. 删除word2[j - 1], 等价于word1添加一个元素， 最少次数为dp[i][j - 1] + 1
        // eg: "a" "ad" -> "ad" "a" "a" "ad" -> "a" "a" 操作次数相同
        // 3. 替换word1[i - 1]为word2[j - 1], 最少次数为dp[i - 1][j - 1] + 1
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
      }
    }
  }

  return dp[word1.length][word2.length]
}

const word1 = "horse"
const word2 = "ros"
const dp = [
  [0, 1, 2, 3],
  [1, 1, 2, 3],
  [2, 2, 1, 2],
  [3, 2, 2, 2],
  [4, 3, 3, 2],
  [5, 4, 4, 3]
]

export {}
