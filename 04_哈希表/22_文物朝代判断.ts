// 为保证连续 5个编号中的最大值和最小值的差值不能超过5
function checkDynasty(places: number[]): boolean {
  const set = new Set<number>()
  let max = 0
  let min = 14

  for (let i = 0; i < places.length; i++) {
    if (places[i] === 0) continue
    if (set.has(places[i])) return false
    max = Math.max(max, places[i])
    min = Math.min(min, places[i])
    set.add(places[i])
  }

  return max - min < 5
}

function checkDynastyV2(places: number[]): boolean {
  places.sort((a, b) => a - b)
  let zeroCount = 0

  for (let i = 0; i < places.length; i++) {
    if (places[i] === 0) {
      zeroCount++
      continue
    }
    if (i > 0 && places[i] === places[i - 1]) return false
  }

  return places[4] - places[zeroCount] < 5
}
