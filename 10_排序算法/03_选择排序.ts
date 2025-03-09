import { swap } from "./utils"
import { testSort, measureSort } from "hy-algokit"

const selectSort = <T = number>(arr: T[]): T[] => {
  if (arr.length === 0 || arr.length === 1) return arr

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }
    swap(arr, i, minIndex)
  }

  return arr
}

testSort(selectSort)
measureSort(selectSort)
