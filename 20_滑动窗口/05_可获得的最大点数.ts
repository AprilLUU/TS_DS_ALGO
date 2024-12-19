function maxScoreErr(cardPoints: number[], k: number): number {
  let left = 0
  let right = cardPoints.length - 1
  let res = 0

  for (let i = 0; i < k; i++) {
    if (cardPoints[left] > cardPoints[right]) {
      res += cardPoints[left]
      left++
    } else if (cardPoints[left] < cardPoints[right]) {
      res += cardPoints[right]
      right--
    } else {
      if (left === right) res += cardPoints[left]
      else if (cardPoints[left + 1] >= cardPoints[right - 1]) {
        res += cardPoints[left]
        left++
      } else {
        res += cardPoints[right]
        right--
      }
    }
  }

  return res
}

function maxScore(cardPoints: number[], k: number): number {
  const n = cardPoints.length
  // 不拿的元素为连续窗口内的元素
  // 计算窗口大小为n - k的和最小值
  let left = 0
  let right = n - k - 1

  let sum = 0
  for (let i = left; i <= right; i++) sum += cardPoints[i]

  let minSum = sum
  // right >= 0处于合法范围内 此时窗口有效
  // right < n 窗口右移 下标会越界
  while (right >= 0 && right < n - 1) {
    sum -= cardPoints[left++]
    // 窗口右移 防止越界
    sum += cardPoints[++right]
    minSum = Math.min(minSum, sum)
  }

  let totalSum = 0
  cardPoints.forEach((value) => (totalSum += value))

  // 结果为总和减去窗口最小和
  return totalSum - minSum
}

const cardPoints = [96, 90, 41, 82, 39, 74, 64, 50, 30],
  k = 8
console.log(maxScore(cardPoints, k))
