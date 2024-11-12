function missingNumber(nums: number[]): number {
  const hash: number[] = new Array(nums.length + 1).fill(0)
  nums.forEach((num) => hash[num] = 1)
  return hash.findIndex((item) => item === 0)
}
