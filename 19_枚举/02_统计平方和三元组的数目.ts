function countTriples(n: number): number {
  let res = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === i) continue
      for (let k = 1; k <= n; k++) {
        if (k === i || k === j) continue
        if (i * i + j * j === k * k) res++
      } 
    }
  }

  return res
}

function countTriplesV2(n: number): number {
  let res = 0
  const set = new Set<number>()
  for (let i = 5; i <= n; i++) {
    set.add(i * i)
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === i) continue
      const sum = i * i + j * j
      if (set.has(sum)) res++
    }
  }

  return res
}

function countTriplesV3(n: number): number {
  let res = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === i) continue
      // 避免浮点数误差 两个完全平方数之间相差大于1（1， 4， 9 ...)
      // 加上1之后开方向下取整 不影响结果
      const k = Math.floor(Math.sqrt(i * i + j * j + 1))
      // 第三个数满足小于n的条件且等于和
      if (k <= n && k * k === i * i + j * j) res++
    }
  }

  return res
}
