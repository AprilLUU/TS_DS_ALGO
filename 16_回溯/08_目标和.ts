function findTargetSumWays(nums: number[], target: number): number {
  let res = 0
  // const subset: number[] = []

  const backtracking = (sum: number, index: number) => {
    // if (sum === target && subset.length === nums.length) {
    //   console.log(subset)
    //   res++
    //   return
    // }
    // if (index === nums.length) return
    if (index === nums.length) {
      if (sum === target) res++
      return
    } 

    backtracking(sum + nums[index], index + 1)
    backtracking(sum - nums[index], index + 1)

    // for (let i = index; i < nums.length; i++) {
    //   subset.push(nums[i])
    //   sum += nums[i]
    //   backtracking(sum, i + 1)
    //   sum -= nums[i]
    //   subset.pop()

    //   subset.push(-nums[i])
    //   sum -= nums[i]
    //   backtracking(sum, i + 1)
    //   sum += nums[i]
    //   subset.pop()
    // }
  }

  backtracking(0, 0)

  return res
}

/**
 * 1
 * 1 + 1
 * 1 + 1 + 1
 * 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 1 - 1 res++
 * 1 + 1 + 1 - 1 + 1 res++
 * 1 + 1 + 1 - 1 - 1
 */

const nums = [1, 1, 1, 1, 1]
const target = 3
console.log(findTargetSumWays(nums, target))
