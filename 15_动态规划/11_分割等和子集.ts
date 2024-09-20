function canPartition(nums: number[]): boolean {
  let sum = 0
  nums.forEach((num) => (sum += num))
  if (sum % 2 === 1) return false

  const target = sum / 2
  const dp = new Array(target + 1).fill(0)

  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
    }
    // console.log(dp)
  }

  if (dp[target] === target) return true
  return false
}

const nums = [1, 5, 11, 5]
canPartition(nums)

export {}