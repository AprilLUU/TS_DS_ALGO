function change(amount: number, coins: number[]): number {
  let res = 0
  let sum = 0
  coins.sort((a, b) => a - b)

  const backtracking = (index: number) => {
    if (sum > amount) return
    if (sum === amount) {
      res++
      return
    }

    for (let i = index; i < coins.length; i++) {
      if (sum + coins[i] > amount) return
      sum += coins[i]
      backtracking(i)
      sum -= coins[i]
    }
  }

  backtracking(0)

  return res
}

const amount = 5
const coins = [1, 2, 5]
console.log(change(amount, coins))
const amount1 = 3
const coins1 = [2]
console.log(change(amount1, coins1))

export {}
