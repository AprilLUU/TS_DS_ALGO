// 归并
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const sortedArr: number[] = new Array(m + n).fill(0)
  let index = 0
  let index1 = 0
  let index2 = 0
  
  while (index1 < m && index2 < n) {
    if (nums1[index1] <= nums2[index2]) {
      sortedArr[index++] = nums1[index1++]
    } else {
      sortedArr[index++] = nums2[index2++]
    }
  }

  while (index1 < m) sortedArr[index++] = nums1[index1++]
  while (index2 < n) sortedArr[index++] = nums2[index2++]

  for (let i = 0; i < m + n; i++) {
    nums1[i] = sortedArr[i]
  }
}
// 逆向归并
function mergeV2(nums1: number[], m: number, nums2: number[], n: number): void {
  let index = m + n - 1
  let index1 = m - 1
  let index2 = n - 1
  
  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] > nums2[index2]) {
      nums1[index--] = nums1[index1--]
    } else {
      nums1[index--] = nums2[index2--]
    }
  }

  while (index2 >= 0) nums1[index--] = nums2[index2--]
}
// 合并后排序
function mergeV3(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = 0, j = m; i < n; i++, j++) {
    nums1[j] = nums2[i]
  }
  nums1.sort((a, b) => a - b)
}

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3
merge(nums1, m, nums2, n)