function countPrimes(n: number): number {
  const isPrime = (num: number): boolean => {
    // 检查[2, 根号num]范围内即可
    // num可分解为两个因数 只需检查较小数即可
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false
    }
    return true
  }

  let res = 0

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) res++
  }

  return res
}

console.log(countPrimes(1000000))
