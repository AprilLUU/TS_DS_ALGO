/**
 * 算法思想：为找到下一个字典序较大的排列，需要找到左边的较小数和右边的较大数，让整个序列变化幅度最小
 */

function nextPermutation(nums: number[]): void {
  const swap = (i1: number, i2: number) => {
    const temp = nums[i1]
    nums[i1] = nums[i2]
    nums[i2] = temp
  }

  const reverse = (start: number, end: number) => {
    let i = start
    let j = end
    while (i < j) {
      swap(i, j)
      i++
      j--
    }
  }

  const n = nums.length
  let minIndex = n - 2
  let maxIndex = n - 1

  // 从后往前遍历 找到第一个升序对 即找到靠右的较小数
  // eg：123465 => 4
  while (minIndex >= 0) {
    if (nums[minIndex] < nums[minIndex + 1]) break
    minIndex--
  }

  if (minIndex < 0) {
    // 降序序列 已经为最大排列
    // 反转序列 得到升序序列 即为下一个排列
    reverse(0, n - 1)
  } else {
    // 之前寻找minIndex的过程中 可保证[minIndex + 1, n - 1]为降序序列
    // 从后往前遍历 找到第一个大于nums[minIndex]的数
    // 即找到[minIndex + 1, n - 1]中大于nums[minIndex]的最小数
    while (maxIndex > minIndex) {
      if (nums[maxIndex] > nums[minIndex]) break
      maxIndex--
    }
    // 交换 交换之后仍然可以保证[minIndex + 1, n - 1]为降序序列
    swap(maxIndex, minIndex)
    // 反转[minIndex + 1, n - 1]为升序序列 得到下一个排列
    reverse(minIndex + 1, n - 1)
  }
}

const nums = [1, 2, 3]
nextPermutation(nums)

export {}
