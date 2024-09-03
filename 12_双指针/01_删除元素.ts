function removeElement(nums: number[], val: number): number {
  let k = 0
  let i = 0
  let j = nums.length - 1

  /**
   * j指针指向数组尾部
   * i指针为扫描指针
   * 当i <= j时说明仍未扫描完毕
   * 1. 相等的元素交换到数组尾部 j指针向前移动
   * 2. 不相等的元素则继续扫描，避免移动元素的复杂操作
   */
  while (i <= j) {
    if (nums[i] === val) {
      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      j--
    } else {
      k++
      i++
    }
  }

  return k
}

/**
 * 
 * 快慢指针法
 * 快指针扫描原始数组
 * 慢指针指向不含有val的数组 遍历完毕长度即为k
 */
function removeElement2(nums: number[], val: number): number {
  let slowIndex = 0
  let fastIndex = 0
  while (fastIndex < nums.length) {
    if (nums[fastIndex] !== val) {
      nums[slowIndex] = nums[fastIndex]
      slowIndex++
    }
    fastIndex++
  }
  return slowIndex
}

const nums = [3, 2, 2, 3]
console.log(nums, removeElement2(nums, 3))

export {}