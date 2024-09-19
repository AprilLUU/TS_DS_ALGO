function monotoneIncreasingDigitsV1(n: number): number {
  for (let i = n; i > 0; i--) {
    if (checkNum(i)) return i
  }

  function checkNum(num: number) {
    let pre = 10

    while (num > 0) {
      const currNum = num % 10
      if (pre >= currNum) pre = currNum
      else return false
      num = Math.floor(num / 10)
    }

    return true
  }

  return 0
}

function monotoneIncreasingDigits(n: number): number {
  const numStr: string[] = String(n).split("")
  let flag = numStr.length
  // 从后往前遍历 严格保证了后面的数字都是单调递增的
  for (let i = numStr.length - 1; i > 0; i--) {
    const curr = Number(numStr[i])
    const pre = Number(numStr[i - 1])
    if (curr < pre) {
      // 不满足单调递增 后面的所有位数都变成9
      // 记录需要变为9的索引
      flag = i
      numStr[i - 1] = String(pre - 1)
    }
  }

  for (let i = flag; i < numStr.length; i++) {
    numStr[i] = "9"
  }

  return Number(numStr.join(""))
}
