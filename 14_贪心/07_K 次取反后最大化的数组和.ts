function largestSumAfterKNegations(nums: number[], k: number): number {
  // 按绝对值大小排序
  nums.sort((a, b) => Math.abs(b) - Math.abs(a))

  // 遍历 反转所有负数
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i]
      k--
    }
  }
  // 此时全为正序列
  // 若k > 0且为奇数，反转最小的正数，
  // 为偶数，不断反转最小的数即可，最后仍为正数
  if (k % 2 === 1) nums[nums.length - 1] *= -1

  let res = 0
  nums.forEach((num) => (res += num))

  return res
}

const nums = [-9, 1, 2]
console.log(largestSumAfterKNegations(nums, 4))

export {}
