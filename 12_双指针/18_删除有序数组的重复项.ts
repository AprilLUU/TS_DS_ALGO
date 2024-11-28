function removeDuplicates(nums: number[]): number {
  let slowIndex = 0
  let fastIndex = 1

  while (fastIndex < nums.length) {
    if (nums[fastIndex] !== nums[slowIndex]) {
      nums[++slowIndex] = nums[fastIndex]
    }
    fastIndex++
  }

  return slowIndex + 1
}
