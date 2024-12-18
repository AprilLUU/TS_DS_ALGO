function findLengthOfLCIS(nums: number[]): number {
  let left = 0
  let right = 0
  let res = 1

  while (right < nums.length - 1) {
    right++
    if (nums[right] > nums[right - 1]) {
      res = Math.max(res, right - left + 1)
    } else {
      left = right
    }
  }

  return res
}
