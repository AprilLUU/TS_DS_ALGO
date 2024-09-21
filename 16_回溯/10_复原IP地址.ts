function restoreIpAddresses(s: string): string[] {
  const res: string[] = []
  if (s.length < 4 || s.length > 12) return res
  const subset: string[] = []

  const backtracking = (index: number) => {
    if (subset.length > 7) return
    if (index === s.length && subset.length === 7) {
      // console.log(subset)
      // subset.pop()
      // console.log(subset)
      res.push(subset.join(""))
      // subset.push(".")
      // console.log(subset)
      return
    }
    
    for (let i = index; i < s.length; i++) {
      const str = s.slice(index, i + 1)
      if (str.length > 1 && str.startsWith("0")) return
      if (Number(str) > 255) return
      subset.push(str)
      if (i !== s.length - 1) subset.push(".")
      backtracking(i + 1)
      subset.pop()
      if (i !== s.length - 1) subset.pop()
    }
  }

  backtracking(0)

  return res
}

const s = "25525511135"
console.log(restoreIpAddresses(s))
const s1 = "0000"
console.log(restoreIpAddresses(s1))
