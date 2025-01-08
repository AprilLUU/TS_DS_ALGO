function findMaxConsecutiveOnes(nums: number[]): number {
  let sub = 0
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      sub = 0
    } else {
      sub++
      res = Math.max(res, sub)
    }
  }

  return res
}
