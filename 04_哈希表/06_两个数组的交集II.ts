function intersect(nums1: number[], nums2: number[]): number[] {
  const map1 = new Map<number, number>()
  const map2 = new Map<number, number>()
  const res: number[] = []

  nums1.forEach((num) => {
    const count = map1.get(num)
    if (count) map1.set(num, count + 1)
    else map1.set(num, 1)
  })
  nums2.forEach((num) => {
    const count = map2.get(num)
    if (count) map2.set(num, count + 1)
    else map2.set(num, 1)
  })

  for (const [num, num1Count] of map1) {
    if (map2.has(num)) {
      const num2Count = map2.get(num)!
      const count = Math.min(num1Count, num2Count)
      for (let i = 0; i < count; i++) res.push(num)
    }
  }

  return res
}

function intersectV2(nums1: number[], nums2: number[]): number[] {
  if (nums1.length > nums2.length) return intersectV2(nums2, nums1)

  const map = new Map<number, number>()
  const res: number[] = []

  nums1.forEach((num) => {
    const count = map.get(num)
    if (count) map.set(num, count + 1)
    else map.set(num, 1)
  })

  nums2.forEach((num) => {
    const count = map.get(num)
    if (count) {
      map.set(num, count - 1)
      res.push(num)
    }
  })

  return res
}

function intersectV3(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  const res: number[] = []
  let index1 = 0
  let index2 = 0

  while (index1 < nums1.length && index2 < nums2.length) {
    const num1 = nums1[index1]
    const num2 = nums2[index2]
    if (num1 > num2) index2++
    if (num1 < num2) index1++
    if (num1 === num2) {
      let num = num1
      let count1 = 0
      while (num === num1) {
        index1++
        count1++
        num = nums1[index1]
      }

      num = num2
      let count2 = 0
      while (num === num2) {
        index2++
        count2++
        num = nums2[index2]
      }

      const count = Math.min(count1, count2)
      for (let i = 0; i < count; i++) res.push(num1)
    }
  }

  return res
}

function intersectV4(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  const res: number[] = []
  let index1 = 0
  let index2 = 0

  while (index1 < nums1.length && index2 < nums2.length) {
    const num1 = nums1[index1]
    const num2 = nums2[index2]
    if (num1 > num2) index2++
    if (num1 < num2) index1++
    if (num1 === num2) {
      res.push(num1)
      index1++
      index2++
    }
  }

  return res
}