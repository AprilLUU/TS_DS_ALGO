function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) =>  a[0] - b[0])
  console.log(intervals)

  let count = 0
  for (let i = 1; i < intervals.length; i++) {
    // 遇到重叠区间
    if (intervals[i][0] < intervals[i - 1][1]) {
      // 更新重叠右边界 判断下一个区间是否重叠
      intervals[i][1] = Math.min(intervals[i][1], intervals[i - 1][1])
      count++
    }
  }

  return count
}

const intervals = [
  [1, 100],
  [11, 22],
  [1, 11],
  [2, 12]
]
console.log(eraseOverlapIntervals(intervals))
