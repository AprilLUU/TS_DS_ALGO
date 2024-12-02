function trap(height: number[]): number {
  let sum = 0
  const n = height.length

  const leftMaxHeight = new Array(n).fill(0)
  leftMaxHeight[0] = 0
  for (let i = 1; i < n; i++) {
    leftMaxHeight[i] = Math.max(leftMaxHeight[i - 1], height[i - 1])
  }

  console.log(leftMaxHeight)

  const rightMaxHeight = new Array(n).fill(0)
  rightMaxHeight[n - 1] = 0
  for (let i = n - 2; i >= 0; i--) {
    rightMaxHeight[i] = Math.max(rightMaxHeight[i + 1], height[i + 1])
  }

  console.log(rightMaxHeight)

  const difference: number[] = []
  for (let i = 0; i < height.length; i++) {
    const res = Math.min(leftMaxHeight[i], rightMaxHeight[i]) - height[i]
    difference.push(res)
    if (res > 0) sum += res
  }

  console.log(difference)

  return sum
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
trap(height)

export {}
