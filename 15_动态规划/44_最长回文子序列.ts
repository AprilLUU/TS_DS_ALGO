function longestPalindromeSubseq(s: string): number {
  // dp[i][j] [i, j]范围内最长回文子序列的长度
  const dp: number[][] = new Array(s.length)
    .fill(0)
    .map(() => new Array(s.length).fill(0))

  // 只有一个字符时 最长回文子序列长度为1
  for (let i = 0; i < s.length; i++) dp[i][i] = 1

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      // 同时加入s[i]和s[j]满足回文
      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2
      // 不满足回文，分别考虑加入s[i]和s[j] 两者取最大值
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
    }
  }

  // 考虑整个范围内的为最大回文子序列长度
  return dp[0][s.length - 1]
}

const s = "cbbd"
// dp = [
//   [1, 1, 2, 2],
//   [0, 1, 2, 2],
//   [0, 0, 1, 1],
//   [0, 0, 0, 1]
// ]
