function repeatedSubstringPattern(s: string): boolean {
  const n = s.length

  // i为子串的长度
  for (let i = 1; i * 2 <= n; i++) {
    if (n % i === 0) {
      let match = true

      for (let j = i; j < n; j++) {
        if (s[j] !== s[j - i]) {
          match = false
          break
        }
      }
      
      if (match) return true
    }
  }

  return false
}
