import reverse from "./reverse"

function rightRotate(s: string, n: number): string {
  const sArr = s.split("")
  reverse(sArr, 0, s.length - 1)
  reverse(sArr, 0, n - 1)
  reverse(sArr, n, s.length - 1)
  return sArr.join("")
}

const str = "abcdefg"
const n = 2
console.log(rightRotate(str, n))