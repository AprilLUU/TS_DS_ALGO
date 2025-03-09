import { testSort, measureSort } from "hy-algokit"

export function binarySearch<T>(arr: T[], value: T): number {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === value) return mid
    if (arr[mid] > value) right = mid - 1
    if (arr[mid] < value) left = mid + 1
  }

  return -1
}

function binaryInsertSort(arr: number[]) {
  if (arr.length === 0 || arr.length === 1) return arr

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      const temp = arr[i]
      let left = 0
      let right = i - 1
      // 找到插入位置
      while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] > arr[i]) right = mid - 1
        if (arr[mid] <= arr[i]) left = mid + 1
      }
      // 移动元素
      for (let j = i - 1; j > right; j--) {
        arr[j + 1] = arr[j]
      }

      arr[right + 1] = temp
    }
  }

  return arr
}

testSort(binaryInsertSort)
measureSort(binaryInsertSort)
