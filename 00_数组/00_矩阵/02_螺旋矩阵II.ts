function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = []
  let startx = 0
  let starty = 0
  let offset = 1
  const row = matrix.length
  const column = matrix[0].length

  // 中间仍有元素 继续顺时针遍历
  // 由于矩阵并非方阵，当满足相等的情况时仍需要继续访问遍历
  // 同时满足startx和starty不越界，避免重复访问
  // eg: martix1
  while (startx <= column - offset && starty <= row - offset) {
    let x = startx
    let y = starty

    while (y < column - offset) {
      res.push(matrix[x][y])
      y++
    }
    while (x < row - offset) {
      res.push(matrix[x][y])
      x++
    }
    while (y > startx) {
      res.push(matrix[x][y])
      // 当只剩一行需要访问时，由于在处理上行时已经访问过，需要避免重复访问
      // 每次访问收缩两列，总收缩的行数为(offset - 1) * 2
      // eg：martix4
      const currentRow = row - (offset - 1) * 2
      if (currentRow === 1) break
      y--
    }
    while (x > starty) {
      res.push(matrix[x][y])
      // 与访问行类似，只剩一列时需要避免重复访问
      const currentColumn = column - (offset - 1) * 2
      if (currentColumn === 1) break
      x--
    }

    startx++
    starty++
    offset++
  }

  // 当且仅当为n阶方阵，且n为奇数时，采用左开右闭原则每条边都无法处理矩阵最中心的元素
  // eg: martix
  if (row === column && row % 2 !== 0) {
    const mid = Math.floor(row / 2)
    res.push(matrix[mid][mid])
  }

  return res
}

function spiralOrderV1(matrix: number[][]): number[] {
  const m = matrix.length
  const n = matrix[0].length
  let startx = 0
  let starty = 0
  let x = 0
  let y = 0
  let offset = 1
  const res: number[] = []

  // 中间仍有元素需要处理
  while (startx < m - offset && starty < n - offset) {
    // 上右下左 按左开右闭的原则处理
    while (y < n - offset) res.push(matrix[x][y++])
    while (x < m - offset) res.push(matrix[x++][y])
    while (y > starty) res.push(matrix[x][y--])
    while (x > startx) res.push(matrix[x--][y])
    startx++
    starty++
    x = startx
    y = starty
    offset++
  }

  // n阶方阵且n为奇数 处理最后的中心元素
  if (m === n && n % 2 === 1) res.push(matrix[x][y])
  // m > n 处理中间剩下的一条竖边
  if (m > n) {
    // x <= m - offset && y === n - offset 中间仍剩下元素
    while (x <= m - offset && y === n - offset) {
      res.push(matrix[x++][y])
    }
  }
  // m < n 处理中间剩下的一条横边
  if (m < n) {
    // x === m - offset && y <= n - offset 中间仍剩下元素
    while (y <= n - offset && x === m - offset) {
      res.push(matrix[x][y++])
    }
  }

  return res
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(spiralOrder(matrix))

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]
console.log(spiralOrder(matrix1))

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
  [21, 22, 23, 24]
]
console.log(spiralOrder(matrix2))

const matrix3 = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
  [11, 12, 13],
  [14, 15, 16]
]
console.log(spiralOrder(matrix3))

const matrix4 = [[1, 2, 3, 4]]
console.log(spiralOrder(matrix4))
