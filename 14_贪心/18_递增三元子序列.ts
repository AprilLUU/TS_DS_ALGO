function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) return false

  // 保证first < second
  let first = nums[0]
  let second = Number.MAX_SAFE_INTEGER

  // 贪心原则 尽可能使first和second尽可能小
  for (let i = 1; i < nums.length; i++) {
    // num >= second 存在(first, second, num)递增三元子序列
    if (nums[i] > second) return true
    // first < num <= second 更新second
    else if (nums[i] > first) second = nums[i]
    // num <= first 找到更小的数 更新first
    // 此时second位于first之前
    // 1. 若下一轮 num > second 在second之前仍存在小于second的数 找到递增三元子序列
    // 2. 否则下一轮更新second
    else first = nums[i]
  }

  return false
}

export {}
