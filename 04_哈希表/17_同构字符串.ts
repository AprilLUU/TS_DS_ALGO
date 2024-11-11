function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  // 记录s -> t的映射
  const map = new Map<string, string>()
  // 记录已经映射过的字符
  const set = new Set<string>()
  for (let i = 0; i < s.length; i++) {
    const char = map.get(s[i])
    if (!char) {
      // 不同字符不能映射到同一字符 
      // 已经存在映射过的字符 不满足规则
      if (set.has(t[i])) return false
      map.set(s[i], t[i])
      set.add(t[i])
    } else {
      // 存在的映射不满足规则
      if (char !== t[i]) return false
    }
  }

  return true
}

const s = "paper"
const t = "title"
isIsomorphic(s, t)
