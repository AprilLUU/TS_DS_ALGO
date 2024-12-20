function characterReplacement(s: string, k: number): number {
  const freq = new Array(26).fill(0)
  const n = s.length
  let maxCount = 0
  let left = 0
  let right = 0
  let res = 0

  // 窗口 [left, right)
  while (right < n) {
    // 加入一个元素
    const index = s.charCodeAt(right) - "A".charCodeAt(0)
    // 更新频率和窗口内出现的最大频率
    freq[index]++
    maxCount = Math.max(maxCount, freq[index])
    right++
    // 如果窗口内除了出现次数最多的字符之外的字符个数大于k
    // 窗口内多增加了一个元素 即right++后right - left - maxCount > k成立
    // 此时移除一个元素之后,由于maxCount未更新,right - left - maxCount > k不成立
    // 即if代码块内的逻辑只会执行一次
    if (right - left - maxCount > k) {
      // 移除左边的元素
      // 移除时不用更新maxCount
      // 如果移除字符导致maxCount - 1
      // 下一次添加元素时
      // 1. 若添加的元素等于移除的元素 maxCount不变
      // 2. 若添加的元素不等于移除的元素,想要满足条件,maxCount需要大于等于之前的maxCount
      freq[s.charCodeAt(left) - "A".charCodeAt(0)]--
      left++
    }
    res = Math.max(res, right - left)
  }

  return res
}

const s = "AABABBA",
  k = 1
console.log(characterReplacement(s, k))