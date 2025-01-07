function setZeroes(matrix: number[][]): void {
  const column = matrix[0].length
  const row = matrix.length
  const zeroRow = new Array(row).fill(false)
  const zeroColumn = new Array(column).fill(false)

  // 第一次遍历 标记需要置为0的行和列
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (matrix[i][j] === 0) {
        zeroRow[i] = true
        zeroColumn[j] = true
      }
    }
  }

  // 第二次遍历 如果该元素所在行 或者 所在列需要置0 将元素置0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (zeroRow[i] || zeroColumn[j]) {
        matrix[i][j] = 0
      }
    }
  }
}

function setZeroesV1(matrix: number[][]): void {
  const column = matrix[0].length
  const row = matrix.length
  let flagRow = false
  let flagColumn = false

  // 标记第一行和第一列是否原来包含0
  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) flagColumn = true
  }
  for (let i = 0; i < column; i++) {
    if (matrix[0][i] === 0) flagRow = true
  }

  // 第一次遍历 标记需要置为0的行和列
  // 用矩阵的第一行和第一列来代替标记数组
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      // 该元素为0
      // 将其所在列的第一个元素 即第一行的元素置为0 作为置0标记
      // 将其所在行的第一个元素 即第一列的元素置为0 作为置0标记
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }

  // 第二次遍历 如果该元素所在行 或者 所在列需要置0 将元素置0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      // 所在列或者所在行的第一个元素为0 即有置0标记 或元素本身为0
      // 需要将该元素置为0
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  if (flagRow) {
    for (let i = 0; i < column; i++) matrix[0][i] = 0
  }
  if (flagColumn) {
    for (let i = 0; i < row; i++) matrix[i][0] = 0
  }
}

function setZeroesV2(matrix: number[][]): void {
  const column = matrix[0].length
  const row = matrix.length
  let flagRow = false
  let flagColumn = false

  // 标记第一行和第一列是否原来包含0
  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) flagColumn = true
  }
  for (let i = 0; i < column; i++) {
    if (matrix[0][i] === 0) flagRow = true
  }

  // 第一次遍历 标记需要置为0的行和列
  // 用矩阵的第一行和第一列来代替标记数组
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      // 该元素为0
      // 将其所在列的第一个元素 即第一行的元素置为0 作为置0标记
      // 将其所在行的第一个元素 即第一列的元素置为0 作为置0标记
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }

  // 第二次遍历 如果该元素所在行 或者 所在列需要置0 将元素置0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      // 所在列或者所在行的第一个元素为0 即有置0标记 或元素本身为0
      // 需要将该元素置为0
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  if (flagRow) {
    for (let i = 0; i < column; i++) matrix[0][i] = 0
  }
  if (flagColumn) {
    for (let i = 0; i < row; i++) matrix[i][0] = 0
  }
}
