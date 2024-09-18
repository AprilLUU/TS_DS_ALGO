function candy(ratings: number[]): number {
  const candy: number[] = new Array(ratings.length).fill(1)
  // 右边大于左边
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candy[i] = candy[i - 1] + 1
    }
  }
  // 左边大于右边
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      // ratings[i] 右边大于左边的情况
      // 两者取最大值 左右均满足条件
      candy[i] = Math.max(candy[i], candy[i + 1] + 1)
    }
  }

  let res = 0
  candy.forEach((count) => res += count)

  return res
}
