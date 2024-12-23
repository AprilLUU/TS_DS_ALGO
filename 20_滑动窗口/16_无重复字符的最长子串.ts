function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>()
  let left = 0
  let right = 0
  let res = 0

  // window [left, right)
  while (right < s.length) {
    if (set.has(s[right])) {
      while (set.has(s[right])) {
        set.delete(s[left])
        left++
      }
    } else {
      res = Math.max(res, right - left + 1)
    }
    set.add(s[right])
    right++
  }

  return res
}
