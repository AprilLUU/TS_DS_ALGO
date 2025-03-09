import { testSort, measureSort } from "hy-algokit"
import { isNeedSort, swap, randomIndex } from "./utils"

const quickSort = <T = number>(arr: T[]): T[] => {
  if (!isNeedSort(arr)) return arr

  const partition = (left: number, right: number) => {
    if (left >= right) return
    const index = randomIndex(left, right)
    const pivot = arr[index]
    // console.log(`index: ${index}, pivot: ${pivot}`)
    // 把基准元素移到最后
    swap(arr, index, right)
    let i = left
    // 跳过基准元素的扫描
    let j = right - 1

    // 找到位置的条件是i > j 此时 j + 1 = i i为插入位置
    // 相等时需要继续循环 因为此时i,j指向元素仍未扫描,还未找到基准元素的最终位置
    while (i <= j) {
      // 把小的元素移动到左子表
      while (arr[i] < pivot) i++
      // 把大的元素移动到右子表
      while (arr[j] > pivot) j--
      // i == j时可以不进行交换 但需要进行i++和j--的指针操作 否则会造成死循环
      // eg：当表中仅剩两个元素 1 1时 此时 i j均指向索引为0的位置 i == j 基准元素和i j指针指向元素相等
      // 不进行i++和j--的指针操作 i j指针永远不会移动 造成死循环
      if (i <= j) {
        swap(arr, i, j)
        i++
        j--
      }
    }

    swap(arr, i, right)
    partition(left, i - 1)
    partition(i + 1, right)
  }

  partition(0, arr.length - 1)
  return arr
}

// const arr = [1, 3, 2, 1, 1, 4, 2, 5, 2, 1]
// quickSort(arr)
testSort(quickSort)
measureSort(quickSort)
