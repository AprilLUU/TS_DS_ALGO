function longestConsecutive(nums: number[]): number {
  const set = new Set<number>()
  nums.forEach((num) => set.add(num))

  let max = 0
  for (let i = 0; i < nums.length; i++) {
    // 前驱数存在 肯定不会以该数为开头
    if (set.has(nums[i] - 1)) continue
    let len = 1
    let next = 1
    // 累计序列长度
    while (set.has(nums[i] + next)) {
      len++
      next++
    }
    max = Math.max(max, len)
  }

  return max
}
