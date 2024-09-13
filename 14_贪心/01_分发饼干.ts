function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let index = 0

  for (let i = 0; i < s.length; i++) {
    if (index < g.length && g[index] <= s[i]) {
      index++
    }
  }

  return index
}

function findContentChildrenV2(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let count = 0
  let index = s.length - 1

  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      count++
      index--
    }
  }

  return count
}

const g = [1, 2, 3]
const s = [3]
console.log(findContentChildren(g, s))
