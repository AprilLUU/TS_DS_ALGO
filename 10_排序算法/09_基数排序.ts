import ArrayQueue from "../02_队列/01_队列定义"
import { isNeedSort } from "./utils"
import { testSort, measureSort } from "hy-algokit"

const radixSort = (arr: number[]): number[] => {
  if (!isNeedSort(arr)) return arr
  // O(r) r个队列
  const zeroQueue = new ArrayQueue<string>()
  const oneQueue = new ArrayQueue<string>()
  const twoQueue = new ArrayQueue<string>()
  const threeQueue = new ArrayQueue<string>()
  const fourQueue = new ArrayQueue<string>()
  const fiveQueue = new ArrayQueue<string>()
  const sixQueue = new ArrayQueue<string>()
  const sevenQueue = new ArrayQueue<string>()
  const eightQueue = new ArrayQueue<string>()
  const nineQueue = new ArrayQueue<string>()

  const max = maxLength(arr as number[])
  let newArr = T2otherT(arr as number[], "string") as string[]
  for (let i = 1; i <= max; i++) {

    // 分配到队列中 O(d(n + r)) d为位数 r为进制数
    for (let j = 0; j < newArr.length; j++) {
      switch (newArr[j][max - i]) {
        case "0":
          zeroQueue.enqueue(newArr[j] as string)
          break
        case "1":
          oneQueue.enqueue(newArr[j] as string)
          break
        case "2":
          twoQueue.enqueue(newArr[j] as string)
          break
        case "3":
          threeQueue.enqueue(newArr[j] as string)
          break
        case "4":
          fourQueue.enqueue(newArr[j] as string)
          break
        case "5":
          fiveQueue.enqueue(newArr[j] as string)
          break
        case "6":
          sixQueue.enqueue(newArr[j] as string)
          break
        case "7":
          sevenQueue.enqueue(newArr[j] as string)
          break
        case "8":
          eightQueue.enqueue(newArr[j] as string)
          break
        case "9":
          nineQueue.enqueue(newArr[j] as string)
          break
      }
    }

    newArr = []

    // 从队列中收集元素
    //#region 
    while (!zeroQueue.isEmpty()) {
      newArr.push(zeroQueue.dequeue()!)
    }
    while (!oneQueue.isEmpty()) {
      newArr.push(oneQueue.dequeue()!)
    }
    while (!twoQueue.isEmpty()) {
      newArr.push(twoQueue.dequeue()!)
    }
    while (!threeQueue.isEmpty()) {
      newArr.push(threeQueue.dequeue()!)
    }
    while (!fourQueue.isEmpty()) {
      newArr.push(fourQueue.dequeue()!)
    }
    while (!fiveQueue.isEmpty()) {
      newArr.push(fiveQueue.dequeue()!)
    }
    while (!sixQueue.isEmpty()) {
      newArr.push(sixQueue.dequeue()!)
    }
    while (!sevenQueue.isEmpty()) {
      newArr.push(sevenQueue.dequeue()!)
    }
    while (!eightQueue.isEmpty()) {
      newArr.push(eightQueue.dequeue()!)
    }
    while (!nineQueue.isEmpty()) {
      newArr.push(nineQueue.dequeue()!)
    }
    //#endregion
  }

  return T2otherT(newArr, "number") as number[]
}

function maxLength(arr: number[]) {
  return String(Math.max(...arr)).length
}

function T2otherT(arr: number[] | string[], target: string) {
  let max = 0
  const newArr: number[] | string[] = []
  if (target === "string") {
    max = maxLength(arr as number[])
  }

  for (let i = 0; i < arr.length; i++) {
    if (target === "number") newArr[i] = Number(arr[i])
    if (target === "string") {
      newArr[i] = String(arr[i]).padStart(max, "0")
    }
  }

  return newArr
}

// const arr = [278, 109, 63, 930, 589, 184, 505, 269, 8, 83]
// const newArr = radixSort(arr)

testSort(radixSort)
measureSort(radixSort)
