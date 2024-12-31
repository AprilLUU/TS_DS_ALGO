function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    let left = 0
    let right = matrix[i].length - 1
    if (matrix[i][right] < target) continue

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (matrix[i][mid] === target) return true
      else if (matrix[i][mid] > target) right = mid - 1
      else left = mid + 1
    }

    return false
  }

  return false
}

function searchMatrixV1(matrix: number[][], target: number): boolean {
  let left = 0
  let right = matrix.length - 1
  let targetRow = -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (matrix[mid][0] > target) {
      right = mid - 1
    } else {
      if (mid === matrix.length - 1 || matrix[mid + 1][0] > target) {
        targetRow = mid
      }
      left = mid + 1
    }
  }

  if (targetRow === -1) return false

  left = 0
  right = matrix[targetRow].length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (matrix[targetRow][mid] === target) return true
    else if (matrix[targetRow][mid] > target) right = mid - 1
    else left = mid + 1
  }

  return false
}

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
]
const target = 3
searchMatrixV1(matrix, target)
