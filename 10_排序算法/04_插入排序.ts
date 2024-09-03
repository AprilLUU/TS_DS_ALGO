import { testSort, measureSort } from "hy-algokit"

const insertSort = <T = number>(arr: T[]): T[] => {
  if (arr.length === 0 || arr.length === 1) return arr
  for (let i = 1; i < arr.length; i++) {

    if (arr[i] < arr[i - 1]) {
      const temp = arr[i]
      let j = i - 1
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = temp
      // for (let j = i - 1; j >= -1; j--) {
      //   // 寻找插入位置 如果插入位置为第一个位置 则索引会出问题
      //   if (arr[j] <= temp || j < 0) {
      //     arr[j + 1] = temp
      //     break
      //   }
      //   arr[j + 1] = arr[j]
      // }
    }

  }
  return arr
}

testSort(insertSort<number>)
measureSort(insertSort<number>)