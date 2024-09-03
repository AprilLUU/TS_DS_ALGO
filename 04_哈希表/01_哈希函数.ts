const hashFunc = (key: string, max: number) => {
  const length = key.length
  const base = 31
  let hashCode = key.charCodeAt(length - 1)

  for (let i = length - 2; i > -1; i--) {
    // 采用幂的连乘 乘法的运算复杂度是O(n^2)
    // 采用霍纳法则优化 减少运算复杂度 O(n) n次乘法和n次加法
    hashCode = base * hashCode + key.charCodeAt(i)
  }

  const index = hashCode % max

  return index
}

export default hashFunc