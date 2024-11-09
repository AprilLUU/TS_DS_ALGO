function isValidSudoku(board: string[][]): boolean {
  // 行的哈希表
  const rows: number[][] = new Array(9).fill(0).map(() => new Array(9).fill(0))
  // 列的哈希表
  const columns: number[][] = new Array(9)
    .fill(0)
    .map(() => new Array(9).fill(0))
  // 九宫格哈希表 (3, 3, 9)
  // 将每一个九宫格当成一个大的单元格 (9, 9)缩放成(3, 3)
  // 第一个维度代表行 第二个维度代表列 第三个维度为当前九宫格中的哈希表
  const subboxes: number[][][] = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))

  // 检查所有格子是否满足规则
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      if (num !== ".") {
        // 索引为当前数字 - 1
        const index = num.charCodeAt(0) - "0".charCodeAt(0) - 1
        // 统计行列出现次数
        // i 第i行 j 第j列
        rows[i][index]++
        columns[j][index]++
        // Math.floor(i / 3) => 当前格属于第几行的九宫格
        // Math.floor(j / 3) => 当前格属于第几列的九宫格
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++
        // 超过1就不满足规则
        if (
          rows[i][index] > 1 ||
          columns[j][index] > 1 ||
          subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1
        ) {
          return false
        }
      }
    }
  }

  return true
}
