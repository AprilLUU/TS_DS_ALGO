function fourSum(nums: number[], target: number): number[][] {
  const res: number[][] = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    // target为负 需要判断a是否大于0
    if (nums[i] > target && nums[i] >= 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue

    for (let j = i + 1; j < nums.length; j++) {

      if (nums[i] + nums[j] > target && nums[j] >= 0) break
      if (j > i + 1 && nums[j] === nums[j - 1]) continue

      let left = j + 1
      let right = nums.length - 1

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum > target) right--
        if (sum < target) left++
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--
          left++
          right--
        }
      }
    }
  }

  return res 
}

const nums = [2,2,2,2,2]
const target = 8
console.log(fourSum(nums, target))