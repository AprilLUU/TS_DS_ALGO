function sortColors(nums: number[]): void {
  const swap = (index1: number, index2: number) => {
    const temp = nums[index1]
    nums[index1] = nums[index2]
    nums[index2] = temp
  }

  // left 左边的下一个位置
  // right 右边的下一个位置
  // index 当前的检查位置
  let left = 0
  let right = nums.length - 1
  let index = 0
  // index <= right index不能超过right
  // 可以取相等 因为right为下一个2的交换位置 处于仍未检查的状态
  while (index <= right) {
    // 遇到0 交换到数组左边 双指针同时右移
    // left <= index 满足这个条件
    // 因此index左边的元素均已经检查过 所有元素非0即1
    // 交换的元素为0时 left === index index需要右移
    // 交换的元素为1时 left < index index可以右移 直接检查下一个位置
    if (nums[index] === 0) {
      swap(left, index)
      left++
      index++
    } else if (nums[index] === 2) {
      // 遇到2 交换到数组右边
      // 右边确定 指针左移
      swap(right, index)
      right--
    } else {
      // 遇到1 直接右移指针
      index++
    }
    console.log(left, right)
    console.log(nums)
  }
}

function sortColorsV2(nums: number[]): void {
  const swap = (index1: number, index2: number) => {
    const temp = nums[index1]
    nums[index1] = nums[index2]
    nums[index2] = temp
  }

  let left = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      swap(left, i)
      left++
    }
  }

  for (let i = left; i < nums.length; i++) {
    if (nums[i] === 1) {
      swap(left, i)
      left++
    }
  }
}

const nums = [2, 0, 2, 1, 1, 0]
sortColors(nums)
