function reverse(sArr: string[], left: number, right: number) {
  while (left < right) {
    const char = sArr[left]
    sArr[left++] = sArr[right]
    sArr[right--] = char
  }
}

export default reverse