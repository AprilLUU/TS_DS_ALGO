function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length - 1; i++) {
    let left = i + 1
    let right = numbers.length - 1

    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      const targetNum = target - numbers[i]
      if (numbers[mid] === targetNum) return [i, mid]
      if (numbers[mid] > targetNum) right = mid - 1
      if (numbers[mid] < targetNum) left = mid + 1
    }
  }

  return [] as number[]
}

function twoSumV2(numbers: number[], target: number): number[] {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum === target) return [left + 1, right + 1]
    if (sum > target) right--
    if (sum < target) left++
  }

  return [] as number[]
}
