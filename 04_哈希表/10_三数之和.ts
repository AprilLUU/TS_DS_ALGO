function threeSum(nums: number[]): number[][] {
  const res: number[][] = []
  // 排序
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    // a = nums[i]
    // 由于已经排好序，当a > 0时，从i + 1开始找b，c不可能找到满足的三元组
    if (nums[i] > 0) break
    // 对a去重
    // 找b，c均从i + 1开始找，当nums[i] === nums[i - 1]相等时，所有满足的三元组均已找到
    // 已经排好序，只需判断nums[i]与nums[i - 1]是否相等即可
    // i - 1已经寻找过解，i + 1未寻找过解，判断i 与 i + 1是否相等可能跳过解
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      // 三数之和过大 收缩righ
      if (sum > 0) right--
      // 三数之和过小 扩大left
      if (sum < 0) left++
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])
        // 对b去重
        while (left < right && nums[left + 1] === nums[left]) left++
        // 对c去重
        while (left < right && nums[right - 1] === nums[right]) right--
        // 收缩双指针
        left++
        right--
      }
    }
  }

  return res
}
