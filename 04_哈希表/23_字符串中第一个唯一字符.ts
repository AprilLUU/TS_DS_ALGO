function firstUniqChar(s: string): number {
  const map = new Map<string, [number, number]>()

  for (let i = 0; i < s.length; i++) {
    console.log("------")
    const tuple = map.get(s[i])
    if (!tuple) map.set(s[i], [i, 1])
    else map.set(s[i], [i, tuple[1] + 1])
  }

  console.log(map)

  let res = s.length
  for (const [char, [index, count]] of map) {
    if (count === 1) res = Math.min(res, index)
  }

  return res === s.length ? -1 : res
}

function firstUniqCharV2(s: string): number {
  const map = new Map<string, number>()

  for (let i = 0; i < s.length; i++) {
    const count = map.get(s[i])
    if (!count) map.set(s[i], 1)
    else map.set(s[i], count + 1)
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i
  }

  return -1
}


const s = "leetcode"
firstUniqChar(s)
