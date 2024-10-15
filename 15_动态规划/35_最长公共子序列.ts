function longestCommonSubsequence(text1: string, text2: string): number {
  const dp: number[][] = new Array(text1.length + 1)
    .fill(0)
    .map(() => new Array(text2.length + 1).fill(0))

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  console.log(dp)

  return dp[text1.length][text2.length]
}

const text1 = "abc"
const text2 = "abc"
console.log(longestCommonSubsequence(text1, text2))
// dp = [
//   [0, 0, 0, 0],
//   [0, 1, 1, 1],
//   [0, 1, 2, 2],
//   [0, 1, 2, 3]
// ]
const text3 = "abcde"
const text4 = "ace"
// dp = [
//   [0, 0, 0, 0],
//   [0, 1, 1, 1],
//   [0, 1, 1, 1],
//   [0, 1, 2, 2],
//   [0, 1, 2, 2],
//   [0, 1, 2, 3]
// ]
