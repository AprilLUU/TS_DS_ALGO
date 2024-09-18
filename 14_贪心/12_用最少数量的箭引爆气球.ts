function findMinArrowShots(points: number[][]): number {
  if (!points.length) return 0
  points.sort((a, b) => a[0] - b[0])
  let count = 1

  for (let i = 1; i < points.length; i++) {
    // i的左边界大于i - 1的右边界, 气球区间不重叠
    if (points[i][0] > points[i - 1][1]) count++
    // 更新射出箭的位置, 也就是重叠的位置, 即两个右边界的最小值
    else points[i][1] = Math.min(points[i][1], points[i - 1][1])
  }

  return count
}

const points = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12]
]
findMinArrowShots(points)