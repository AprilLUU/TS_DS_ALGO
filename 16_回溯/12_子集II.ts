function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = []
  const subset: number[] = []
  nums.sort((a, b) => a - b)

  const backtracking = (index: number) => {
    res.push([...subset])
    if (index === nums.length) return

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) continue
      subset.push(nums[i])
      backtracking(i + 1)
      subset.pop()
    }
  }

  backtracking(0)

  return res
}

function subsetsWithDupV1(nums: number[]): number[][] {
  const res: number[][] = []
  const subset: number[] = []
  nums.sort((a, b) => a - b)

  const backtracking = (index: number) => {
    res.push([...subset])
    if (index === nums.length) return

    const set = new Set<number>()
    for (let i = index; i < nums.length; i++) {
      if (set.has(nums[i])) continue
      set.add(nums[i])
      subset.push(nums[i])
      backtracking(i + 1)
      subset.pop()
    }
  }

  backtracking(0)

  return res
}

const nums = [4, 4, 4, 1, 4]
console.log(subsetsWithDup(nums))
// [1, 4, 4, 4, 4]
// [1] [1, 4] [1, 4, 4] [1, 4, 4, 4] [1, 4, 4, 4, 4]