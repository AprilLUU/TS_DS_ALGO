function backspaceCompare(s: string, t: string): boolean {
  const s1: string[] = []
  const s2: string[] = []

  for (const char of s) {
    if (char === "#") s1.pop()
    else s1.push(char)
  }
  for (const char of t) {
    if (char === "#") s2.pop()
    else s2.push(char)
  }

  return s1.join("") === s2.join("")
}

export {}