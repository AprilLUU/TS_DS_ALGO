function frequencySort(s: string): string {
  // 统计频率
  const map = new Map<string, number>()
  for (const char of s) {
    const count = map.get(char)
    if (count) map.set(char, count + 1)
    else map.set(char, 1)
  }

  // 排序
  const sortArr = [...map].sort((a, b) => b[1] - a[1])
  const res = new Array(s.length)
  let index = 0
  for (let i = 0; i < sortArr.length; i++) {
    const char = sortArr[i][0]
    const frequency = sortArr[i][1]
    // 收集结果
    for (let j = 0; j < frequency; j++) {
      res[index++] = char
    }
  }

  return res.join("")
}

function frequencySortV2(s: string): string {
  // 统计频率
  const map = new Map<string, number>()
  let max = 0
  for (const char of s) {
    const count = map.get(char) ?? 0
    const frequency = count + 1
    max = Math.max(max, frequency)
    map.set(char, frequency)
  }

  // 创建频率为count的桶并加入对应的字符
  const buckets = new Array(max + 1).fill(0).map(() => new Array())
  for (const [char, count] of map) {
    buckets[count].push(char)
  }
  const res: string[] = []
  for (let i = buckets.length - 1; i > 0; i--) {
    const bucket = buckets[i]
    // 收集结果
    for (let j = 0; j < bucket.length; j++) {
      for (let k = 0; k < i; k++) {
        res.push(bucket[j])
      }
    }
  }

  return res.join("")
}
