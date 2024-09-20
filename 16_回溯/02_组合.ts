function combine(n: number, k: number): number[][] {
  const res: number[][] = []
  let subset: number[] = []

  function backtracking(index: number) {
    if (subset.length === k) {
      res.push([...subset])
      return
    }

    for (let i = index; i <= n; i++) {
      // 剩余元素不满足 直接return
      // k - subset.length 还需要收集的元素个数
      if (i > n - (k - subset.length) + 1) return
      subset.push(i)
      backtracking(i + 1)
      subset.pop()
    }
  }

  backtracking(1)

  return res
}

console.log(combine(4, 2))