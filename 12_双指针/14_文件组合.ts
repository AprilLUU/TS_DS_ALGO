function fileCombination(target: number): number[][] {
  const res: number[][] = []
  let left = 1
  let right = 2

  while (left < right) {
    // 等差数列求和 S_n = n(a1 + an) / 2
    const sum = ((left + right) * (right - left + 1)) / 2
    if (sum === target) {
      const sequence: number[] = []
      for (let i = left; i <= right; i++) {
        sequence.push(i)
      }
      res.push(sequence)
      left++
    }
    if (sum < target) right++
    if (sum > target) left++
  }

  return res
}

export {}