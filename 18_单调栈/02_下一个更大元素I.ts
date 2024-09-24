function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const res = new Array(nums1.length).fill(-1)

  for (let i = 0; i < nums1.length; i++) {
    let j = nums2.findIndex((nums) => nums1[i] === nums)
    for (j = j + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        res[i] = nums2[j]
        break
      }
    }
  }

  return res
}

function nextGreaterElementV2(nums1: number[], nums2: number[]): number[] {
  const res = new Array(nums1.length).fill(-1)
  const map = new Map<number, number>()
  nums1.forEach((num, index) => map.set(num, index))

  const stack: number[] = []
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length) {
      const el = stack[stack.length - 1]
      if (el >= nums2[i]) break
      stack.pop()
      if (map.has(el)) res[map.get(el)!] = nums2[i]
      // 索引为0布尔值为false会更新出错 
      // const index = map.get(el)
      // if (index) res[index] = nums2[i]
    }
    stack.push(nums2[i])
  }

  return res
}

const nums1 = [4, 1, 2]
const nums2 = [1, 2, 3, 4]
console.log(nextGreaterElementV2(nums1, nums2))

const nums3 = [2, 4]
console.log(nextGreaterElementV2(nums3, nums2))
export {}

