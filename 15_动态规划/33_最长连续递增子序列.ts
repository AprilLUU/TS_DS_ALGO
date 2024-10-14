function findLengthOfLCIS(nums: number[]): number {
  const dp: number[] = new Array(nums.length).fill(1)
  let res = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1
      res = Math.max(res, dp[i])
    }
  }

  return res
}

function findLengthOfLCISV2(nums: number[]): number {
  let prev = 1
  let curr = 1
  let res = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      curr = prev + 1
      res = Math.max(res, curr)
    }
    prev = curr
    curr = 1
  }

  return res
}

const nums = [1, 3, 5, 4, 7]
// dp = [1, 2, 3, 1, 2]