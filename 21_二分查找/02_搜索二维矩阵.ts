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
