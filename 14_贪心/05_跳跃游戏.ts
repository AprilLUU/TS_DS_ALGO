function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true
  let cover = 0

  // i <= cover 确保在覆盖范围内移动
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, nums[i] + i)
    if (cover >= nums.length - 1) return true
  }

  return false
}
