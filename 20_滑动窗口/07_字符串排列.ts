// 使用哈希表统计频率
// 在s2中用大小为s1.length的窗口进行滑动
// 判断窗口内的子串是否为s1的排列
function checkInclusionV1(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false

  const map = new Map()
  for (const char of s1) {
    if (map.has(char)) map.set(char, map.get(char) + 1)
    else map.set(char, 1)
  }

  let left = 0
  let right = left + s1.length - 1

  while (right < s2.length) {
    let isMatch = true
    const cloneMap = new Map([...map])
    for (let i = left; i <= right; i++) {
      // if (cloneMap.has(s2[i])) {
      //   const count = cloneMap.get(s2[i])
      //   if (count <= 0) {
      //     isMatch = false
      //     left++
      //     right++
      //     break
      //   }
      //   cloneMap.set(s2[i], count - 1)
      // } else {
      //   isMatch = false
      //   left++
      //   right++
      //   break
      // }
      const count = cloneMap.get(s2[i])
      if (count === undefined || count <= 0) {
        isMatch = false
        left++
        right++
        break
      }
      cloneMap.set(s2[i], count - 1)
    }
    if (isMatch) return true
  }

  return false
}

// 数组优化版本
function checkInclusionV2(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false

  const map = new Array(26).fill(0)
  const aCode = "a".charCodeAt(0)
  for (const char of s1) {
    const index = char.charCodeAt(0) - aCode
    map[index]++
  }

  let left = 0
  let right = left + s1.length - 1
  while (right < s2.length) {
    let isMatch = true
    const cloneMap = [...map]
    for (let i = left; i <= right; i++) {
      const index = s2[i].charCodeAt(0) - aCode
      if (cloneMap[index] <= 0) {
        isMatch = false
        left++
        right++
        break
      } else {
        cloneMap[index]--
      }
    }
    if (isMatch) return true
  }

  return false
}

function checkInclusionV3(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false

  const compare = (arr1: number[], arr2: number[]): boolean => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false
    }
    return true
  }

  const map1 = new Array(26).fill(0)
  const map2 = new Array(26).fill(0)
  const aCode = "a".charCodeAt(0)
  for (let i = 0; i < s1.length; i++) {
    const index1 = s1[i].charCodeAt(0) - aCode
    const index2 = s2[i].charCodeAt(0) - aCode
    map1[index1]++
    map2[index2]++
  }

  if (compare(map1, map2)) return true

  let left = 0
  let right = s1.length - 1
  while (right < s2.length - 1) {
    map2[s2[left].charCodeAt(0) - aCode]--
    left++
    right++
    map2[s2[right].charCodeAt(0) - aCode]++
    if (compare(map1, map2)) return true
  }

  return false
}

function checkInclusionV4(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false

  const map = new Array(26).fill(0)
  const aCode = "a".charCodeAt(0)
  for (let i = 0; i < s1.length; i++) {
    const index1 = s1[i].charCodeAt(0) - aCode
    const index2 = s2[i].charCodeAt(0) - aCode
    map[index1]--
    map[index2]++
  }

  let diff = 0
  for (const count of map) {
    if (count !== 0) diff++
  }
  if (diff === 0) return true

  let left = 0
  let right = s1.length - 1
  while (right < s2.length - 1) {
    // 移除的字符
    let index1 = s2[left].charCodeAt(0) - aCode
    // 加入的字符
    let index2 = s2[right + 1].charCodeAt(0) - aCode
    // 移除和加入的一样 再次移动窗口
    if (index1 === index2) {
      left++
      right++
      continue
    }
    // 移除之前map[index1] === 0 移除之后-1 差异+1
    if (map[index1] === 0) diff++
    left++
    map[index1]--
    // 移除-1之后map[index1] === 0 差异-1
    if (map[index1] === 0) diff--
    // 添加之前map[index2] === 0 添加之后+1 差异+1
    if (map[index2] === 0) diff++
    right++
    map[index2]++
    // 加入+1之后map[index2] === 0 差异-1
    if (map[index2] === 0) diff--
    if (diff === 0) return true
  }

  return false
}

function checkInclusionV5(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false

  const map = new Array(26).fill(0)
  const aCode = "a".charCodeAt(0)
  for (let i = 0; i < s1.length; i++) {
    const index = s1[i].charCodeAt(0) - aCode
    map[index]--
  }

  let left = 0
  for (let right = 0; right < s2.length; right++) {
    const index = s2[right].charCodeAt(0) - aCode
    map[index]++
    while (map[index] > 0) {
      map[s2[left].charCodeAt(0) - aCode]--
      left++
    }
    if (right - left + 1 === s1.length) return true
  }

  return false
}

const s1 = "hello"
const s2 = "ooolleoooleh"
checkInclusionV1(s1, s2)
