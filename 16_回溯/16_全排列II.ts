function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = []
  if (!nums.length) return res
  nums.sort((a, b) => a - b)
  const used: boolean[] = new Array(nums.length).fill(false)
  const subset: number[] = []

  const backtracking = () => {
    if (subset.length === nums.length) {
      res.push([...subset])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
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

function permuteUniqueV2(nums: number[]): number[][] {
  const res: number[][] = []
  if (!nums.length) return res
  const used: boolean[] = new Array(nums.length).fill(false)
  const subset: number[] = []

  const backtracking = () => {
    if (subset.length === nums.length) {
      res.push([...subset])
      return
    }

    const set = new Set<number>()
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      if (set.has(nums[i])) continue
      set.add(nums[i])
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


/**
 * [1, 1, 2]
 * [1, 1, 2]
 * [1, 2, 1]
 * [2, 1, 1]
 */
const nums = [1, 2, 1]
console.log(permuteUniqueV2(nums))

export {}
