function decodeString(s: string): string {
  const stack: string[] = []
  const reg = /[a-z0-9]+/
  const reg1 = /[0-9]+/

  for (let i = 0; i < s.length; i++) {
    if (reg.test(s[i]) || s[i] === "[") {
      stack.push(s[i])
    } else {
      // 遇到 ]
      let str = ""
      // 拼接字符直至遇到 [
      while (stack.length) {
        const popChar = stack.pop()!
        if (popChar === "[") break
        str = popChar + str
      }

      // 计算出现次数
      // 因子 从个位开始10倍递增
      let factor = 1
      let count = 0
      while (stack.length) {
        const topEl = stack[stack.length - 1]!
        // 不是数字 结束
        if (!reg1.test(topEl)) break
        count += factor * Number(stack.pop()!)
        factor *= 10
      }
      // 复制count次到栈内
      for (let j = 0; j < count; j++) stack.push(str)
    }
  }

  return stack.join("")
}

const s = "100[a]"
decodeString(s)
