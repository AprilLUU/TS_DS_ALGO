import { cbtPrint } from "hy-algokit"
import IHeap from "./IHeap"

class Heap<T> implements IHeap<T> {
  private data: T[]
  private length: number
  private isMaxHead: boolean

  constructor(isMaxHead: boolean = true, arr?: T[]) {
    this.isMaxHead = isMaxHead
    this.length = 0
    this.data = []
    if (arr) this.buildHeap(arr)
  }

  private swap(i: number, j: number) {
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp 
  }

  private compare(i: number, j: number) {
    if (this.isMaxHead) {
      return this.data[i] >= this.data[j]
    } else {
      return this.data[i] <= this.data[j]
    }
  }

  private heapify_up() {
    let index = this.length - 1
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.compare(parentIndex, index)) break
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  private headify_down(start: number = 0) {
    let index =  start

    while (index * 2 + 1 < this.length) {
      const leftChildIndex = index * 2 + 1
      const rightChildIndex = index * 2 + 2
      let bestChildIndex = leftChildIndex
      if (rightChildIndex < this.length && this.compare(rightChildIndex, leftChildIndex)) {
        bestChildIndex = rightChildIndex
      }
      if (this.compare(index, bestChildIndex)) break 
      this.swap(index, bestChildIndex)
      index = bestChildIndex
    }
  }

  insert(value: T): void {
    this.data.push(value)
    this.length++
    this.heapify_up()
  }

  extract(): T | undefined {
    if (this.length === 0) return undefined
    if (this.length === 1) {
      this.length--
      return this.data.pop()!
    }

    const topValue = this.data[0]
    this.data[0] = this.data.pop()!
    this.length--
    this.headify_down()
    return topValue
  }

  peek(): T | undefined {
    return this.data[0]
  }

  size(): number {
    return this.length
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  buildHeap(arr: T[]): void {
    this.data = arr
    this.length = arr.length
    const start = Math.floor(this.length / 2 - 1)
    for (let i = start; i >= 0; i--) {
      this.headify_down(i)
    }
  }

  print() {
    cbtPrint(this.data)
  }
}

// const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]
// const heap = new Heap<number>()
// for (const num of arr) {
//   heap.insert(num)
// }
// heap.print()

// const minHeap = new Heap<number>(false, arr)
// minHeap.print()

export default Heap
