function numSubarrayBoundedMax(
  nums: number[],
  left: number,
  right: number
): number {
  let last1 = -1
  let last2 = -1
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    // 考虑nums[i]是否合法 合法即可以作为左端点
    // 即考虑nums[i]本身作为子数组
    if (left <= nums[i] && nums[i] <= right) last1 = i
    if (nums[i] > right) {
      last1 = -1
      last2 = i
    }
    // 当last2为-1时说明i左边全部满足左端点 此时加上考虑其自身作为左端点 刚好加上1
    // 以nums[i]为右端点 有last1 - last2个合法的左端点
    // (last2, last1] ~ i之间肯定包含合法元素 nums[last1]
    if (last1 !== -1) res += last1 - last2
  }

  return res
}

const nums = [2, 1, 4, 3],
  left = 2,
  right = 3
numSubarrayBoundedMax(nums, left, right)