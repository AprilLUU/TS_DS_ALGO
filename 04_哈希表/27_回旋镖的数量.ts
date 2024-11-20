function numberOfBoomerangs(points: number[][]): number {
  let res = 0

  const EuDistance = (x1: number[], x2: number[]) => {
    let dis = 0
    for (let i = 0; i < x1.length; i++) {
      dis += (x1[i] - x2[i]) * (x1[i] - x2[i])
    }
    // return Math.sqrt(dis)
    return dis
  }

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (j === i) continue
      for (let k = 0; k < points.length; k++) {
        if (k === i || k === j) continue
        const dis1 = EuDistance(points[i], points[j])
        const dis2 = EuDistance(points[i], points[k])
        if (dis1 === dis2) res++
      }
    }
  }

  return res
}

function numberOfBoomerangsV2(points: number[][]): number {
  let res = 0

  const EuDistance = (x1: number[], x2: number[]) => {
    let dis = 0
    for (let i = 0; i < x1.length; i++) {
      dis += (x1[i] - x2[i]) * (x1[i] - x2[i])
    }
    // return Math.sqrt(dis)
    return dis
  }

  // 枚举每一个点
  for (let i = 0; i < points.length; i++) {
    const map = new Map<number, number>()
    for (let j = 0; j < points.length; j++) {
      if (j === i) continue
      // 计算两个点的距离
      const dis = EuDistance(points[i], points[j])
      // 累计距离相同的点
      const count = (map.get(dis) ?? 0) + 1
      map.set(dis, count)
    }
    for (const [_, count] of map) {
      // 相当于求两个点到一个点的距离相同 考虑顺序 即为求排列数
      // 假设有m个点距离相同 排列数为A_m^2 = m * (m - 1)
      res += count * (count - 1)
    }
  }

  return res
}

