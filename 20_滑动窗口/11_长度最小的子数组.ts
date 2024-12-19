function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0
  let right = 0
  let sum = nums[right]
  let res = nums.length + 1

  while (right < nums.length) {
    // 窗口总和大于等于target 收集结果并不断收缩窗口
    while (sum >= target) {
      res = Math.min(res, right - left + 1)
      sum -= nums[left]
      left++
    }
    // 窗口总和小于target 扩张窗口 需要判断right是否越界
    right++
    if (right < nums.length) sum += nums[right]
  }

  return res === nums.length + 1 ? 0 : res
}

const target = 7,
  nums = [2, 3, 1, 2, 4, 3]
minSubArrayLen(target, nums)