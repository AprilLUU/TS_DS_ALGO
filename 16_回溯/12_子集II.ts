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
  // 需不需要排序取决于下一层能不能选取已经搜索过的重复的元素
  // 排完序之后可保证重复的元素集中在一起  在当前层搜索完之后 可保证下一层选取的元素不会与搜索过的元素重复
  // eg: [4, 1, 4] 未排序之前 下一层已选取1 回溯时又选取1 此时若后面有与索引0相同的元素就会造成重复
  // 排完序 [1, 4, 4] 当前层已搜索过1 下一层不会再选取1进行搜索
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