function isAnagram(s: string, t: string): boolean{
  const map = new Map<string, number>()

  for (let i = 0; i < s.length; i++) {
    const count = map.get(s[i])
    map.set(s[i], count ? count + 1: 1)
    // if (map.has(s[i])) {
    //   const count = map.get(s[i])!
    //   map.set(s[i], count + 1)
    // } else {
    //   map.set(s[i], 1)
    // }
  }

  for (let i = 0; i < t.length; i++) {
    const count = map.get(t[i])
    if (!count) return false
    map.set(t[i], count - 1)
    // if (map.has(t[i])) {
    //   const count = map.get(t[i])!
    //   map.set(t[i], count - 1)
    // } else {
    //   return false
    // }
  }

  for (const [key, value] of map) {
    if (value !== 0) return false
  }

  return true
}

const str1 = "rat"
const str2 = "car"
isAnagram(str1, str2)
