function wiggleMaxLength(nums: number[]): number {
  if (nums.length <= 1) return nums.length
  // preDiff初始化为0 相当于在数组头部添加了一个与nums[0]相等的元素
  // 当数组仅有两个元素时也可以统一处理
  // eg: [2, 3] -> [2, 2, 3]
  let preDiff = 0
  let currDiff = 0
  // 默认存在一个摆动序列的元素(尾部)
  let res = 1

  for (let i = 0; i < nums.length - 1; i++) {
    currDiff = nums[i + 1] - nums[i]
    // 发生波动进行统计 同时更新
    if ((preDiff <= 0 && currDiff > 0) || (preDiff >= 0 && currDiff < 0)) {
      res++
      preDiff = currDiff
    }
  }

  return res
}

function wiggleMaxLengthV2(nums: number[]): number {
  if (nums.length <= 1) return nums.length
  let preDiff = nums[1] - nums[0]
  let currDiff = 0
  // 数组首部出现平坡时 此时统计会交由最后一个元素 故不考虑第一个元素
  // [3, 3, 3, 2, 5]
  let res = preDiff === 0 ? 1 : 2

  for (let i = 0; i < nums.length - 1; i++) {
    currDiff = nums[i + 1] - nums[i]
    // 发生波动进行更新统计
    // 统计只统计中间的波峰和波谷 最终序列长度需要加上首尾元素
    // 当出现平坡时只有平坡最后一个元素会被统计
    if ((preDiff <= 0 && currDiff > 0) || (preDiff >= 0 && currDiff < 0)) {
      res++
      preDiff = currDiff
    }
  }

  return res
}

console.log(wiggleMaxLengthV2([1, 2, 3]))

export {}