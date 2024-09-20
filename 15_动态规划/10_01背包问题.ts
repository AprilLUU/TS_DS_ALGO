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
  
  // for (let i = weight[0]; i <= capacity; i++) {
  //   dp[i] = value[0]
  // }

  // console.log(dp)
  // // 正序遍历会出现物体重复放入的情况
  // // weight = 1 value = 20
  // // dp[1] = dp[1 - weight] + value = 20
  // // dp[2] = dp[2 - weight] + value = 40
  // for (let i = 1; i < weight.length; i++) {
  //   for (let j = 1; j <= capacity; j++) {
  //     const currCapacity = j - weight[i]
  //     if (currCapacity >= 0) {
  //       dp[j] = Math.max(dp[j], dp[currCapacity] + value[i])
  //     }
  //   }
  //   console.log(dp)
  // }

  // 倒序遍历不会导致状态与之前的状态重合
  // 换句话说 每次计算需要用到上一行的状态
  // 先正序计算会导致本行状态覆盖上行状态
  for (let i = 0; i < weight.length; i++) {
    for (let j = capacity; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
    }
    console.log(dp)
  }

  return dp[capacity]
}

const weight = [3, 1, 4]
const value = [15, 20, 30]
const capacity = 4
bag01V2(weight, value, capacity)

export {}
