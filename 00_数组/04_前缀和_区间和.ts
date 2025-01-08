class intervalSum {
  arr: number[] = []
  // 下标i代表arr从[0, i]区间内的和
  // 空间换时间的策略 减少累加的循环运算
  // 时间 O(n) 空间 O(n) 查询 O(1)
  prefixSum: number[] = []

  constructor(arr:  number[]) {
    this.arr = arr
    this.prefixSum[0] = arr[0]
    for (let i = 1; i < arr.length; i++) {
      this.prefixSum[i] = this.prefixSum[i - 1] + arr[i]
    }
  }

  calc(start: number, end: number): number {
    return start === 0 ? this.prefixSum[end] : this.prefixSum[end] - this.prefixSum[start - 1]
  }
}