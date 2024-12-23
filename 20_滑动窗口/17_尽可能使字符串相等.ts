function equalSubstring(s: string, t: string, maxCost: number): number {
  let left = 0
  let right = 0
  let cost = 0
  let res = 0
  
  while (right < s.length) {
    cost += Math.abs(s[right].charCodeAt(0) - t[right].charCodeAt(0))
    right++

    while (left < right && cost > maxCost) {
      cost -= Math.abs(s[left].charCodeAt(0) - t[left].charCodeAt(0))
      left++
    }

    res = Math.max(res, right - left)
  }

  return res
}
