function strStr(haystack: string, needle: string): number {
  let i = 0, j = 0, k = 0

  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      i++
      j++
    } else {
      k++
      i = k
      j = 0
    }
  }

  if (j >= needle.length) return k

  return -1
}

const str1 = "abcdefg"
const str2 = "cde"
console.log(strStr(str1, str2))
export {}