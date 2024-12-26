function numberOfSubstrings(s: string): number {
  const count: number[] = new Array(3).fill(0)
  let left = 0
  let right = 0
  let res = 0

  while (right < s.length) {
    count[s[right].charCodeAt(0) - "a".charCodeAt(0)]++

    // 只要窗口合法 之后无论添加什么字符都合法
    // 计算剩余字符数 即为子串数
    const remainChar = s.length - 1 - right
    // 收缩窗口 并判断是否合法
    while (count[0] >= 1 && count[1] >= 1 && count[2] >= 1) {
      // 收集结果
      // 1为窗口本身的子串 remainChar为添加剩余字符的子串数
      res += remainChar + 1
      count[s[left].charCodeAt(0) - "a".charCodeAt(0)]--
      left++
    }

    right++
  }

  return res
}

const s = "acbbcac"
numberOfSubstrings(s)

export {}