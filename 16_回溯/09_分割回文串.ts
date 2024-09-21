function partition(s: string): string[][] {
  const res: string[][] = []
  const subset: string[] = []
  
  const isPalindrome = (str: string): boolean => {
    if (!str.length) return false

    let left = 0
    let right = str.length - 1
    while (left < right) {
      if (str[left] !== str[right]) return false
      left++
      right--
    }

    return true
  }

  const backtracking = (index: number) => {
    if (index === s.length) {
      // console.log(subset)
      // for (let i = 0; i < subset.length; i++) {
      //   if (!isPalindrome(subset[i])) return
      // }
      res.push([...subset])
      return
    }

    for (let i = index; i < s.length; i++) {
      const str = s.slice(index, i + 1)
      if (!isPalindrome(str)) continue
      subset.push(str)
      backtracking(i + 1)
      subset.pop()
    }
  }

  backtracking(0)

  console.log(res)

  return res
}

partition("aab")