function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length
  const n = matrix[0].length

  // mlogn
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] <= target && matrix[i][n - 1] >= target) {
      let left = 0
      let right = n - 1
      while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (matrix[i][mid] === target) return true
        if (matrix[i][mid] > target) right = mid - 1
        if (matrix[i][mid] < target) left = mid + 1
      }
    }
  }

  // nlogm
  // for (let i = 0; i < n; i++) {
  //   if (matrix[0][i] <= target && matrix[m - 1][i] >= target) {
  //     let left = 0
  //     let right = m - 1
  //     while (left <= right) {
  //       const mid = Math.floor((left + right) / 2)
  //       if (matrix[mid][i] === target) return true
  //       if (matrix[mid][i] > target) right = mid - 1
  //       if (matrix[mid][i] < target) left = mid + 1
  //     }
  //   }
  // }

  return false
}

function searchMatrixV1(matrix: number[][], target: number): boolean {
  const m = matrix.length
  const n = matrix[0].length
  // 从矩阵右上角开始搜索 搜索以(x, y)为右上角的矩阵
  let x = 0
  let y = n - 1

  while (x < m && y >= 0) {
    if (matrix[x][y] === target) return true
    // 大于 由于每一列元素升序 y对应列之后的元素均大于target
    if (matrix[x][y] > target) y--
    // 大于 由于每一行元素升序 x对应行之前的元素均小于target
    if (matrix[x][y] < target) x++
  }

  return false
}

export {}