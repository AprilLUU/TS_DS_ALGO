function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let index1 = 0
  let index2 = 0
  let index = 0
  let mergeArr: number[] = []

  let totalLen = nums1.length + nums2.length
  let target
  if (totalLen % 2 === 0) target = totalLen / 2 + 1
  else target = Math.ceil(totalLen / 2)
  let res = 0

  while (index1 < nums1.length || index2 < nums2.length) {
    if (index2 === nums2.length || nums1[index1] <= nums2[index2]) {
      mergeArr[index++] = nums1[index1++]
    } else {
      mergeArr[index++] = nums2[index2++]
    }

    if (index === target) {
      if (totalLen % 2 === 0) {
        res = (mergeArr[index - 1] + mergeArr[index - 2]) / 2
      } else {
        res = mergeArr[index - 1]
      }
      break
    }
  }

  return res
}

const nums1: number[] = [],
  nums2 = [1]
findMedianSortedArrays(nums1, nums2)
