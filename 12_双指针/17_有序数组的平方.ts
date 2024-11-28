function sortedSquares(nums: number[]): number[] {
  const newNums: number[] = []
  let i = 0
  let j = nums.length - 1
  let k = nums.length - 1

  while (i <= j) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      newNums[k] = nums[i] * nums[i]
      i++
    } else {
      newNums[k] = nums[j] * nums[j]
      j--
    }
    k--
  }

  return newNums
}

const nums = [-4, -1, 0, 3, 9]
console.log(sortedSquares(nums))

export {}