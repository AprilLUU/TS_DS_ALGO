function singleNumber(nums: number[]): number {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const count = map.get(nums[i])
    if (!count) map.set(nums[i], 1)
    else map.set(nums[i], count + 1)
  }

  for (const [key, value] of map) {
    if (value === 1) return key
  }

  return -1
}
