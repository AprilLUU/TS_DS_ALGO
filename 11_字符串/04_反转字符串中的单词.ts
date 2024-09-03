function reverseWords(s: string): string {
  const sArr = s.split("")

  function removeExtraSpaces(sArr: string[]) {
    let slowIndex = 0
    let fastIndex = 0

    // 移除所有空格
    while (fastIndex < sArr.length) {
      if (sArr[fastIndex] !== " ") {
        // 在单词后面添加空格
        if (slowIndex !== 0) sArr[slowIndex++] = " "
        // 复制单词
        while (fastIndex < sArr.length && sArr[fastIndex] !== " ") {
          sArr[slowIndex++] = sArr[fastIndex++]
        }
      }
      fastIndex++
    }

    sArr.length = slowIndex
  }

  function reverse(sArr: string[], left: number, right: number) {
    while (left < right) {
      const char = sArr[left]
      sArr[left++] = sArr[right]
      sArr[right--] = char
    }
  }

  removeExtraSpaces(sArr)
  reverse(sArr, 0, sArr.length - 1)
  for (let i = 0; i < sArr.length; i++) {
    const left = i
    while (i < sArr.length && sArr[i] !== " ") i++
    reverse(sArr, left, i - 1)
  }
  
  return sArr.join("")
}

const str = "   the sky is  blue  "
console.log(reverseWords(str))
export {}
