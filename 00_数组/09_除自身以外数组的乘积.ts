function productExceptSelf(nums: number[]): number[] {
  const leftProduct = new Array(nums.length).fill(1)
  const rightProduct = new Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i - 1]
  }
  for(let i = nums.length - 2; i >= 0; i--) {
    rightProduct[i] = rightProduct[i + 1] * nums[i + 1]
  }

  const answer = new Array(nums.length).fill(0)
  for (let i = 0; i < nums.length; i++) {
    answer[i] = leftProduct[i] * rightProduct[i]
  }

  return answer
}

function productExceptSelfV2(nums: number[]): number[] {
  const answer = new Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1]
  }

  // 累计右边乘积 类似状态压缩 每次状态只取决于前一次状态
  let rightProduct = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= rightProduct
    rightProduct *= nums[i]
  }
  
  return answer
}
