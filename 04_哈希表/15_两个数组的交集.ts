function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set<number>()
  const resSet = new Set<number>()

  for (let i = 0; i < nums1.length; i++) {
    set.add(nums1[i])
  }

  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) resSet.add(nums2[i])
  }

  return Array.from(resSet)
}

function intersectionV2(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  console.log(nums1, nums2)

  let i = 0
  let j = 0
  const res: number[] = []

  while (i < nums1.length && j < nums2.length) {
    console.log(i, j)
    const num1 = nums1[i], num2 = nums2[j]
    if (num1 < num2) i++
    if (num1 > num2) j++
    if (num1 === num2) {
      const pre = res[res.length - 1]
      if (num1 !== pre) res.push(num1)
      i++
      j++
    }
  }

  return res
}

const nums1 = [1, 2, 2, 1], nums2 = [2, 2]
console.log(intersectionV2(nums1, nums2))

