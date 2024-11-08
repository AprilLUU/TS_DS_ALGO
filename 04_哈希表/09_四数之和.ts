function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const map = new Map<number, number>()
  let res = 0

  for (const num1 of nums1) {
    for (const num2 of nums2) {
      const sum = num1 + num2
      const count = map.get(sum)
      map.set(sum, count ? count + 1 : 1)
    }
  }

  for (const num3 of nums3) {
    for (const num4 of nums4) {
      const target = 0 - (num3 + num4)
      const count = map.get(target)
      if (count) res += count
    }
  }

  return res
}

const A = [1, 2], B = [-2, -1], C = [-1, 2], D = [0, 2]
console.log(fourSumCount(A, B, C, D))

export {}