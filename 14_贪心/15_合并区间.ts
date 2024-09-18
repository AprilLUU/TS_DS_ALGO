function merge(intervals: number[][]): number[][] {
  const res: number[][] = []
  if (!intervals.length) return res
  intervals.sort((a, b) => a[0] - b[0])
  res.push(intervals[0])

  // for (let i = 1; i < intervals.length; i++) {
  //   if (intervals[i][0] <= intervals[i - 1][1]) {
  //     intervals[i][0] = Math.min(intervals[i][0], intervals[i - 1][0])
  //     intervals[i][1] = Math.max(intervals[i][1], intervals[i - 1][1])
  //     const lastInterval = res.pop()
  //     if (lastInterval && lastInterval[0] !== intervals[i - 1][0]) {
  //       res.push(lastInterval)
  //     }
  //   }
  //   res.push(intervals[i])
  // }

  for (let i = 1; i < intervals.length; i++) {
    const lastInterval = res[res.length - 1]
    if (intervals[i][0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(intervals[i][1], lastInterval[1])
    } else {
      res.push(intervals[i])
    }
  }

  return res
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]
console.log(merge(intervals))