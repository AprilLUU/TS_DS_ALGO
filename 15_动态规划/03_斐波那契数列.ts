function fib(n: number): number {
  if (n <= 1) return n

  let pre = 0
  let curr = 1
  let res = 0

  for (let i = 2; i <= n; i++) {
    res = pre + curr
    pre = curr
    curr = res
  }

  return res
}

console.log(fib(10))
