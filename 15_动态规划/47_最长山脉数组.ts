function longestMountain(arr: number[]): number {
  // 以arr[i]为结尾的最长递增子数组长度
  const increaseDp: number[] = new Array(arr.length).fill(1)
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) increaseDp[i] = increaseDp[i - 1] + 1
  }
  // 以arr[i]为起点的最长递减子数组长度
  const decreaseDp: number[] = new Array(arr.length).fill(1)
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) decreaseDp[i] = decreaseDp[i + 1] + 1
  }

  // const dp: number[][] = new Array(arr.length)
  //   .fill(0)
  //   .map(() => new Array(2).fill(1))
  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] > arr[i - 1]) dp[i][0] = dp[i - 1][0] + 1
  //   if (arr[i] < arr[i - 1]) dp[i][1] = dp[i - 1][1] + 1
  // }

  let res = 0
  // 首尾两个位置不可能为最高点
  for (let i = 1; i < arr.length - 1; i++) {
    // 以arr[i]作为最高点没有递增没有递减子序列
    if (increaseDp[i] === 1 || decreaseDp[i] === 1) continue
    // 计算长度
    const len = increaseDp[i] + decreaseDp[i] - 1
    res = Math.max(res, len)
  }

  return res >= 3 ? res : 0
}