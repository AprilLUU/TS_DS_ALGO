function trap(height: number[]): number {
  let sum = 0

  for (let i = 0; i < height.length; i++) {
    if (i === 0 || i === height.length - 1) continue

    let leftMaxHeight = height[i - 1]
    for (let left = i - 2; left >= 0; left--) {
      leftMaxHeight = Math.max(leftMaxHeight, height[left])
    }

    let rightMaxHeight = height[i + 1]
    for (let right = i + 2; right < height.length; right++) {
      rightMaxHeight = Math.max(rightMaxHeight, height[right])
    }

    const res = Math.min(leftMaxHeight, rightMaxHeight) - height[i]
    if (res > 0) sum += res
  }

  return sum
}

export {}