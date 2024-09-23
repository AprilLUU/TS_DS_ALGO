function solveSudoku(board: string[][]): void {
  const isVaild = (row: number, col: number, num: string): boolean => {
    // 检查行列是否满足
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) return false
    }
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) return false
    }
    // 获取九宫格起始位置
    const startRow = Math.floor(row / 3) * 3
    const startCol = Math.floor(col / 3) * 3
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === num) return false
      }
    }

    return true
  }

  const backtracking = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== ".") continue
        for (let k = 1; k < 10; k++) {
          const num = String(k)
          if (isVaild(i, j, num)) {
            board[i][j] = num
            if (backtracking()) return true
            board[i][j] = "."
          }
        }
        // 若本次位置尝试了没有可以放的数 则直接return
        // 不进入下一个位置 避免无限递归
        // 回溯到上一个位置 尝试下一个解
        return false
      }
    }

    return true
  }

  backtracking()
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
solveSudoku(board)
console.log(board)
export {}
