function findMaxAverage(nums: number[], k: number): number {
  let left = 0
  let right = left + k - 1
  let sum = 0
  for (let i = left; i < left + k; i++) sum += nums[i]
  let res = Number.MIN_SAFE_INTEGER

  while (right < nums.length) {
    const average = sum / k
    res = Math.max(res, average)
    sum -= nums[left]
    left++
    right++
    sum += nums[right]
  }

  return res
}
