function repeatedSubstringPattern(s: string): boolean {
  function getNext(next: number[], s: string) {
    let j = 0
    next[0] = j

    for (let i = 1; i < s.length; i++) {
      while (j > 0 && s[i] !== s[j]) j = next[j - 1]
      if (s[i] === s[j]) j++
      next[i] = j
    }
  }

  const next: number[] = []
  getNext(next, s)
  // 当一个串由重复子串构成时，他的最大公共前后缀长度就是最后一个字符的前缀长度
  // eg: ab/abab 后缀 abab/ab 前缀 
  // 此时s.length - maxCommonLen就是重复的子串长度
  // 如果重复的子串长度能被s.length整除 说明该串由重复的子串构成 前提是最大公共前后缀长度存在
  const maxCommonLen = next[s.length - 1]
  if (maxCommonLen !== 0 && s.length % (s.length - maxCommonLen) === 0) return true
  return false
}

export {}
