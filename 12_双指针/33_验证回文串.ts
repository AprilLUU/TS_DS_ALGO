function isPalindrome(s: string): boolean {
  const regexp = /[a-zA-Z0-9]/
  let left = 0
  let right = s.length - 1

  while (left < right) {
    const l = s[left].toLowerCase()
    const r = s[right].toLowerCase()
    if (!regexp.test(l)) left++
    else if (!regexp.test(r)) right--
    else if (l !== r) return false
    else {
      left++
      right--
    }
  }

  return true
}
