function reverseString(s: string[]): void {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    const char = s[left]
    s[left++] = s[right]
    s[right--] = char
  }
}
