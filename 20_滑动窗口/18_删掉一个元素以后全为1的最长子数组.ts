function longestSubarray(nums: number[]): number {
  let left = 0
  let right = 0
  let res = 0
  let zeroCount = 0

  while (right < nums.length) {
    if (nums[right] === 1) {
      res = Math.max(res, right - left + 1 - zeroCount)
    } else {
      zeroCount++
      // 0的数量等于1 收集结果
      if (zeroCount === 1) res = Math.max(res, right - left + 1 - zeroCount)
      // 0的数量大于1 收缩窗口
      while (zeroCount > 1) {
        if (nums[left] === 0) zeroCount--
        left++
      }
    }
    right++
  }

  return res === nums.length ? res - 1 : res
}

const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1]
longestSubarray(nums)