function moveZeroes(nums: number[]): void {
  let slowIndex = 0
  let fastIndex = 0

  while (fastIndex < nums.length) {
    if (nums[fastIndex] !== 0) {
      // if (fastIndex === slowIndex) {
      //   slowIndex++
      //   fastIndex++
      //   continue
      // }
      const temp = nums[slowIndex]
      nums[slowIndex++] = nums[fastIndex]
      nums[fastIndex] = temp
    }
    fastIndex++
  }
}
