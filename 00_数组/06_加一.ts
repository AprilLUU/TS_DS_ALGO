function plusOne(digits: number[]): number[] {
  let addNum = 1

  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += addNum
    if (digits[i] >= 10) {
      digits[i] %= 10
      addNum = 1
    } else {
      addNum = 0
    }
  }

  if (addNum === 1) digits.unshift(addNum)

  return digits
}
