function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()
  const res: number[] = []
  
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      res.push(map.get(nums[i])!)
      res.push(i)
      break
    } else {
      map.set(target - nums[i], i)
    }
  }

  return res
}