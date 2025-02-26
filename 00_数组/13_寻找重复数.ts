function findDuplicateV1(nums: number[]): number {
  // 采用堆排序 可以达到空间复杂度为O(1)
  nums.sort((a, b) => a - b)

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return nums[i]
    }
  }

  return -1
}

function findDuplicateV2(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return nums[i]
      }
    }
  }

  return -1
}

function findDuplicateV3(nums: number[]): number {
  /**
   * 从0出发，以新的值成为索引，可以构造出一个链表
   * 若无重复元素，一定会出现越界的情况
   *  0, 1, 2, 3
   * [1, 3, 4, 2]
   * 形成的链表为 0 -> 1 -> 3 -> 2 -> 4 -> null
   * 反之，则会形成环形链表，此时环的入口就是重复的元素
   * 因此，题成为求解环入口
   *  0, 1, 2, 3, 4
   * [1, 3, 4, 2, 2]
   * 0 -> 1 -> 3 -> 2 -> 4 -> 2 -> 4 -> 2
   */
  let slow = 0
  let fast = 0

  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow !== fast)

  slow = 0
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return slow
}

export {}
