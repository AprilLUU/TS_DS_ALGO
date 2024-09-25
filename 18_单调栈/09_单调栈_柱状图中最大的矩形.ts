function largestRectangleArea(heights: number[]): number {
  let max = 0
  heights.unshift(0)
  heights.push(0)
  const stack: number[] = []
  stack.push(0)

  for (let i = 1; i < heights.length; i++) {
    const prevHeight = heights[stack[stack.length - 1]]
    if (heights[i] >= prevHeight) stack.push(i)
    if (heights[i] < prevHeight) {
      while (stack.length) {
        const mid = stack[stack.length - 1]
        if (heights[mid] <= heights[i]) break
        stack.pop()
        const w = i - stack[stack.length - 1] - 1
        max = Math.max(max, w * heights[mid])
      }
      stack.push(i)
    }
  }

  return max
}

function largestRectangleAreaV1(heights: number[]): number {
  let max = 0
  heights.unshift(0)
  heights.push(0)
  const stack: number[] = []

  for (let i = 0; i < heights.length; i++) {
    while (stack.length) {
      const mid = stack[stack.length - 1]
      if (heights[mid] <= heights[i]) break
      stack.pop()
      const w = i - stack[stack.length - 1] - 1
      max = Math.max(max, w * heights[mid])
    }
    stack.push(i)
  }

  console.log(max)

  return max
}

const heights = [1, 1]
largestRectangleAreaV1(heights)

export {}
