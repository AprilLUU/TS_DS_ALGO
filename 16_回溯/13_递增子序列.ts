function findSubsequences(nums: number[]): number[][] {
  const res: number[][] = []
  const subset: number[] = []

  const backtracking = (index: number) => {
    if (subset.length > 1) {
      res.push([...subset])
    }
    if (index === nums.length) return

    const set = new Set<number>()
    for (let i = index; i < nums.length; i++) {
      if (set.has(nums[i])) continue
      if (subset.length && nums[i] < subset[subset.length - 1]) continue
      set.add(nums[i])
      subset.push(nums[i])
      backtracking(i + 1)
      subset.pop()
    }
  }

  backtracking(0)

  return res
}

function findSubsequencesV2(nums: number[]): number[][] {
  const res: number[][] = []
  const subset: number[] = []

  const backtracking = (index: number) => {
    if (subset.length > 1) {
      res.push([...subset])
    }
    if (index === nums.length) return

    const used = new Array(201).fill(0)
    for (let i = index; i < nums.length; i++) {
      if (used[nums[i] + 100] === 1) continue
      if (subset.length && nums[i] < subset[subset.length - 1]) continue
      used[nums[i] + 100] = 1
      subset.push(nums[i])
      backtracking(i + 1)
      subset.pop()
    }
  }

  backtracking(0)

  return res
}

/**
 * [4, 4] [4, 4, 4] [4, 4, 4, 4], [1, 4]
 * []
 * [4]
 * [4, 4]
 * [4, 4, 4] [4, 4, 1]
 * [4, 4, 4, 1] [4, 4, 4, 4] [4, 4, 1, 4]
 * [4, 4, 4, 1, 4]
 */
const nums1 = [4, 4, 4, 1, 4]
console.log(findSubsequences(nums1))
const nums = [4, 6, 7, 7]
console.log(findSubsequences(nums))

export {}
