function addStrings(num1: string, num2: string): string {
  const len = Math.max(num1.length, num2.length)
  let res: string[] = new Array(len).fill("0")
  let i = num1.length - 1
  let j = num2.length - 1
  let index = i > j ? i : j
  let add = 0

  while (index >= 0) {
    const a = i >= 0 ? Number(num1[i]) : 0
    const b = j >= 0 ? Number(num2[j]) : 0
    const sum = a + b + add
    if (sum >= 10) add = 1
    else add = 0
    res[index] = String(sum % 10)
    i--
    j--
    index--
  }

  if (add === 1) res.unshift("1")

  return res.join("")
}
