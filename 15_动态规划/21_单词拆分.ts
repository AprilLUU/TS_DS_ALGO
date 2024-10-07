function wordBreak(s: string, wordDict: string[]): boolean {
  // dp[i]为s中长度为i的字符串能否由单词表中的单词构成
  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true

  // 先遍历背包再遍历物品 考虑每个物品放的顺序
  for (let j = 1; j <= s.length; j++) {
    for (let i = 0; i < wordDict.length; i++) {
      const wordLen = wordDict[i].length
      if (j - wordLen >= 0) {
        const str = s.slice(j - wordLen, j)
        console.log(str)
        // 能放得下这个单词
        if (str === wordDict[i]) {
          // dp[j]为true说明可由之前的单词构成 此时dp[j]仍为true
          // 否则 取决于放下这个单词之后前面的字符串 能否由单词表中的单词构成
          // 若 dp[j - wordLen]为true 说明前面的字符串能由单词表中的单词构成 
          // 此时可以构成 否则不能
          dp[j] = dp[j] ? dp[j] : dp[j - wordLen]
        }
      }
   }
   console.log(j)
   console.log(dp)
   console.log("---------------")
  }


  return dp[s.length]
}

const s = "applepenapple"
const wordDict = ["apple", "pen"]
wordBreak(s, wordDict)
// [t, f, f, f, f, t, f, f, t, f, f, f, f, f, t]

export {}