function binarySearch<T>(arr: T[], value: T): number {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === value) return mid
    if (arr[mid] > value) right = mid - 1
    if (arr[mid] < value) left = mid + 1
  }

  if (left === arr.length) return -1
  return arr[left] > value ? left : -1
}

function minSubArrayLen(target: number, nums: number[]): number {
  const sums: number[] = []
  let minLen = nums.length + 1

  // 计算从0 ~ i的子数组和，由于元素均为正，可保证sums数组为递增
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) sums[i] = nums[i]
    else sums[i] = sums[i - 1] + nums[i]
  }

  // 搜索从0 ~ n - 1为起始下标的子数组
  for (let i = 0; i < nums.length; i++) {
    // 搜索元素为target + 从0到i - 1的前缀和，保证sums[index] - sums[i - 1] >= target
    // 当以0为起始下标时，会越界，此时sumsTarget = target
    let sumsTarget = 0
    if (i === 0) sumsTarget = target
    else sumsTarget = target + sums[i - 1]
    const index = binarySearch(sums, sumsTarget)
    if (index !== -1) {
      // index代表从0 ~ index的子数组，元素数量为index + 1
      const totalArrayLen = index + 1
      // 以i为起始下标时，前面共有(0 ~ i - 1)i个元素
      const preArrayLen = i
      const subArrLen = totalArrayLen - preArrayLen
      minLen = Math.min(minLen, subArrLen)
    }
  }

  return minLen > nums.length ? 0 : minLen
}

const testNums = [1, 1, 1, 1, 7]
const target = 7

console.log(minSubArrayLen(target, testNums))

export {}
