function findMaxConsecutiveOnes(nums: number[]): number {
  let left = 0
  let right = 0
  let res = 0

  while (right < nums.length) {
    if (nums[right] === 1) {
      right++
      res = Math.max(res, right - left)
    } else {
      right++
      left = right
    }
  }

  return res
}
