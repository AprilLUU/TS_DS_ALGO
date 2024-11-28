function reverseVowels(s: string): string {
  const sArr = s.split("")
  let left = 0
  let right = sArr.length - 1
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])

  while (left < right) {
    if (set.has(sArr[left]) && set.has(sArr[right])) {
      const temp = sArr[left]
      sArr[left] = sArr[right]
      sArr[right] = temp
      left++
      right--
    }
    if (!set.has(sArr[left])) left++
    if (!set.has(sArr[right])) right--
  }

  return sArr.join("")
}
