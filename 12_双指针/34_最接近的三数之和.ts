function threeSumClosest(nums: number[], target: number): number {
  // 排序
  nums.sort((a, b) => a - b)
  let min = Number.MAX_SAFE_INTEGER
  let res = 0

  // 以每个元素作为a来寻找解
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      // 计算差距 根据差距来更新
      const gap = Math.abs(sum - target)
      res = gap > min ? res : sum
      min = Math.min(min, gap)
      // 双指针收缩
      if (sum > target) right--
      else left++
    }
  }

  return res
}

const nums = [-1, 2, 1, -4]
const target = 1
// [-4, -1, 1, 2]
// (-4, -1, 2) sum = -3 gap = 4 
// (-4, 1, 2) sum = -1 gap = 2
// (-1, 1, 2) sum = 2 gap = 1