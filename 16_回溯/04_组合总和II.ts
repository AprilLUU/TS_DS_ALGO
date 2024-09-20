function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  const subset: number[] = []
  candidates.sort((a, b) => a - b)

  const backtracking = (sum: number, index: number) => {
    if (sum === target) {
      res.push([...subset])
      return
    }

    for (let i = index; i < candidates.length; i++) {
      if (sum + candidates[i] > target) return
      if (i > index && candidates[i] === candidates[i - 1]) continue
      subset.push(candidates[i])
      sum += candidates[i]
      backtracking(sum, i + 1)
      sum -= candidates[i]
      subset.pop()
    }
  }

  backtracking(0, 0)

  return res
}
