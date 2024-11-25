function subarraySum(nums: number[], k: number): number {
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    // 需要考虑负数
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      // 由于存在负数的情况 当sum已经为0时 仍需要继续寻找
      // sum > k时也得继续寻找解
      if (sum === k) res++
    }
  }

  return res
}

function subarraySumV2(nums: number[], k: number): number {
  let res = 0
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    // 需要考虑负数
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum > k && nums[j] >= 0) break
      if (sum === k) res++
    }
  }

  return res
}

function subarraySumV3(nums: number[], k: number): number {
  let res = 0
  let pre = 0
  // map存储的是前缀和出现的次数
  // key：preSum value：count
  const map = new Map<number, number>()
  // 需要考虑初始化 即第一次pre为0的时候的前缀和
  map.set(0, 1)

  // 考虑以nums[i]为结尾的连续子数组和为k
  for (let i = 0; i < nums.length; i++) {
    pre += nums[i]
    // 求pre[i] - pre[j] 0 <= j < i
    // 如果pre[i] - pre[j] === k 则存在连续子数组和为k
    // pre[j] = pre[i] - k = pre - k
    // 用map存储已经出现过的pre[j]的次数
    if (map.has(pre - k)) res += map.get(pre - k)!
    if (map.has(pre)) map.set(pre, map.get(pre)! + 1)
    else map.set(pre, 1)
  }

  return res
}

const nums = [1, -1, 0]
const k = 0
subarraySum(nums, k)
