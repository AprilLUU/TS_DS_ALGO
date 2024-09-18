function partitionLabels(s: string): number[] {
  const hash: number[] = new Array(26).fill(0)
  const aCode = "a".charCodeAt(0)

  // 先统计每个字符在字符串中出现的最远位置索引
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - aCode
    hash[index] = i
  }

  const res: number[] = []
  let left = 0
  let right = 0

  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - aCode
    // 更新已出现字符的最远索引
    right = Math.max(right, hash[index])
    // 到达最远位置 此时该字符串包含之前所有出现过的字符 即为一个切割点
    if (i === right) {
      res.push(right - left + 1)
      left = i + 1
    }
  }

  return res
}

function partitionLabelsV2(s: string): number[] {
  const hash: number[][] = new Array(26).fill(0).map((item) => new Array(2).fill(-1))
  const hashFilter: number[][] = []
  const aCode = "a".charCodeAt(0)

  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - aCode
    if (hash[index][0] === -1) hash[index][0] = i
    hash[index][1] = i
  }

  hash.forEach((item) => {
    if (item[0] !== -1) hashFilter.push(item)
  })
  hashFilter.sort((a, b) => a[0] - b[0])

  const res: number[] = []
  let left = hashFilter[0][0]
  let right = hashFilter[0][1]

  for (let i = 1; i < hashFilter.length; i++) {
    if (hashFilter[i][0] > right) {
      res.push(right - left + 1)
      left = hashFilter[i][0]
    }
    right = Math.max(right, hashFilter[i][1])
  }

  res.push(right - left + 1)
  return res
}
