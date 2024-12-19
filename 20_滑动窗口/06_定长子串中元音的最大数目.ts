function maxVowels(s: string, k: number): number {
  const set = new Set(["a", "e", "i", "o", "u"])

  let left = 0
  let right = left + k - 1
  let count = 0
  for (let i = left; i <= right; i++) {
    if (set.has(s[i])) count++
  }

  let res = count
  while (right < s.length - 1) {
    if (set.has(s[left++])) count--
    if (set.has(s[++right])) count++
    res = Math.max(res, count)
  }

  return res
}
