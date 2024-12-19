function longestOnes(nums: number[], k: number): number {
  // left 窗口的起始索引
  let left = 0
  // right 下一个进入窗口的元素
  let right = 0
  let res = 0
  // 窗口内0的数量
  let zeroCount = 0

  while (right < nums.length) {
    // 加入的元素为1 窗口扩大 计算结果
    if (nums[right] === 1) {
      right++
      res = Math.max(res, right - left)
    }
    // 加入的元素为0
    if (nums[right] === 0) {
      zeroCount++
      // 窗口内0的数量小于k 即可以翻转为1
      // 窗口扩大 计算结果
      if (zeroCount <= k) {
        right++
        res = Math.max(res, right - left)
      } else {
        // 窗口内0的数量小于k 不断收缩窗口 直至满足条件
        // 由于right为新加入元素 可保证 left <= right 避免越界
        while (zeroCount > k) {
          if (nums[left] === 0) zeroCount--
          left++
        }
        right++
      }
    }
  }

  return res
}
