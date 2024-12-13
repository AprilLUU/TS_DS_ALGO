function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number
): number {
  // 窗口大小为minutes
  let left = 0
  let right = left + minutes - 1
  // 窗口内总人数
  let total = 0
  // 窗口内满意的人数
  let sum = 0
  for (let i = left; i < left + minutes; i++) {
    total += customers[i]
    if (grumpy[i] === 0) sum += customers[i]
  }

  // 窗口内不生气满意的人数
  let max = total - sum
  // 窗口开始索引
  let index = left
  while (right < customers.length) {
    // 移动窗口
    total -= customers[left]
    if (grumpy[left] === 0) sum -= customers[left]
    left++
    right++
    total += customers[right]
    if (grumpy[right] === 0) sum += customers[right]
    // 更新最大值
    if (total - sum > max) {
      max = total - sum
      index = left
    }
  }

  let res = 0
  for (let i = 0; i < customers.length; i++) {
    // 窗口内不生气 人数直接累加
    if (i >= index && i < index + minutes) {
      res += customers[i]
    } else {
      if (grumpy[i] === 0) res += customers[i]
    }
  }

  return res
}
