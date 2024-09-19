function bag01(weight: number[], value: number[], capacity: number) {
  const dp: number[][] = new Array(weight.length)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(0))
  
  for (let i = weight[0]; i <= capacity; i++) {
    dp[0][i] = value[0]
  }

  // for (let i = 1; i < weight.length; i++) {
  //   for (let j = 1; j <= capacity; j++) {
  //     const currCapacity = j - weight[i]
  //     if (currCapacity < 0) dp[i][j] = dp[i - 1][j]
  //     else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][currCapacity] + value[i])
  //   }
  // }

  for (let j = 1; j <= capacity; j++) {
    for (let i = 1; i < weight.length; i++) {
      const currCapacity = j - weight[i]
      if (currCapacity < 0) dp[i][j] = dp[i - 1][j]
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][currCapacity] + value[i])
    }
  }

  console.log(dp)

  return dp[weight.length - 1][capacity]
}

function bag01V2(weight: number[], value: number[], capacity: number) {
  const dp: number[] = new Array(capacity + 1).fill(0)
  
  for (let i = weight[0]; i <= capacity; i++) {
    dp[i] = value[0]
  }

  console.log(dp)

  for (let i = 1; i < weight.length; i++) {
    for (let j = 1; j <= capacity; j++) {
      const currCapacity = j - weight[i]
      if (currCapacity >= 0) {
        dp[j] = Math.max(dp[j], dp[currCapacity] + value[i])
      }
    }
    console.log(dp)
  }

  return dp[capacity]
}

const weight = [1, 3, 4]
const value = [15, 20, 30]
const capacity = 4
bag01V2(weight, value, capacity)

export {}
