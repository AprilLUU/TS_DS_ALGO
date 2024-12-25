function totalFruit(fruits: number[]): number {
  const map = new Map<number, number>()
  let left = 0
  let res = 0

  for (let right = 0; right < fruits.length; right++) {
    const rightCount = map.get(fruits[right]) ?? 0
    map.set(fruits[right], rightCount + 1)
    if (map.size <= 2) {
      res = Math.max(res, right - left + 1)
    } else {
      while (map.size > 2) {
        const leftCount = map.get(fruits[left])!
        if (leftCount - 1 === 0) map.delete(fruits[left])
        else map.set(fruits[left], leftCount - 1)
        left++
      }
    }
  }

  return res
}

const fruits = [1, 2, 3, 2, 2]
totalFruit(fruits)