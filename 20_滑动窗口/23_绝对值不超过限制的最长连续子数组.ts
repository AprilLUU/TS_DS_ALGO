function longestSubarrayV1(nums: number[], limit: number): number {
  let left = 0
  let right = 0
  // 维护窗口内的最大最小值
  let maxEl = nums[0]
  let minEl = nums[0]
  let res = 0

  while (right < nums.length) {
    let diff1 = Math.abs(nums[right] - maxEl)
    let diff2 = Math.abs(nums[right] - minEl)

    if (diff1 <= limit && diff2 <= limit) {
      maxEl = Math.max(maxEl, nums[right])
      minEl = Math.min(minEl, nums[right])
      right++
      res = Math.max(res, right - left)
    } else {
      while (diff1 > limit || diff2 > limit) {
        left++
        maxEl = nums[left]
        minEl = nums[left]
        // 性能
        for (let i = left; i <= right; i++) {
          maxEl = Math.max(maxEl, nums[i])
          minEl = Math.min(minEl, nums[i])
        }
        diff1 = Math.abs(nums[right] - maxEl)
        diff2 = Math.abs(nums[right] - minEl)
      }
      right++
    }
  }

  return res
}

function longestSubarrayV2(nums: number[], limit: number): number {
  let left = 0
  let right = 0
  // 窗口内单调递减队列
  let maxQueue: number[] = []
  // 窗口内单调递增队列
  let minQueue: number[] = []
  let res = 0

  while (right < nums.length) {
    // 维护单调递减
    // 加入元素大于队列尾部的元素 弹出
    while (nums[right] > maxQueue[maxQueue.length - 1]) {
      maxQueue.pop()
    }
    maxQueue.push(nums[right])
    // 维护单调递增
    // 加入元素小于队列尾部的元素 弹出
    while (nums[right] < minQueue[minQueue.length - 1]) {
      minQueue.pop()
    }
    minQueue.push(nums[right])

    let diff1 = Math.abs(nums[right] - maxQueue[0])
    let diff2 = Math.abs(nums[right] - minQueue[0])

    if (diff1 <= limit && diff2 <= limit) {
      right++
      res = Math.max(res, right - left)
    } else {
      while (diff1 > limit || diff2 > limit) {
        if (nums[left] === maxQueue[0]) maxQueue.shift()
        if (nums[left] === minQueue[0]) minQueue.shift()
        left++
        diff1 = Math.abs(nums[right] - maxQueue[0])
        diff2 = Math.abs(nums[right] - minQueue[0])
      }
      right++
    }
  }

  return res
}

// 另一种数据结构 使用平衡树来维护 有序平衡树 可以方便取得最大值和最小值
function longestSubarray(nums: number[], limit: number): number {
  let left = 0
  let right = 0
  // 窗口内单调递减队列
  let maxQueue: number[] = []
  // 窗口内单调递增队列
  let minQueue: number[] = []
  let res = 0

  while (right < nums.length) {
    // 维护单调递减
    // 加入元素大于队列尾部的元素 弹出
    while (right > 0 && nums[right] > maxQueue[maxQueue.length - 1]) {
      maxQueue.pop()
    }
    maxQueue.push(nums[right])
    // 维护单调递增
    // 加入元素小于队列尾部的元素 弹出
    while (right > 0 && nums[right] < minQueue[minQueue.length - 1]) {
      minQueue.pop()
    }
    minQueue.push(nums[right])

    // 计算窗口内最大值和最小值差 即为最大绝对值差
    let diff = maxQueue[0] - minQueue[0]

    // 小于等于限制 收集结果
    if (diff <= limit) {
      right++
      res = Math.max(res, right - left)
    } else {
      // 大于限制 收缩窗口
      while (diff > limit) {
        // 移除元素等于队头元素 出队
        if (nums[left] === maxQueue[0]) maxQueue.shift()
        if (nums[left] === minQueue[0]) minQueue.shift()
        left++
        // 重新计算最大绝对值差
        diff = maxQueue[0] - minQueue[0]
      }
      right++
    }

  }

  return res
}

const nums = [8, 2, 4, 7],
  limit = 4
longestSubarray(nums, limit)

export {}
