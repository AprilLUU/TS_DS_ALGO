function nextGreaterElements(nums: number[]): number[] {
  // nums = nums.concat(nums)
  const res = new Array(nums.length).fill(-1)
  const stack: number[] = []

  // for (let i = 0; i < nums.length; i++)
  for (let i = 0; i < nums.length * 2; i++) {
    const index = i % nums.length
    while (stack.length) {
      const updateIndex = stack[stack.length - 1]
      if (nums[updateIndex] >= nums[index]) break
      stack.pop()
      res[updateIndex] = nums[index]
    }
    stack.push(index)
  }

  // res.length /= 2

  return res
}

/**
 * [0] [-1, -1, -1]
 * [1] [2, -1, -1]
 * [1, 2] [2, -1, -1]
 * [1, 2, 0] [2, -1, -1]
 * [1, 1] [2, -1, 2]
 * [1, 1, 2] [2, -1, 2]
 */
const nums = [1, 2, 1]
console.log(nextGreaterElements(nums))

export {}
