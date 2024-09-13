function jump(nums: number[]): number {
  let max = 0
  let res = 0
  let next = 0

  for (let i = 0; i < nums.length - 1; i = next) {
    res++
    for (let pos = i + 1; pos <= i + nums[i]; pos++) {
      console.log(`${i}: ${pos}`)
      if (pos >= nums.length - 1) return res
      if (pos + nums[pos] > max) {
        max = pos + nums[pos]
        next = pos
      }
    }
  }

  return res
}

const nums = [2, 3, 1]
console.log(jump(nums))
