function maxScore(cardPoints: number[], k: number): number {
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

const cardPoints = [9, 7, 7, 9, 7, 7, 9],
  k = 7
maxScore(cardPoints, k)