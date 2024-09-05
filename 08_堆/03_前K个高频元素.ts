function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const frequency = map.get(nums[i])
    frequency ? map.set(nums[i], frequency + 1) : map.set(nums[i], 1)
  }

  return [...map]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => item[0])
}

const nums = [1, 1, 1, 2, 2, 3]
const k = 2
console.log(topKFrequent(nums, k))
