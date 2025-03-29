function firstMissingPositive(nums: number[]): number {
  // 使用哈希表存储，支持O(1)检索
  const set = new Set()
  nums.forEach((num) => set.add(num))

  // 对于一个长度为n的数组，缺失的第一个正数范围为[1, n + 1]
  const n = nums.length
  // 从1开始枚举到n，如果哈希表查找不到，就是确实的第一个正数
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) return i
  }

  // 1 ~ n都出现了，缺失的是n + 1
  return n + 1
}
