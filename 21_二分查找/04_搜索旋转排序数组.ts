function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid
    // 当左边只有一个元素时 未加相等判断可能导致越界丢失解
    // eg：nums = [3, 1] target = 1
    if (nums[0] <= nums[mid]) {
      // 左边有序且target位于左子表
      if (nums[0] <= target && target < nums[mid]) right = mid - 1
      else left = mid + 1
    } else {
      // 右边有序且target位于右子表
      if (nums[mid] < target && target <= nums[nums.length - 1]) left = mid + 1
      else right = mid - 1
    }
  }

  return -1
}
