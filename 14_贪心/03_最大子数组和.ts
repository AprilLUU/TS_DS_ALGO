function maxSubArray(nums: number[]): number {
  let max = Number.MIN_SAFE_INTEGER
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    max = Math.max(sum, max)
    sum = sum < 0 ? 0 : sum
  }

  return max
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))

export {}
