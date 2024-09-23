function permute(nums: number[]): number[][] {
  const res: number[][] = []
  if (!nums.length) return res
  const used: boolean[] = new Array(nums.length).fill(false)
  const subset: number[] = []

  const backtracking = () => {
    if (subset.length === nums.length) {
      res.push([...subset])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      used[i] = true
      subset.push(nums[i])
      backtracking()
      used[i] = false
      subset.pop()
    }
  }

  backtracking()

  return res
}

const nums = [1, 2, 3]
console.log(permute(nums))

export {}