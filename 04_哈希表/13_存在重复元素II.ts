function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number[]>()

  for (let i = 0; i < nums.length; i++) {
    const index = map.get(nums[i])
    if (!index) {
      map.set(nums[i], [i])
    } else {
      for (let j = 0; j < index.length; j++) {
        if (Math.abs(index[j] - i) <= k) return true
      }
      index.push(i)
    }
  }

  return false
}

function containsNearbyDuplicateV2(nums: number[], k: number): boolean {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const index = map.get(nums[i])!
      if (Math.abs(index - i) <= k) return true
    }
    map.set(nums[i], i)
  }

  return false
}

const nums = [1, 2, 3, 1]
const k = 3
containsNearbyDuplicateV2(nums, k)