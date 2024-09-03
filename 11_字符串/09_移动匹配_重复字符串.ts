function repeatedSubstringPattern(s: string): boolean {
  const t = (s + s).slice(1, s.length * 2 - 1)
  return t.includes(s)
}

repeatedSubstringPattern("aba")
