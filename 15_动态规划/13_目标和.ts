function findTargetSumWays(nums: number[], target: number): number {
  // 添加 + 的元素和为x 添加减号的元素和为 -(sum - x)
  // 求target = x - (sum - x) => x = (target + sum) / 2
  // 转化为能用多少种方案填满容量为x的背包
  let sum = 0
  nums.forEach((num) => sum += num)
  // 由于数组全为整数 求出来x一定为整数 若不为整数 则方案为0
  if ((sum + target) % 2 === 1) return 0
  // 绝对值大于sum 即使全添加+或全添加-也不能达到target 此时没有方案
  if (Math.abs(target) > sum) return 0

  const bagSize = (target + sum) / 2
  const dp: number[][] = new Array(nums.length).fill(0).map(() => new Array(bagSize + 1).fill(0))
  // 初始化第一行的状态 只有容量为nums[0]的背包能用nums[0]装满 其余均装不满或者装不下
  dp[0][nums[0]] = 1
  // 初始化第一列的状态 求第i行容量为0的背包装满有几种方案 
  // 等价于求nums[0]~nums[i]中有几个重量为0的物品 此时总方案为2^zeroNum 即放与不放
  let zeroNum = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeroNum++
    dp[i][0] = Math.pow(2, zeroNum)
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j <= bagSize; j++) {
      // 如果背包放不下nums[i] 
      // 总方案容量为j的背包考虑放物品0 ~ 物品i - 1的总方案
      if (j - nums[i] < 0) dp[i][j] = dp[i - 1][j]
      // 如果放得下nums[i]
      // 总方案容量为j的背包不放物品i的方案和放下物品i的方案
      // 不放物品i 背包容量为j的放物品0 ~ 物品i - 1的方案 
      // 放物品i 背包容量为j - nums[i]放物品0 ~ 物品i - 1的方案
      else dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i]]
    }
  }

  return dp[nums.length - 1][bagSize]
}

function findTargetSumWaysV1(nums: number[], target: number): number {
  let sum = 0
  nums.forEach((num) => sum += num)
  if ((sum + target) % 2 === 1) return 0
  if (Math.abs(target) > sum) return 0

  const bagSize = (target + sum) / 2
  const dp: number[] = new Array(bagSize + 1).fill(0)
  // 容量为0的背包装满的方案 不放物品0
  dp[0] = 1

  for (let i = 0; i < nums.length; i++) {
    // 若nums[i] = 0 dp[j] = dp[j] * 2 
    // 等价于原来的方案 加上放或者不妨物品i 所以方案数翻倍
    // 二维DP背包为0的初始化隐藏在这里面
    for (let j = bagSize; j >= nums[i]; j--) {
      // j >= nums[i]等价于隐藏了if
      // if (j - nums[i] < 0) dp[j] = dp[j]
      // dp[j] = dp[j] + dp[j - nums[i]]
      dp[j] += dp[j - nums[i]]
    }
  }

  return dp[bagSize]
}