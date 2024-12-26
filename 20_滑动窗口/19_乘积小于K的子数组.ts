function numSubarrayProductLessThanKV1(nums: number[], k: number): number {
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    let product = 1
    for (let j = i; j < nums.length; j++) {
      product *= nums[j]
      if (product < k) res++
      else break
    }
  }

  return res
}

function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let res = 0
  let prod = 1
  let left = 0

  for (let right = 0; right < nums.length; right++) {
    prod *= nums[right]

    // 窗口收缩 找到合法的窗口左端点
    while (left <= right && prod >= k) {
      prod /= nums[left]
      left++
    }

    // right - left 左边有多少个元素 将每一个元素依次加入 得到子数组
    // 1 表示right本身的子数组
    // 当以right为右端点时 没有合法的左端点 此时 left = right + 1
    // right - left + 1 = 0刚好满足
    res += right - left + 1
  }

  return res
}

const nums = [10, 5, 2, 6],
  k = 100
numSubarrayProductLessThanK(nums, k)

export {}