function numDistinct(s: string, t: string): number {
  // dp[i][j] s中以i - 1结尾的子串可以出现t中以j - 1结尾的子串的最大个数
  const dp: number[][] = new Array(s.length + 1)
    .fill(0)
    .map(() => new Array(t.length + 1).fill(0))

  // dp[i][0] 当t为空串时s中以i - 1为结尾的子串可以出现空串的个数为1
  for (let i = 0; i < s.length; i++) dp[i][0] = 1

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        // s[i - 1] === t[j - 1]
        // 此时用s[i - 1]来匹配t[j - 1] 最大个数为dp[i - 1][j - 1]
        // 即都删除匹配的字符
        // 不用s[i - 1]来匹配t[j - 1] 最大个数为dp[i - 1][j]
        // 即删除s[i - 1], 考虑s[0]~s[i - 2]中能匹配上t[j - 1]的最大个数
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
      } else {
        // s[i - 1] ！== t[j - 1]
        // 只能删除s[i - 1], 考虑s[0]~s[i - 2]中能匹配上t[j - 1]的最大个数，即dp[i - 1][j]
        dp[i][j] = dp[i - 1][j]
      }
    }
  }

  return dp[s.length][t.length]
}

const s = "baegg"
const t = "bag"
const dp = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 1, 0],
  [1, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 2]
]
