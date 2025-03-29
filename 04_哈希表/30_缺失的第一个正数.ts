/**
 * 暴力的做法是从1开始枚举，判断是否在数组中 O(N^2)
 * 利用哈希表优化，空间换时间，时间O(N)，空间O(N)
 */
function firstMissingPositiveV1(nums: number[]): number {
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

// 要求空间为O(1)，只能考虑利用原数组
function firstMissingPositive(nums: number[]): number {
  const n = nums.length

  // 利用原数组打负号标记，需要把小于1的数处理为正数
  for (let i = 0; i < n; i++) {
    if (nums[i] < 1) {
      nums[i] = n + 1
    }
  }

  // 打标记，如果原数组出现了[1, n]范围内的数
  // 在n - 1的位置打上标记，添加负号
  for (let i = 0; i < n; i++) {
    // 由于nums[i]可能被打上标记，需要先转为正数
    const num = Math.abs(nums[i])
    if (num >= 1 && num <= n) {
      const index = nums[i] - 1
      // 如果已经打上标记，说明出现重复的数，不必重新打标记
      if (nums[index] > 0) {
        nums[index] = -nums[index] 
      }
    }
   }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1
    }
  }

  return n + 1
}
