function subsets(nums: number[]): number[][] {
  const res: number[][] = []
  const subset: number[] = []

  const backtracking = (index: number) => {
    res.push([...subset])
    if (index === nums.length) return
    
    for (let i = index; i < nums.length; i++) {
      subset.push(nums[i])
      backtracking(i + 1)
      subset.pop()
    }
  }

  backtracking(0)

  return res
}

const nums = [1, 2, 3]
console.log(subsets(nums))

export {}