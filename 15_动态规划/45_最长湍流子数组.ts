function maxTurbulenceSize(arr: number[]): number {
  // dp[i]以arr[i]结尾的最长湍流子数组长度
  const dp1: number[] = new Array(arr.length).fill(1)

  // 第一个方向 奇数大偶数小
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] < arr[i - 1]) {
      dp1[i] = dp1[i - 1] + 1
    }
    if (i % 2 === 1 && arr[i] > arr[i - 1]) {
      dp1[i] = dp1[i - 1] + 1
    }
  }

  const dp2: number[] = new Array(arr.length).fill(1)

  // 第二个方向 奇数小偶数大
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] > arr[i - 1]) {
      dp2[i] = dp2[i - 1] + 1
    }
    if (i % 2 === 1 && arr[i] < arr[i - 1]) {
      dp2[i] = dp2[i - 1] + 1
    }
  }

  // 取两者的最大值
  return Math.max(...dp1, ...dp2)
}

function maxTurbulenceSizeV2(arr: number[]): number {
  let prev = 1
  let max = 1

  for (let i = 1; i < arr.length; i++) {
    if (
      (i % 2 === 0 && arr[i] < arr[i - 1]) ||
      (i % 2 === 1 && arr[i] > arr[i - 1])
    ) {
      prev += 1
      max = Math.max(max, prev)
    } else {
      prev = 1
    }
  }

  prev = 1

  for (let i = 1; i < arr.length; i++) {
    if (
      (i % 2 === 0 && arr[i] > arr[i - 1]) ||
      (i % 2 === 1 && arr[i] < arr[i - 1])
    ) {
      prev += 1
      max = Math.max(max, prev)
    } else {
      prev = 1
    }
  }

  return max
}
