function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  
  const robRange = (start: number, end: number): number => {
    if (start === end) return nums[start]
    let prev = nums[start]
    let curr = Math.max(nums[start], nums[start + 1])
    let next = 0

    for (let i = start + 2; i <= end; i++) {
      next = Math.max(curr, prev + nums[i])
      prev = curr
      curr = next
    }

    return curr
  }

  // 考虑偷首和偷尾的最大值
  return Math.max(robRange(0, nums.length - 2), robRange(1, nums.length - 1))
}

const nums1 = [2, 7, 9, 3, 1]
// dp = [2, 7, 11, 11]
// dp = [7, 9, 10, 10]

export {}