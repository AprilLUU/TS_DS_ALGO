function multiBag(
  weights: number[],
  values: number[],
  nums: number[],
  capacity: number
): number {
  const dp = new Array(capacity + 1).fill(0)

  nums.forEach((num, index) => {
    if (num > 1) {
      for (let i = num; i > 1; i--) {
        weights.push(weights[index])
        values.push(values[index])
      }
    }
  })

  for (let i = 0; i < weights.length; i++) {
    for (let j = capacity; j >= weights[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i])
    }
  }

  return dp[capacity]
}

function multiBagV2(
  weights: number[],
  values: number[],
  nums: number[],
  capacity: number
): number {
  const dp = new Array(capacity + 1).fill(0)

  for (let i = 0; i < weights.length; i++) {
    for (let j = capacity; j >= weights[i]; j--) {
      for (let k = 1; k <= nums[i]; k++) {
        if (j - k * weights[i] >= 0) {
          dp[j] = Math.max(dp[j], dp[j - k * weights[i]] + k * values[i])
        }
      }
    }
  }

  return dp[capacity]
}
