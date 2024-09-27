function completeBag(weights: number[], values: number[], capacity: number) {
  const dp = new Array(weights.length)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(0))
  // 初始化dp
  // 由于有无限个物品 因此当背包放得下时还需要加上dp[0][i - weights[0]]的价值
  // 即除去一个物品0，之前的背包放了多少个物品0的价值
  for (let i = weights[0]; i <= capacity; i++) {
    dp[0][i] = values[0] + dp[0][i - weights[0]]
  }

  for (let i = 1; i < weights.length; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (j - weights[i] < 0) dp[i][j] = dp[i - 1][j]
      // dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i]] + values[i])
      // 与01背包不同的是 在放得下物品i时
      // 由于可以重复放 需要考虑的是背包容量为j - weight[i]时放不放得下物品i的最大价值
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weights[i]] + values[i])
    }
  }
  // 状态来源 dp[i - 1][j] dp[i][j - weights[i]] 即上面和左边
  // 所以遍历顺序先行后列 先列后行 即先物品后背包 先背包后物品均不影响结果
  // 01背包的状态来源 dp[i - 1][j] dp[i - 1][j - weights[i]] 即上面和左上方
  // 在二维情况下也不影响结果
  // for (let j = 1; j <= capacity; j++) {
  //   for (let i = 1; i < weights.length; i++) {
  //     if (j - weights[i] < 0) dp[i][j] = dp[i - 1][j]
  //     else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weights[i]] + values[i])
  //   }
  // }

  console.log(dp)

  return dp[weights.length - 1][capacity]
}

function completeBagV1(weights: number[], values: number[], capacity: number) {
  const dp = new Array(capacity + 1).fill(0)

  for (let i = 0; i < weights.length; i++) {
    for (let j = weights[i]; j <= capacity; j++) {
      // 完全背包的状态来源
      // dp[i - 1][j] 使用一维滚动数组即dp[j] 上一行未更新的状态
      // dp[i][j - weights[i]] 使用一维滚动数组需要为已更新的状态 即dp[j - weights]
      // 此时为正序遍历时 可保证dp[0] ~ dp[j - 1]状态已更新
      // 与01背包不同 01背包需要未更新的dp[j - weights] 故需要反向遍历
      dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i])
    }
  }
  
  // 由于完全背包依赖于已更新的状态 所以遍历顺序可以颠倒
  // 但01背包依赖于未更新的状态 使用一维滚动数组时需要反向遍历
  // 此时颠倒顺序 无法获得上一行的dp[i - 1][j - weights[i]]的状态 
  // 即dp[j - weights[i]]的状态还未更新到i - 1的状态
  // eg: weights = [1, 1, 1], values = [10, 20, 30]
  // 先物品后背包 dp: [0, 10, 10, 10] -> [0, 20, 30, 30] -> [0, 30, 50, 60]
  // 先背包后物品 dp: [0, 0, 0, 10] -> [0, 0, 0, 20] -> [0, 0, 0, 30] 
  // for (let j = 0; j <= capacity; j++) {
  //   for (let i = 0; i < weights.length; i++) {
  //     if (j - weights[i] < 0) continue 
  //     dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i])
  //   }
  // }

  console.log(dp)

  return dp[capacity]
}

completeBag([1, 3, 4], [15, 20, 30], 4)
completeBag([1, 1, 1], [10, 20, 30], 3)
completeBagV1([1, 3, 4], [15, 20, 30], 4)
completeBagV1([1, 1, 1], [10, 20, 30], 3)

