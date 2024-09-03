const replaceNumber = (s: string): string => {
  const zeroCode = "0".charCodeAt(0)
  const nineCode = "9".charCodeAt(0)
  let count = 0

  for (const char of s) {
    const charCode = char.charCodeAt(0)
    if (charCode > zeroCode && charCode < nineCode) count++
  }

  const sArr = s.split("")
  sArr.length = s.length + count * 5
  let oldIndex = s.length - 1
  let newIndex = sArr.length - 1

  while (oldIndex >= 0) {
    const charCode = sArr[oldIndex].charCodeAt(0)
    if (charCode > zeroCode && charCode < nineCode) {
      sArr[newIndex--] = "r"
      sArr[newIndex--] = "e"
      sArr[newIndex--] = "b"
      sArr[newIndex--] = "m"
      sArr[newIndex--] = "u"
      sArr[newIndex--] = "n"
    } else {
      sArr[newIndex--] = sArr[oldIndex]
    }
    oldIndex--
  }

  return sArr.join("")
}

const str = "s5b5nice"
console.log(replaceNumber(str))
export {}