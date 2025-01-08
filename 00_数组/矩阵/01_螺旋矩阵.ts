function generateMatrix(n: number): number[][] {
  const res: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
  // 起始位置 为矩阵对角线上的元素
  let startx = 0
  let starty = 0
  // 填充值
  let count = 1
  // 右边的偏移量
  let offset = 1

  // 仍需要填充
  while (startx < n - offset) {
    let x = startx
    let y = starty

    // 每条边遵循左开右闭原则
    // 上行
    while (y < n - offset) {
      res[x][y] = count
      count++
      y++
    }
    // 右列
    while (x < n - offset) {
      res[x][y] = count
      count++
      x++
    }
    // 下行
    while (y > startx) {
      res[x][y] = count
      count++
      y--
    }
    // 左列
    while (x > starty) {
      res[x][y] = count
      count++
      x--
    }
    // 填充内圈
    startx++
    starty++
    offset++
  }
  // n为奇数，需要单独处理矩阵中间的位置
  if (n % 2 !== 0) {
    const mid = Math.floor(n / 2)
    res[mid][mid] = count
  }

  return res
}

console.log(generateMatrix(3))