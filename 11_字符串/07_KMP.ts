function strStr(haystack: string, needle: string): number {
  function getNext(next: number[], s: string) {
    // 初始化next[0]为0
    // 第一个字符只有前缀没有后缀肯定为0
    let j = 0
    next[0] = j

    // i指针为当前子串最长后缀的末尾字符
    // j指针为当前子串匹配前缀的末尾字符
    // next[i]为以i结尾的子串的最长公共前后缀长度 
    // 由于索引从0开始 此时j为next[i - 1]的值
    // 由于加入s[i]，相当于位置i发生不匹配时需要进行匹配的下一个位置next[i - 1]
    // 此时next[i - 1] === j 因此从j开始匹配
    // eg: abab 匹配s[3] = b s[3]之前子串aba最长公共前后缀长度为1 相当于已匹配a
    // 相当于在后缀加入b 匹配前缀子串的下一个位置索引刚好是最长公共前后缀长度1
    for (let i = 1; i < s.length; i++) {
      // 前后缀末尾字符不匹配
      // 由于有j - 1需要j > 0 防止越界
      while (j > 0 && s[i] !== s[j]) {
        // 当前字符不匹配 下次匹配为前一个字符的最长公共前后缀的匹配位置
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
