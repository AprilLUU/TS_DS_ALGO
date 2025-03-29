function findAnagrams(s: string, p: string): number[] {
  const res: number[] = []
  if (s.length < p.length) return res

  const map = new Array(26).fill(0)
  const aCode = "a".charCodeAt(0)
  // 预处理第一个窗口
  for (let i = 0; i < p.length; i++) {
    const index1 = p[i].charCodeAt(0) - aCode
    const index2 = s[i].charCodeAt(0) - aCode
    map[index1]--
    map[index2]++
  }

  let diff = 0
  for (const count of map) {
    if (count !== 0) diff++
  }
  if (diff === 0) res.push(0)

  let left = 0
  let right = p.length - 1

  while (right < s.length - 1) {
    const index1 = s[left].charCodeAt(0) - aCode
    const index2 = s[right + 1].charCodeAt(0) - aCode
    // 窗口移除和加入的是同一个字符
    if (index1 === index2) {
      left++
      right++
      if (diff === 0) res.push(left)
      continue
    }

    // 移除左边的字符
    // 移除之前count为0 两个字符串差异加1
    // 移除需要使count减1
    if (map[index1] === 0) diff++
    left++
    map[index1]--
    // 移除之后count为0 说明移除的字符不是p中有的字符
    // 两个字符串差异减1
    if (map[index1] === 0) diff--

    // 加入右边的字符
    // 加入之前count为0 两个字符串差异加1
    // 加入需要使count加1
    if (map[index2] === 0) diff++
    right++
    map[index2]++
    // 加入之后count为0 说明加入的字符是p中有的字符
    // 两个字符串差异减1
    if (map[index2] === 0) diff--
    // 移动窗口之后, 差异为0, 说明为异位词
    if (diff === 0) res.push(left)
  }

  return res
}

/**
 * O(n * mlogm) 超时
 */
function findAnagramsV1(s: string, p: string): number[] {
  let left = 0
  let right = p.length - 1
  const res: number[] = []
  const sortStr = p.split("").sort().join("")

  while (right < s.length) {
    const str = s
      .slice(left, right + 1)
      .split("")
      .sort()
      .join("")
    if (str === sortStr) res.push(left)
    left++
    right++
  }

  return res
}

const s = "cbaebabacd"
const p = "abc"
findAnagrams(s, p)