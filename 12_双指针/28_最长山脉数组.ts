function longestMountain(arr: number[]): number {
  let res = 0
  // left 山脉起点 right 山脉终点
  let left = 0

  // 保证left + 2不越界 山脉长度至少为3
  while (left + 2 < arr.length) {
    let right = left + 1

    if (arr[left] < arr[left + 1]) {
      // 找到山顶 此时right指针为山顶
      while (right + 1 < arr.length && arr[right] < arr[right + 1]) right++
      // 不满足形成山脉的规则
      // 1. right = n - 1 此时山顶位于数组尾部 无法形成山脉
      // 2. arr[right] === arr[right + 1] 无法形成山脉
      if (right < arr.length - 1 && arr[right] > arr[right + 1]) {
        while (right + 1 < arr.length && arr[right] > arr[right + 1]) right++
        res = Math.max(res, right - left + 1)
      } else {
        // 移动到下一个位置进行匹配
        right++
      }
    }
    // 移动到下一个位置进行匹配
    left = right
  }

  return res
}

export {}
