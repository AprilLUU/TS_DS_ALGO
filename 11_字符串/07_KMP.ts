function strStr(haystack: string, needle: string): number {
  function getNext(next: number[], s: string) {
    // 初始化next[0]为0
    // 第一个字符只有前缀没有后缀肯定为0
    let j = 0
    next[0] = j

    // i指针为当前子串最长后缀的末尾字符
    // j指针为当前子串匹配前缀的末尾字符
    // i++ i - 1之前的子串的最长公共前后缀已由j决定 所以初始位置从j开始
    for (let i = 1; i < s.length; i++) {
      // 前后缀末尾字符不匹配
      while (j > 0 && s[i] !== s[j]) {
        // 与KMP算法相同 当前字符不匹配 下次匹配为前一个字符的最长公共前后缀的匹配位置
        j = next[j - 1]
      }
      // 相等长度加1
      if (s[i] === s[j]) j++
      next[i] = j
    }
  }

  const next: number[] = []
  getNext(next, needle)
  let j = 0

  for (let i = 0; i < haystack.length; i++) {
    // 不匹配 移动模式串到下一个匹配位置 最差情况回退到初始位置
    while (j > 0 && haystack[i] !== needle[j]) j = next[j - 1]
    // 匹配时 双双移动指针
    if (haystack[i] === needle[j]) j++
    // 匹配成功 此时i还未移动 因此需要加1
    if (j === needle.length) return i - needle.length + 1
  }

  return -1
}

const str1 = "abcdefg"
const str2 = "cde"
console.log(strStr(str1, str2))

export default strStr
