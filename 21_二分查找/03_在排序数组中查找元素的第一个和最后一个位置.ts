function searchRange(nums: number[], target: number): number[] {
  let left = 0
  let right = nums.length - 1
  let index = -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      index = mid
      break
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  if (index === -1) return [index, index]

  const res: number[] = []

  for (let i = index; i >= 0; i--) {
    if (i === 0 && nums[i] === target) {
      res.push(i)
    }
    if (nums[i] !== target) {
      res.push(i + 1)
      break
    }
  }

  for (let i = index; i < nums.length; i++) {
    if (i === nums.length - 1 && nums[i] === target) {
      res.push(i)
    }
    if (nums[i] !== target) {
      res.push(i - 1)
      break
    }
  }

  return res
}

function searchRangeV1(nums: number[], target: number): number[] {
  const binarySearch = (isLeft: boolean) => {
    let left = 0
    let right = nums.length - 1
    let index = -1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        if (isLeft) {
          // 查找第一个等于target的位置
          if (mid === 0 || nums[mid - 1] < target) {
            index = mid
            break
          } else {
            right = mid - 1
          }
        } else {
          // 查找最后一个等于target的位置
          if (mid === nums.length - 1 || nums[mid + 1] > target) {
            index = mid
            break
          } else {
            left = mid + 1
          }
        }
      } else if (nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    return index
  }

  // let left = 0
  // let right = nums.length - 1
  // const res: number[] = [-1, -1]

  // while (left <= right) {
  //   const mid = Math.floor((left + right) / 2)
  //   if (nums[mid] === target) {
  //     if (mid === 0 || nums[mid - 1] < target) {
  //       res[0] = mid
  //       break
  //     }
  //   } else if (nums[mid] > target) {
  //     right = mid - 1
  //   } else {
  //     left = mid + 1
  //   }
  // }

  // left = 0
  // right = nums.length - 1

  // while (left <= right) {
  //   const mid = Math.floor((left + right) / 2)
  //   if (nums[mid] === target) {
  //     if (mid === nums.length - 1 || nums[mid + 1] > target) {
  //       res[1] = mid
  //       break
  //     }
  //   } else if (nums[mid] > target) {
  //     right = mid - 1
  //   } else {
  //     left = mid + 1
  //   }
  // }

  const leftIndex = binarySearch(true)
  const rightIndex = binarySearch(false)

  return [leftIndex, rightIndex]
}

const nums = [5, 7, 7, 8, 8, 10]
const target = 8
searchRangeV1(nums, target)
