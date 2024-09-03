function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Array(26).fill(0)
  const aCode = "a".charCodeAt(0)

  if (ransomNote.length > magazine.length) return false

  for (let i = 0; i < ransomNote.length; i++) {
    const index = ransomNote.charCodeAt(i) - aCode
    map[index]++
  }

  for (let i = 0; i < magazine.length; i++) {
    const index = magazine.charCodeAt(i) - aCode
    map[index]--
  }

  for (const count of map) {
    if (count > 0) return false
  }

  return true
}
