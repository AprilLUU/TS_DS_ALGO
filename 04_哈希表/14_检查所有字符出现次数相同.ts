function areOccurrencesEqual(s: string): boolean {
  const map = new Map<string, number>()
  for (const char of s) {
    const count = map.get(char)
    if (!count) map.set(char, 1)
    else map.set(char, count + 1)
  }

  const target = map.get(s[0])
  for (const [key, value] of map) {
    if (value !== target) return false
  }

  return true
}
