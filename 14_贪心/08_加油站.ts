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
function canCompleteCircuit(gas: number[], cost: number[]): number {

  for (let i = 0; i < gas.length; i++) {

    let remain = gas[i]
    let start = i
    console.log(i)
    // while (start < gas.length) {
    //   remain -= cost[start]
    //   console.log(start, remain)
    //   if (remain < 0) break
    //   if (start === gas.length - 1) i = 0
    //   else start++
    //   if (start === i) return start
    //   remain += gas[start]
    // } 
  }

  return -1
}
const gas = [2, 3, 4]
const cost = [3, 4, 3]
canCompleteCircuit(gas, cost)
// console.log(canCompleteCircuit(gas, cost))
