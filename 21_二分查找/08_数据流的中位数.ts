class MedianFinder {
  data: number[]

  constructor() {
    this.data = []
  }

  binarySearch(target) {
    let left = 0
    let right = this.data.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const num = this.data[mid]
      if (num === target) {
        return mid
      } else if (num > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    return left
  }

  addNum(num: number): void {
    const insertIndex = this.binarySearch(num)
    this.data.splice(insertIndex, 0, num)
  }

  findMedian(): number {
    let left = 0
    let right = this.data.length - 1

    while (left < right) {
      left++
      right--
    }

    if (left === right) return this.data[left]

    return (this.data[left] + this.data[right]) / 2
  }
}
