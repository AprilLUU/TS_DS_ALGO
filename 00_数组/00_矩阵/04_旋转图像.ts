/**
 * 解法：将第一行复制到最后一列 第二行复制到倒数第二列 以此类推
 * 1. 利用辅助数组进行复制
 * 2. 先转置后交换
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length
  const newMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0))

  let x = 0
  let y = n - 1

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newMatrix[j][y] = matrix[x][j]
    }
    x++
    y--
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = newMatrix[i][j]
    }
  }
  // matrix = newMatrix
}

function rotateV1(matrix: number[][]): void {
  const n = matrix.length

  // i -> row_index
  // j -> column_index
  const swap = (i: number, j: number) => {
    const temp = matrix[i][j]
    matrix[i][j] = matrix[j][i]
    matrix[j][i] = temp
  }

  // i -> row_index
  // j, k -> column_index
  const swapRow = (i: number, j: number, k: number) => {
    const temp = matrix[i][j]
    matrix[i][j] = matrix[i][k]
    matrix[i][k] = temp
  }

  // 转置矩阵
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      swap(i, j)
    }
  }

  // 每一行进行反转 即交换列
  for (let i = 0; i < n; i++) {
    let left = 0
    let right = n - 1
    while (left < right) {
      swapRow(i, left, right)
      left++
      right--
    }
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

/**
 * T
 * [1, 4, 7]
 * [2, 5, 8]
 * [3, 6, 9]
 * 
 * reverse
 * [7, 4, 1]
 * [8, 5, 2]
 * [9, 6, 3]
 */

rotate(matrix)
