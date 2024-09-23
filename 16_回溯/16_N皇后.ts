function solveNQueens(n: number): string[][] {
  const res: string[][] = []
  const cheeseboard: string[][] = new Array(n).fill(".").map(() => new Array(n).fill("."))

  const isValid = (row: number, col: number): boolean => {
    // 检查在同一列上是否有皇后
    for (let i = row - 1; i >= 0; i--) {
      if (cheeseboard[i][col] === "Q") return false
    }
    // 检查正对角线上是否有皇后
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (cheeseboard[i][j] === "Q") return false
    }
    // 检查反对角线上是否有皇后
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (cheeseboard[i][j] === "Q") return false
    }
    return true
  }

  const backtracking = (row: number) => {
    if (row === n) {
      const subRes: string[] = []
      cheeseboard.forEach((item) => subRes.push(item.join("")))
      res.push(subRes)
      return
    }

    for (let i = 0; i < n; i++) {
      if (isValid(row, i)) {
        cheeseboard[row][i] = "Q"
        backtracking(row + 1)
        cheeseboard[row][i] = "."
      }
    }
  }

  backtracking(0)

  return res
}

console.log(solveNQueens(4))
export {}