function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  const subset: number[] = []
  candidates.sort((a, b) => a - b)

  const backtracking = (sum: number, index: number) => {
    if (sum > target) return
    if (sum === target) {
      res.push([...subset])
      return
    }

    for (let i = index; i < candidates.length; i++) {
      if (sum + candidates[i] > target) return
      subset.push(candidates[i])
      sum += candidates[i]
      backtracking(sum, i)
      sum -= candidates[i]
      subset.pop()
    }
  }

  backtracking(0, 0)

  return res
}

const candidates = [2, 3, 6, 7]
const target = 7
console.log(combinationSum(candidates, target))
