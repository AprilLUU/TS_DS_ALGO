function generateParenthesisV1(n: number): string[] {
  /**
   * 每一个位置都有两种可能 取(或者)
   * 总共有2n个位置 2^2n个序列
   * 当序列长度达到2n时 验证是否合法 左右括号的数量是否一致
   * 时间复杂度 (2^2n * n) 空间复杂度 最多2n层递归 O(n)
   */
  const res: string[] = []
  const path: string[] = []

  const generate = () => {
    if (path.length === 2 * n) {
      if (isValid(path)) {
        res.push(path.join(""))
      }
      return
    }
    path.push("(")
    generate()
    path.pop()
    path.push(")")
    generate()
    path.pop()
  }

  const isValid = (sequence: string[]): boolean => {
    let balance = 0
    for (const bracket of sequence) {
      if (bracket === "(") balance++
      else balance--
      if (balance < 0) return false
    }
    return true
  }

  generate()

  return res
}

function generateParenthesis(n: number): string[] {
  const res: string[] = []
  const path: string[] = []

  const generate = (leftCount: number, rightCount: number) => {
    if (path.length === 2 * n) {
      res.push(path.join(""))
      return
    }
    // 优先放左括号
    if (leftCount < n) {
      path.push("(")
      generate(leftCount + 1, rightCount)
      path.pop()
    }
    // 如果右括号数量小于左括号 可以放左括号
    if (rightCount < leftCount) {
      path.push(")")
      generate(leftCount, rightCount + 1)
      path.pop()
    }
  }

  generate(0, 0)

  return res
}

generateParenthesis(3)
