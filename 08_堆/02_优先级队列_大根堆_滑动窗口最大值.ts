import Heap from "./01_堆"

function maxSlidingWindow(nums: number[], k: number): number[] {
  const heap = new Heap<number>()
  const res: number[] = []

  for (let i = 0; i < k; i++) {
    heap.insert(nums[i])
  }
  res.push(heap.peek()!)

  for (let i = k; i < nums.length; i++) {
    if (nums[i - k] === res[i - k]) {
      heap.extract()
    }
    heap.insert(nums[i])
    res.push(heap.peek()!)
  }

  return res
}

const nums = [1, 2, 3]
const k = 2
console.log(maxSlidingWindow(nums, k))

export {}