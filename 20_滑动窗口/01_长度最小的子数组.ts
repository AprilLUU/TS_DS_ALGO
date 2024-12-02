/**
 * 每个元素在窗口内的操作只有进来一次，出去一次，时间复杂度为2n O(n)
 */

function minSubArrayLen(target: number, nums: number[]): number {
  let minLen = nums.length + 1

  // 窗口大小
  let subArrLen = 0
  // 子数组和
  let sum = 0
  // i -> 窗口起始索引
  let i = 0

  // j -> 窗口终止索引
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]

    // 窗口内元素和满足条件，不断收缩窗口，找到最小窗口长度
    while (sum >= target) {
      subArrLen = j - i + 1
      minLen = Math.min(minLen, subArrLen)
      sum -= nums[i]
      // 窗口向前移动
      i++
    }
  }

  return minLen > nums.length ? 0 : minLen
}

const testNums = [2, 3, 1, 2, 4, 3]
const target = 7

console.log(minSubArrayLen(target, testNums))

export {}
