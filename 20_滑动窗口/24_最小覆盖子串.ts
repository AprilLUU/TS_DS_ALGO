function minWindow(s: string, t: string): string {
  // 存放t中字符出现的次数
  const map1 = new Map<string, number>()
  // 存放s窗口中包含t中出现的字符的次数
  const map2 = new Map<string, number>()

  // 初始化map1
  for (let i = 0; i < t.length; i++) {
    const count = map1.get(t[i]) ?? 0
    map1.set(t[i], count + 1)
  }

  // 检查两个哈希表
  const check = () => {
    for (const [key, value] of map1) {
      const count = map2.get(key)
      // 如果map2中没有对应的key，说明该窗口缺少该字符，不满足
      // 如果窗口中出现的频率小于t中出现的频率，不满足
      if (!count || count < value) {
        return false
      }
    }
    return true
  }

  // 窗口索引
  let left = 0
  let right = 0
  // 结果索引
  let len = Number.MAX_SAFE_INTEGER
  let resLeft = -1
  let resRight = -1

  while (right < s.length) {
    // 加入的字符为t中的字符，更新频率
    if (map1.has(s[right])) {
      const count = map2.get(s[right]) ?? 0
      map2.set(s[right], count + 1)
    }
    // 窗口内的字符满足条件
    while (check() && left <= right) {
      // 更新结果索引
      if (right - left + 1 < len) {
        len = right - left + 1
        resLeft = left
        resRight = right
      }
      // 移除左边元素，如果为t中出现的字符，频率减1
      if (map2.has(s[left])) {
        const count = map2.get(s[left])!
        map2.set(s[left], count - 1)
      }
      left++
    }
    right++
  }
  // 结果索引未更新，说明没找到满足的窗口
  return resLeft === -1 ? "" : s.slice(resLeft, resRight + 1)
}

const s = "ADOBECODEBANC"
const t = "ABC"
minWindow(s, t)
