function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = []
  const subset: number[] = []
  
  function backtracking(index: number, sum: number) {
    if (sum > n) return
    if (subset.length === k) {
      if (sum === n) res.push([...subset])
      return
    }

    for (let i = index; i < 10; i++) {
      if (i > 9 - (k - subset.length) + 1) return
      subset.push(i)
      sum += i
      backtracking(i + 1, sum)
      subset.pop()
      sum -= i
    }
  }

  backtracking(1, 0)

  return res
}

console.log(combinationSum3(3, 9))