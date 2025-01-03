function findMin(nums: number[]): number {
  let left = 0
  let right = nums.length - 1
  let minEl = Number.MAX_SAFE_INTEGER

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    // 左边有序
    if (nums[0] <= nums[mid]) {
      // 取左边最小值
      minEl = Math.min(minEl, nums[0])
      // 到右边寻找
      left = mid + 1
    } else {
      // 右边有序 判断mid是否为右边最小值
      if (nums[mid - 1] > nums[mid]) {
        minEl = Math.min(minEl, nums[mid])
      }
      // 到左边寻找
      right = mid - 1
    }
  }

  return minEl
}

const nums = [3, 4, 5, 1, 2]
findMin(nums)
