function bag01(weight: number[], value: number[], capacity: number) {
  let res = 0
  // let count = 0

  function backtracking(currCapacity: number, currValue: number, index: number) {
    // console.log(++count)
    if (currCapacity < 0) return
    if (currCapacity === 0) {
      res = Math.max(res, currValue)
      return
    }
    // console.log(`res: ${res}`)

    for (let i = index; i < weight.length; i++) {
      currCapacity -= weight[i]
      currValue += value[i]
      // console.log(`capacity: ${currCapacity}`)
      // console.log(`value: ${currValue}`)
      backtracking(currCapacity, currValue, i + 1)
      currCapacity += weight[i]
      currValue -= value[i]
      // console.log(`capacity: ${currCapacity}`)
      // console.log(`value: ${currValue}`)
    }
  }

  backtracking(capacity, 0, 0)
  console.log(`max: ${res}`)
  return res
}

const weight = [1, 3, 4]
const value = [15, 20, 30]
const capacity = 4
bag01(weight, value, capacity)
// res: 0 capacity: 2 value: 1
// res: 0 capacity: 0 value: 3
// capacity: 2 value: 1
// capacity: -1 value: 4
// capacity: 2 value: 1
// capacity: 3 value: 0
// capacity: 1 value: 2
// res: 3 capacity: -2 value: 5
// capacity: 1 value: 2
// capacity: 3 value: 0
// capacity: 0 value: 3
// capacity: 3 value: 0
export {}