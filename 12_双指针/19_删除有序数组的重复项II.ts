function removeDuplicates(nums: number[]): number {
  // 数组前两个位置（0， 1）肯定符合 因此从2开始检测
  // fastIndex：当前检查的元素
  // slowIndex：符合规则的子数组中最后一个元素
  // slowIndex: 符合规则的子数组中倒数第二个元素
  // slowIndex + 1：下一个插入位置
  let fastIndex = 2
  let slowIndex = 1

  while (fastIndex < nums.length) {
    const curr = nums[fastIndex]
    const prev = nums[slowIndex]
    const prev2 = nums[slowIndex - 1]
    // 两种情况可以插入
    // 1. curr !== prev curr第一次出现
    // 2. curr === prev && curr !== prev2 curr只出现一次
    if (curr !== prev || (curr === prev && curr !== prev2)) {
      nums[++slowIndex] = nums[fastIndex]
    }
    fastIndex++
  }

  return slowIndex + 1
}
