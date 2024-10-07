function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict)

  const backtracking = (index: number) => {
    if (index === s.length) return true

    for (let i = index; i < s.length; i++) {
      const str = s.slice(index, i + 1)
      if (!wordSet.has(str)) continue
      if (backtracking(i + 1)) return true
    }

    return false
  }

  return backtracking(0)
}

const s = "applepenapple"
const wordDict = ["apple", "pen"]
console.log(wordBreak(s, wordDict))

export {}
