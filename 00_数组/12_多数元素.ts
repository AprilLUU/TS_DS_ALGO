/**
 * 算法思想：
 * 如果有超过一半的数，每次碰到这个数投一票，不是这个数减一票，最终得到的票仍大于0
 * 当票减为0时更改候选人
 * 遍历结束 最终即为候选人
 */

function majorityElement(nums: number[]): number {
  let candidate = nums[0]
  let count = 1

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) candidate = nums[i]
    if (nums[i] === candidate) count++
    else count--
  }

  return candidate
}

export {}
