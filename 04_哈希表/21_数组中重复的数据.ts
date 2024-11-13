function findDuplicates(nums: number[]): number[] {
  const hash: number[] = new Array(nums.length + 1).fill(0)
  const res: number[] = []

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]]++
    if (hash[nums[i]] === 2) res.push(nums[i])
  }

  return res
}

function findDuplicatesV2(nums: number[]): number[] {
  nums.sort((a, b) => a - b)
  const res: number[] = []

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) res.push(nums[i])
  }

  return res
}

function findDuplicatesV3(nums: number[]): number[] {
  const res: number[] = []

  // [0, n - 1] -> [1, n] 索引和值的映射
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i + 1) continue
    if (nums[nums[i] - 1] === nums[i]) {
      res.push(nums[i])
      // 用0来代表该数字为重复数字 已经检查过 不必再检查
      nums[i] = 0
      continue
    }
    const temp = nums[nums[i] - 1]
    nums[nums[i] - 1] = nums[i]
    nums[i] = temp
    // 交换之后不为0 说明未检查过 需要重新检查
    if (nums[i] !== 0) i--
  }

  return res
}
