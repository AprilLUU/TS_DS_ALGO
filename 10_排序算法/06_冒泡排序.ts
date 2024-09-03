import { testSort, measureSort } from "hy-algokit"
import { swap, isNeedSort } from "./utils"

const bubbleSort = <T = number>(arr: T[]): T[] => {
  if (!isNeedSort(arr)) return arr

  for (let i = 1; i < arr.length; i++) {

    let isSwap = false

    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        isSwap = true
      }
    }

    if (!isSwap) break
  }

  return arr
}

testSort(bubbleSort)
measureSort(bubbleSort)