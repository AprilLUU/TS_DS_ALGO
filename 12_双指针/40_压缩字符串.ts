function compress(chars: string[]): number {
  const reverse = (left: number, right: number) => {
    while (left < right) {
      const temp = chars[right]
      chars[right--] = chars[left]
      chars[left++] = temp
    }
  }

  let slow = 0
  let fast = 0
  let count = 0

  while (fast < chars.length) {
    // 找到不重复的字符或者到达数组尾部
    if (fast === chars.length - 1 || chars[fast] !== chars[fast + 1]) {
      // fast此时指向的字符仍为相同字符 count需要加1 统计当前字符
      count++
      // 双指针同时右移 复制字符
      chars[slow++] = chars[fast++]
      // 出现频率大于1 记录频率
      if (count !== 1) {
        const index = slow
        // 不断取数字的每一位
        while (count > 0) {
          chars[slow++] = String(count % 10)
          count = Math.floor(count / 10)
        }
        // 由于取位数时从个位开始取 需要反转 从高位到地位
        reverse(index, slow - 1)
      }
      // 重置频率为0
      count = 0
    } else {
      fast++
      count++
    }
  }

  console.log(chars, slow)
  return slow
}

const chars = ["a", "a", "b", "b", "c", "c", "c"]
compress(chars)