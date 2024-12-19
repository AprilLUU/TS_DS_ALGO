function maxTurbulenceSize(arr: number[]): number {
  let left = 0
  let right = 0
  let max = 1

  // 遍历到n - 1即可，第n个位置在n - 1时已考虑
  // 窗口到达n - 1位置时, 已经不能继续右移
  while (right < arr.length - 1) {
    // 窗口为1
    if (left === right) {
      // 相等 说明窗口不符合 左移
      if (arr[left] === arr[left + 1]) left++
      // 窗口右移
      right++
    } else {
      // 符合两个方向 窗口右移
      if (arr[right - 1] < arr[right] && arr[right] > arr[right + 1]) {
        right++
      } else if (arr[right - 1] > arr[right] && arr[right] < arr[right + 1]) {
        right++
      } else {
        // 不符合 窗口减少为1
        left = right
      }
    }
    max = Math.max(max, right - left + 1)
  }

  return max
}

export {}
