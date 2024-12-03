function increasingTriplet(nums: number[]): boolean {
  // 左边最小值
  const leftMin = new Array(nums.length).fill(0)
  leftMin[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i])
  }
  // 右边最大值
  const rightMax = new Array(nums.length).fill(0)
  rightMax[nums.length - 1] = nums[nums.length - 1]
  for (let i = nums.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], nums[i])
  }
  // leftMin[i] < nums[i] < rightMax[i] => 存在递增三元子序列
  for (let i = 1; i < nums.length - 1; i++) {
    if (leftMin[i] < nums[i] && nums[i] < rightMax[i]) {
      return true
    }
  }

  return false
}
