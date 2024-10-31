function pivotIndex(nums: number[]): number {
  const prefixSum: number[] = []
  prefixSum[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i]
  }

  for (let i = 0; i < nums.length; i++) {
    let leftSum = 0
    if (i !== 0) leftSum = prefixSum[i - 1]
    let rightSum = prefixSum[nums.length - 1] - prefixSum[i]
    if (i === nums.length - 1) rightSum = 0
    if (leftSum === rightSum) return i
  }

  return -1
}

function pivotIndexV2(nums: number[]): number {
  const totalSum = nums.reduce((a, b) => a + b, 0)
  let leftSum = 0

  for (let i = 0; i < nums.length; i++) {
    const rightSum = totalSum - leftSum - nums[i]
    if (leftSum === rightSum) return i
    leftSum += nums[i]
  }

  return -1
}
