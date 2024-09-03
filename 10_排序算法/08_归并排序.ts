import { testSort, measureSort } from "hy-algokit"
import { isNeedSort } from "./utils"


const mergeSort = <T = number>(arr: T[]): T[] => {
  if (!isNeedSort(arr)) return arr

  // 先分解
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  // 分解左子表
  const divideLeftArr = mergeSort(leftArr)
  // 分解右子表
  const divideRightArr = mergeSort(rightArr)
  // 合并左右子表
  merge<T>(divideLeftArr, divideRightArr)
  // 返回合并之后的有序表
  return arr
}

const merge = <T>(leftArr: T[], rightArr: T[]) => {
    const newArr: T[] = []
    let i = 0, j = 0

    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] <= rightArr[j]) {
        newArr.push(leftArr[i])
        i++
      } else {
        newArr.push(rightArr[j])
        j++
      }
    }

    while (i < leftArr.length) {
      newArr.push(leftArr[i])
      i++
    }

    while (j < rightArr.length) {
      newArr.push(rightArr[j])
      j++
    }

    return newArr
}

testSort(mergeSort)
measureSort(mergeSort)