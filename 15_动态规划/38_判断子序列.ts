function isSubsequence(s: string, t: string): boolean {
  const dp: number[][] = new Array(s.length + 1)
    .fill(0)
    .map(() => new Array(t.length + 1).fill(0))

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }

  return dp[s.length][t.length] === s.length
}

function isSubsequenceV1(s: string, t: string): boolean {
  let i = 0
  let j = 0

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++
    j++
  }

  return i === s.length
}


