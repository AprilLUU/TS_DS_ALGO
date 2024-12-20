function maximumUniqueSubarray(nums: number[]): number {
  const set = new Set<number>()

  let left = 0
  let right = 0
  let sum = 0
  let res = 0

  for (let right = 0; right < nums.length; right++) {
    // 遇到重复元素，不断收缩窗口
    while (set.has(nums[right])) {
      set.delete(nums[left])
      sum -= nums[left]
      left++
    }
    // 加入当前元素
    set.add(nums[right])
    sum += nums[right]
    // 计算结果
    res = Math.max(res, sum)
  }

  // while (right < nums.length) {
  //   if (!set.has(nums[right])) {
  //     set.add(nums[right])
  //     sum += nums[right]
  //     res = Math.max(res, sum)
  //   } else {
  //     while (set.has(nums[right])) {
  //       set.delete(nums[left])
  //       sum -= nums[left]
  //       left++
  //     }
  //     set.add(nums[right])
  //     sum += nums[right]
  //   }
  //   right++
  // }

  return res
}
