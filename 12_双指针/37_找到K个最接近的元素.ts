function findClosestElements(arr: number[], k: number, x: number): number[] {
  const binarySearch = (arr: number[], target: number): number => {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (arr[mid] > target) right = mid - 1
      if (arr[mid] < target) left = mid + 1
      if (arr[mid] === target) return mid
    }

    return left < 0 ? right : left
  }

  const res: number[] = []
  // 二分查找找到最接近x的位置
  let index = binarySearch(arr, x)
  // 从该位置左右扩展
  let left = index - 1
  let right = index
  while (k-- > 0) {
    // 越界 直接取未越界的元素
    if (left < 0) right++
    else if (right > arr.length - 1) left--
    // 未越界 计算两数差 取最小
    else {
      const leftGap = Math.abs(arr[left] - x)
      const rightGap = Math.abs(arr[right] - x)
      // 相等时取左 左边为较小数
      if (leftGap <= rightGap) left--
      if (leftGap > rightGap) right++
    }
  }
  // [left + 1, right - 1]为结果范围
  for (let i = left + 1; i < right; i++) {
    res.push(arr[i])
  }

  return res
}
