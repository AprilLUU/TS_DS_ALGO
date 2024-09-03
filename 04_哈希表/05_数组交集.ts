function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set<number>()
  const res = new Set<number>()

  for (const num of nums1) {
    if (!set.has(num)) set.add(num)
  }

  for (const num of nums2) {
    if (set.has(num)) res.add(num)
  }

  return Array.from(res)
}

const nums1 = [1,2,2,1], nums2 = [2,2]
console.log(intersection(nums1, nums2))
const nums3 = [4,9,5], nums4 = [9,4,9,8,4]