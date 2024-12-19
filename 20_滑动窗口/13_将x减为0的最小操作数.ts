function minOperations(nums: number[], x: number): number {
  let totalSum = 0
  nums.forEach((num) => (totalSum += num))
  if (totalSum < x) return -1

  // left 为窗口的起始索引
  // right 为窗口的终止索引
  let left = 0
  let right = 0
  let windowSum = nums[0]
  let res = nums.length + 1

  // 加入最后一个元素之后 仍需要进入循环判断窗口总和是否满足
  // 判断right < nums.length 还是 right < nums.length - 1
  // 循环内有right++ windowSum += nums[right] 需要防止right越界
  // 若right === nums.length - 1时不需要进入循环内收集结果
  // 此时可以判断right < nums.length - 1防止越界
  // 若right === nums.length - 1时需要进入循环内收集结果
  // 此时需要在循环内判断right防止越界
  while (right < nums.length) {
    // 相等时 窗口内满足
    if (totalSum - windowSum === x) {
      // 计算结果
      const windowSize = right - left + 1
      res = Math.min(res, nums.length - windowSize)
      // 移动窗口
      windowSum -= nums[left]
      left++
      right++
      // 避免越界 right = nums.length
      if (right < nums.length) windowSum += nums[right]
    } else if (totalSum - windowSum > x) {
      // 窗口内值小于totalSum - x
      // 扩大窗口
      right++
      if (right < nums.length) windowSum += nums[right]
    } else {
      // 窗口内值大于totalSum - x
      // 不断收缩窗口
      // 最多 窗口内所有元素全部移除
      // 此时windowSum = 0 left = right + 1
      // 下一轮需要重新加入right的元素
      while (totalSum - windowSum < x) {
        windowSum -= nums[left]
        left++
      }
    }
  }

  // res没有更新 说明没有满足条件的窗口
  return res > nums.length ? -1 : res
}

const nums = [1, 1, 4],
  x = 3
minOperations(nums, x)
