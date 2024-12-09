function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let res = 0
  console.log(nums)

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      let left = j + 1
      let right = nums.length - 1
      // k初始化为j 若下面k未更新 说明没有找到合适的组合
      // 此时k - j === 0 组合数为0
      let k = j
      console.log(left, right)

      while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[i] + nums[j] > nums[mid]) {
          k = mid
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
      console.log(i, j, k)
      console.log(k - j)
      console.log("-----------")
      res += k - j
    }
  }

  return res
}

function triangleNumberV2(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let res = 0

  for (let i = 0; i < nums.length - 2; i++) {
    let k = i + 1
    // k, j应该同向递增
    // 当找到满足nums[i] + nums[j] > nums[k]的k时
    // 此时k左侧均为满足的元素 递增j 左侧元素仍满足 此时只需要同时递增k即可
    for (let j = i + 1; j < nums.length - 1; j++) {
      while (k + 1 < nums.length && nums[i] + nums[j] > nums[k + 1]) {
        k++
      }
      // 当出现不满足的解时，k位于j左侧，k - j <= 0, 此时应该取0
      res += Math.max(k - j, 0)
    }
  }

  return res
}

const nums = [2, 3, 4, 4]
triangleNumber(nums)
