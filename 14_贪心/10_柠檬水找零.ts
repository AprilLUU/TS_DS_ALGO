function lemonadeChange(bills: number[]): boolean {
  let five = 0
  let ten = 0

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) five++
    if (bills[i] === 10) {
      ten++
      five--
    }
    if (bills[i] === 20) {
      if (ten > 0) {
        ten--
        five--
      } else {
        five -= 3
      }
    }

    if (five < 0) return false
  }

  return true
}
