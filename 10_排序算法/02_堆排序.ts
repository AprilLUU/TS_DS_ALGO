import { testSort, measureSort } from "hy-algokit"
import { swap } from "./utils"

const headSort = <T>(arr: T[]): T[] => {
  if (arr.length === 0 || arr.length === 1) return arr
  const start = Math.floor(arr.length / 2 - 1)
  // 原地建堆 O(nlogn) n/2 * logn
  for (let i = start; i >= 0; i--) {
    headAdjust<T>(arr, arr.length, i)
  }

  for (let i = arr.length - 1; i > 0; i--) {
    swap<T>(arr, 0, i)
    headAdjust<T>(arr, i, 0)
  }
  return arr
}

const headAdjust = <T>(arr: T[], size: number, start: number) => {
  let index = start
  while (index * 2 + 1 < size) {
    const leftChildIndex = index * 2 + 1
    const rightChildIndex = index * 2 + 2
    let maxChildIndex = leftChildIndex

    if (rightChildIndex < size && arr[leftChildIndex] < arr[rightChildIndex]) {
      maxChildIndex = rightChildIndex
    }
    if (arr[index] > arr[maxChildIndex]) break
    swap<T>(arr, index, maxChildIndex)
    index = maxChildIndex
  }
}

const arr = [114, 121, 156, 32, 198, 171, 127, 171, 91, 14]
console.log(headSort<number>(arr))
testSort(headSort<number>)
measureSort(headSort<number>)
