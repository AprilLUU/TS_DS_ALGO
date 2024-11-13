function findRepeatDocument(documents: number[]): number {
  const set = new Set<number>()
  for (let i = 0; i < documents.length; i++) {
    if (set.has(documents[i])) return documents[i]
    set.add(documents[i])
  }
  return -1
}

function findRepeatDocumentV2(documents: number[]): number {
  documents.sort((a, b) => a - b)
  for (let i = 1; i < documents.length; i++) {
    if (documents[i] === documents[i - 1]) return documents[i]
  }
  return -1
}

function findRepeatDocumentV3(documents: number[]): number {
  // 长度为n 只会出现0 ~ n - 1范围的数字
  // 索引和值一一对应 建立索引和值的映射
  for (let i = 0; i < documents.length; i++) {
    if (documents[i] === i) continue
    // 已经存在 则找到重复的数字
    if (documents[documents[i]] === documents[i]) return documents[i]
    // 交换之后需要重新检查该位置
    const temp = documents[documents[i]]
    documents[documents[i]] = documents[i]
    documents[i] = temp
    i--
  }
  return -1
}

