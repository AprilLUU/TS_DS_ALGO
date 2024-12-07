function maxArea(height: number[]): number {
  let max = 0

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const w = j - i
      const h = Math.min(height[i], height[j])
      max = Math.max(max, w * h)
    }
  }

  return max
}

function maxAreaV2(height: number[]): number {
  let max = 0
  // 容器的左右边界
  let left = 0
  let right = height.length - 1

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right])
    max = Math.max(max, area)
    // 每次移动较小高度的指针
    // 计算面积需要取较小的高度 若移动较大高度的指针 只会使容器的面积减少或不变
    if (height[left] < height[right]) left++
    else right--
  }

  return max
}