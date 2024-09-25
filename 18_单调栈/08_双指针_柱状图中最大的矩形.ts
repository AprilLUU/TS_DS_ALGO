function largestRectangleArea(heights: number[]): number {
  const n = heights.length

  const leftMinHeight: number[] = new Array(n).fill(-1)
  for (let i = 1; i < n; i++) {
    let left = i - 1
    // left防止越界
    while (left >= 0 && heights[left] >= heights[i]) {
      left = leftMinHeight[left]
    }
    leftMinHeight[i] = left
  }
  console.log(leftMinHeight)

  const rightMinHeight: number[] = new Array(n).fill(n)
  for (let i = n - 2; i >= 0; i--) {
    let right = i + 1
    // right防止越界
    while (right < n && heights[right] >= heights[i]) {
      right = rightMinHeight[right]
    }
    rightMinHeight[i] = right
  }
  console.log(rightMinHeight)

  let max = 0
  for (let i = 0; i < n; i++) {
    const w = rightMinHeight[i] - leftMinHeight[i] - 1
    max = Math.max(max, w * heights[i])
  }
  console.log(max)

  return max
}

const heights = [1, 1]
largestRectangleArea(heights)

export {}
