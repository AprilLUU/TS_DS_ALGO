function isLongPressedNameHash(name: string, typed: string): boolean {
  const map = new Map<string, number>()

  for (const char of name) {
    const count = map.get(char)
    map.set(char, count ? count + 1 : 1)
  }

  console.log(map)

  for (const char of typed) {
    if (!map.has(char)) return false
    const count = map.get(char)!
    map.set(char, count - 1)
  }

  console.log(map)

  let res = false
  for (const [char, count] of map) {
    if (count <= 0) res = true
    if (count > 0) return false
  }

  return res
}

function isLongPressedName(name: string, typed: string): boolean {
  let p1 = 0
  let p2 = 0

  while (p2 < typed.length) {
    if (name[p1] === typed[p2]) {
      p1++
      p2++
    } else if (p2 > 0 && typed[p2] === typed[p2 - 1]) {
      p2++
    } else {
      return false
    }
  }

  return p1 === name.length
}

const name = "rick",
  typed = "kric"

isLongPressedName(name, typed)

export {}
