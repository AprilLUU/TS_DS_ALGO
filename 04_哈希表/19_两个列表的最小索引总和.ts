function findRestaurant(list1: string[], list2: string[]): string[] {
  const map = new Map<string, number>()
  list1.forEach((item, index) => map.set(item, index))

  let res: string[] = []
  let minSum = list1.length + list2.length
  list2.forEach((item, index2) => {
    if (map.has(item)) {
      const index1 = map.get(item)!
      const indexSum = index1 + index2
      if (indexSum === minSum) res.push(item)
      if (indexSum < minSum) {
        minSum = indexSum
        res = []
        res.push(item)
      }
    }
  })

  return res
}