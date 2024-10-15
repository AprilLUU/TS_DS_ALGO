function findLength(nums1: number[], nums2: number[]): number {
  // dp[i][j] 以nums1中i - 1为结尾，nums2中j - 1为结尾的最长公共子数组长度
  const dp: number[][] = new Array(nums1.length + 1)
    .fill(0)
    .map(() => new Array(nums2.length + 1).fill(0))
  let res = 0

  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        res = Math.max(res, dp[i][j])
      }
    }
  }

  return res
}

function findLengthV2(nums1: number[], nums2: number[]): number {
  const dp: number[] = new Array(nums2.length + 1).fill(0)
  let res = 0

  for (let i = 1; i <= nums1.length; i++) {
    for (let j = nums2.length; j > 0; j--) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[j] = dp[j - 1] + 1
        res = Math.max(res, dp[j])
      } else {
        dp[j] = 0
      }
    }
  }

  return res
}

function findLengthV3(nums1: number[], nums2: number[]): number {
  const dp: number[][] = new Array(nums1.length)
    .fill(0)
    .map(() => new Array(nums2.length).fill(0))
  let res = 0

  for (let i = 0; i < nums2.length; i++) {
    if (nums1[0] === nums2[i]) {
      dp[0][i] = 1
      res = Math.max(res, dp[0][i])
    }
  }
  for (let i = 0; i < nums1.length; i++) {
    if (nums2[0] === nums1[i]) {
      dp[i][0] = 1
      res = Math.max(res, dp[i][0])
    }
  }

  for (let i = 1; i < nums1.length; i++) {
    for (let j = 1; j < nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        res = Math.max(res, dp[i][j])
      }
    }
  }

  return res
}
