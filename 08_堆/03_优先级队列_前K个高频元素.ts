import Heap from "./01_堆"

class MyArray {
  data: number[]

  constructor(data: number[]) {
    this.data = data
  }

  getValue() {
    return this.data[0]
  }

  [Symbol.toPrimitive]() {
    return this.data[1]
  }
}

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const frequency = map.get(nums[i])
    frequency ? map.set(nums[i], frequency + 1) : map.set(nums[i], 1)
  }
  
  const heap = new Heap<MyArray>(false)
  for (const [key, value] of map) {
    const arr = new MyArray([key, value])
    heap.insert(arr)
    if (heap.size() > k) {
      heap.extract()
    }
  }

  const res: number[] = []
  for (let i = 0; i < k; i++) {
    res.push(heap.extract()!.getValue())
  }

  return res
}

const nums = [1, 1, 1, 2, 2, 3]
const k = 2
console.log(topKFrequent(nums, k))

export {}