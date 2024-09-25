function largestRectangleArea(heights: number[]): number {
  let max = 0

  for (let i = 0; i < heights.length; i++) {
    let left = i
    let right = i
    // 找左右两边高度小于i元素的元素
    // 左边没有小于的元素 说明i可以横跨左边 此时left = -1
    for (; left >= 0; left--) {
      if (heights[left] < heights[i]) break
    }
    // 右边没有小于的元素 说明i可以横跨右边 此时right = heights.length
    for (; right < heights.length; right++) {
      if (heights[right] < heights[i]) break
    }
    // 最大宽度即为数组的长度 此时左右均没有小于的元素
    // 算出两者之间的中间宽度 乘以高度即为重叠的最大矩形面积
    const w = right - left - 1
    max = Math.max(max, w * heights[i])
  }

  return max
}

export {}