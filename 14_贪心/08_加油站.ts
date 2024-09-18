// #region
// function canCompleteCircuit(gas: number[], cost: number[]): number {
//   let gasIndex = 0
//   let gasCost = cost[0]

//   for (let i = 1; i < cost.length; i++) {
//     if (gasCost > cost[i] || (gasCost === cost[i] && gas[i] > gas[gasIndex])) {
//       gasCost = cost[i]
//       gasIndex = i
//     }
//   }

//   let remainGas = gas[gasIndex]
//   let startIndex = gasIndex

//   // [2, 3, 4] [3, 4, 3]
//   // 2 4
//   // 0 1 3
//   // 1 0 3
//   // 2 -1 -1
//   while (startIndex < gas.length) {
//     remainGas -= cost[startIndex]
//     console.log( `start: ${startIndex}, remain: ${remainGas}`)
//     if (remainGas < 0) return -1
//     if (startIndex === gas.length - 1) startIndex = 0
//     else startIndex++
//     if (startIndex === gasIndex) break
//     remainGas += gas[startIndex]
//     console.log( `start: ${startIndex}, remain: ${remainGas}`)
//   }

//   return gasIndex
// }
//#endregion
function canCompleteCircuitV1(gas: number[], cost: number[]): number {
  for (let i = 0; i < gas.length; i++) {
    let remain = gas[i]
    let index = i

    while (index < gas.length) {
      remain -= cost[index]
      if (remain < 0) break
      index = (index + 1) % gas.length
      if (index === i) return index
      remain += gas[index]
    }
  }

  return -1
}

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let curSum = 0
  let totalSum = 0
  let start = 0

  for (let i = 0; i < gas.length; i++) {
    curSum += gas[i] - cost[i]
    totalSum += gas[i] - cost[i]
    // 若curSum < 0 说明[start, i]区间内都无法作为起始位置
    if (curSum < 0) {
      start = i + 1
      curSum = 0
    }
  }

  // 出现无法到达的现象 一定时cost数组的总和大于gas数组的总和
  if (totalSum < 0) return -1
  return start
}

const gas = [2, 3, 4]
const cost = [3, 4, 3]
canCompleteCircuit(gas, cost)
console.log(canCompleteCircuit(gas, cost))
