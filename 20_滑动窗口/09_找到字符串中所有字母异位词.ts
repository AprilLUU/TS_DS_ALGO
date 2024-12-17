function findAnagrams(s: string, p: string): number[] {
  const res: number[] = []
  if (s.length < p.length) return res

  const map = new Array(26).fill(0)
  const aCode = "a".charCodeAt(0)
  for (let i = 0; i < p.length; i++) {
    const index1 = p[i].charCodeAt(0) - aCode
    const index2 = s[i].charCodeAt(0) - aCode
    map[index1]--
    map[index2]++
  }

  let diff = 0 
  for (const count of map) {
    if (count !== 0) diff++
  }
  if (diff === 0) res.push(0)
  
  let left = 0
  let right = p.length - 1

  while (right < s.length - 1) {
    const index1 = s[left].charCodeAt(0) - aCode
    const index2 = s[right + 1].charCodeAt(0) - aCode
    if (index1 === index2) {
      left++
      right++
      if (diff === 0) res.push(left)
      continue
    }

    if (map[index1] === 0) diff++
    left++
    map[index1]--
    if (map[index1] === 0) diff--

    if (map[index2] === 0) diff++
    right++
    map[index2]++
    if (map[index2] === 0) diff--

    if (diff === 0) res.push(left)
  }

  return res
}
