function backspaceCompare(s: string, t: string): boolean {
  // 从尾部开始遍历
  let i = s.length - 1
  let j = t.length - 1
  // 要跳过的字符数
  let skips = 0
  let skipt = 0

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      // "#" 退格字符+1
      if (s[i] === "#") {
        skips++
        i--
      } else if (skips > 0) {
        // skip > 0 存在退格字符 跳过
        skips--
        i--
      } else {
        // skip === 0 不存在退格字符
        // 找到本次比较的字符
        break
      }
    }
    while (j >= 0) {
      if (t[j] === "#") {
        skipt++
        j--
      } else if (skipt > 0) {
        skipt--
        j--
      } else {
        break
      }
    }
    // 若i，j指针未越界
    if (i >= 0 && j >= 0) {
      // 比较当前的字符
      if (s[i] !== t[j]) return false
    } else {
      // 仅有一个指针越界，说明仍有字符未比较完
      if (i >= 0 || j >= 0) return false
    }
    // 比较下一个位置
    i--
    j--
  }

  return true
}

const s = "xywrrmp"
const t = "xywrrmu#p"
backspaceCompare(s, t)

export {}
