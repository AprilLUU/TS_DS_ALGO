function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>()

  for (const str of strs) {
    const arr = str.split("")
    // 排序
    arr.sort()
    // 排序完的字符串为key 若两个字符串互为异位词 则排完序之后相同
    const key = arr.join("")
    const value = map.has(key) ? map.get(key)! : []
    value.push(str)
    map.set(key, value)
  }

  return [...map.values()]
}

function groupAnagramsV2(strs: string[]): string[][] {
  const map = new Map<string, string[]>()

  for (const str of strs) {
    const arr = str.split("")
    // 排序
    arr.sort()
    // 排序完的字符串为key 若两个字符串互为异位词 则排完序之后相同
    const key = arr.join("")
    const value = map.has(key) ? map.get(key)! : []
    value.push(str)
    map.set(key, value)
  }

  return [...map.values()]
}