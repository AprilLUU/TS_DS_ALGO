function canPartition(nums: number[]): boolean {
  let sum = 0
  nums.forEach((num) => (sum += num))
  if (sum % 2 === 1) return false
  nums.sort((a, b) => a - b)
  const target = sum / 2

  const backtracking = (subSum: number, index: number) => {
    if (subSum === target) return true

    for (let i = index; i < nums.length; i++) {
      if (subSum + nums[i] > target) return false
      subSum += nums[i]
      if (backtracking(subSum, i + 1)) return true
      subSum -= nums[i]
    }

    return false
  }

  return backtracking(0, 0)
}

/**
 * 1 return true
 * 1 5 return true
 * 1 5 5 return true
 * return true
 */
// [1, 5, 6, 10]
/**
 * 1 true
 * 1 5
 * 1 5 6 false
 * 1 6
 * 1 6 10 false
 * 1 10 true
 * true
 */
const nums = [1, 5, 11, 5]
console.log(canPartition(nums))
const nums1 = [1, 2, 3, 5]
console.log(canPartition(nums1))
const nums2 = [1, 5, 6, 10]
console.log(canPartition(nums2))

export {}
