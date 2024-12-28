// error version
function findSubstringInWraproundStringV1(s: string): number {
  let left = 0
  let right = 0
  let res = 0
  // const map: number[] = new Array(26).fill(0)
  const set = new Set<string>()

  while (right < s.length) {
    const windowSize = right - left + 1
    // const index = s[right].charCodeAt(0) - "a".charCodeAt(0)

    if (windowSize === 1) {
      if (!set.has(s[right])) {
        res += windowSize
        set.add(s[right])
      }
      right++
    } else {
      const isRound =
        (s[right] === "a" && s[right - 1] === "z") ||
        s[right].charCodeAt(0) - s[right - 1].charCodeAt(0) === 1
      const isDuplicate = set.has(s.slice(left, right)) && set.has(s[right])
      if (isRound && !isDuplicate) {
        res += windowSize
        set.add(s.slice(left, right))
        set.add(s[right])
        set.add(s.slice(left, right + 1))
        right++
      } else {
        if (!isRound) left = right
        else right++
      }
    }
  }

  return res
}

function findSubstringInWraproundString(s: string): number {
  // 以字母alpha为结尾的最长环绕子串长度
  // alpha为a ~ z任意一个字符
  const dp = new Array(26).fill(0)

  let subLen = 1
  // 枚举s中环绕的子串长度
  for (let i = 0; i < s.length; i++) {
    const aCode = "a".charCodeAt(0)
    const iCode = s[i].charCodeAt(0)
    // 计算字符i在dp中的索引
    const index = iCode - aCode
    // 判断是否环绕
    const isRound = i > 0 && (s[i - 1].charCodeAt(0) - iCode + 26) % 26 === 1
    // const isRound = i > 0 && (s[i - 1].charCodeAt(0) + 1 === iCode || (s[i - 1] === "z" && s[i] === "a"))
    // 环绕 子串长度加1 否则为1 即i本身
    subLen = isRound ? subLen + 1 : 1
    // 取最大值
    dp[index] = Math.max(dp[index], subLen)
  }

  // 累加所有字符的环绕子串
  let res = 0
  for (let i = 0; i < dp.length; i++) res += dp[i]

  return res
}

const s = "abaab"
findSubstringInWraproundString(s)
