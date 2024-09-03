function minSubArrayLen(target: number, nums: number[]): number {
  let minLen = nums.length + 1

  for (let i = 0; i < nums.length; i++) {
    let sum = 0

    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum >= target) {
        const subArrLen = j - i + 1
        minLen = subArrLen < minLen ? subArrLen : minLen
        break
      }
    }
  }

  return minLen > nums.length ? 0 : minLen
}

const testNums = [2, 3, 1, 2, 4, 3]
const target = 7

console.log(minSubArrayLen(target, testNums))

export {}