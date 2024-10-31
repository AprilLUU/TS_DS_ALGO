function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop()!)
  }
}

function rotateV2(nums: number[], k: number): void {
  const tails: number[] = []
  for (let i = 0; i < k; i++) tails.push(nums.pop()!)
  tails.reverse()
  nums = tails.concat(nums)
}

function rotateV3(nums: number[], k: number): void {
  if (nums.length < k) k %= nums.length
  if (nums.length === k) return

  const reverse = (nums: number[], left: number, right: number) => {
    while (left < right) {
      const temp = nums[left]
      nums[left++] = nums[right]
      nums[right--] = temp
    }
  }

  reverse(nums, 0, nums.length - 1)
  console.log(nums)
  reverse(nums, 0, k - 1)
  console.log(nums)
  reverse(nums, k, nums.length - 1)
  console.log(nums)
}

rotateV3([1, 2, 3, 4, 5, 6, 7], 3)
