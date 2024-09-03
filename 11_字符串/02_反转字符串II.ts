function reverseStr(s: string, k: number): string {
  const sArr = s.split("")
  let left = 0
  let right = 0
  let count = Math.floor(s.length / (2 * k))

  function reverse(s: string[], left: number, right: number) {
    while (left < right) {
      const char = s[left]
      s[left++] = s[right]
      s[right--] = char
    }
  }

  for (let i = 0; i < s.length; i++) {
    if ((i + 1) % (2 * k) === 0) {
      left = i - (2 * k - 1)
      right = left + k - 1
      reverse(sArr, left, right)
      count--
      continue
    }

    if (count === 0) {
      const remainChar = s.length - i
      left = i
      if (remainChar < k) right = s.length - 1
      else right = left + k - 1
      reverse(sArr, left, right)
      break
    }
  }

  return sArr.join("")
}

function reverseStrV2(s: string, k: number): string {
  const sArr = s.split("")

  function reverse(s: string[], left: number, right: number) {
    while (left < right) {
      const char = s[left]
      s[left++] = s[right]
      s[right--] = char
    }
  }

  for (let i = 0; i < s.length; i += (2 * k)) {
    if (i + k < s.length) {
      reverse(sArr, i, i + k -1)
      continue
    }

    reverse(sArr, i, s.length - 1)
  }

  return sArr.join("")
}

const str = "abcedfg"
const k = 2
console.log(reverseStr(str, k))
export {}
