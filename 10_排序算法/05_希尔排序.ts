import { testSort, measureSort } from "hy-algokit"

const shellSort = <T = number>(arr: T[]): T[] => {
  if (arr.length <= 1) return arr

  let d = Math.floor(arr.length / 2)
  
  while (d > 0) {
    // 处理每一个增量子表 跟插入排序一致
    for (let i = d; i < arr.length; i++) {

      if (arr[i] < arr[i - d]) {
        const temp = arr[i]
        let j = i - d
        while (j >= 0 && arr[j] > temp) {
          arr[j + d] = arr[j]
          j -= d
        }
        arr[j + d] = temp
      }

    }

    d = Math.floor(d / 2)

  }
  return arr
}

testSort(shellSort)
measureSort(shellSort)