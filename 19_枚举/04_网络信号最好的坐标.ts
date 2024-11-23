function bestCoordinateV1(towers: number[][], radius: number): number[] {
  let res: number[] = [0, 0]
  let maxStrength: number = 0

  for (let i = 0; i < towers.length; i++) {
    let strength = 0
    for (let j = 0; j < towers.length; j++) {
      const distance = Math.sqrt(
        Math.pow(towers[i][0] - towers[j][0], 2) +
          Math.pow(towers[i][1] - towers[j][1], 2)
      )
      if (distance <= radius) {
        strength += Math.floor(towers[j][2] / (1 + distance))
      }
    }
    console.log(strength)
    if (strength === maxStrength) {
      const x1 = res[0]
      const y1 = res[1]
      const x2 = towers[i][0]
      const y2 = towers[i][1]
      if (x1 > x2 || (x1 === x2 && y1 > y2)) {
        res = [x2, y2]
      }
    }
    if (strength > maxStrength) {
      res = towers[i].slice(0, 2)
      maxStrength = strength
    }
  }

  return res
}

function bestCoordinate(towers: number[][], radius: number): number[] {
  // 坐标取值范围[[0, cxmax], [0, cymax]]
  let cxmax = Number.MIN_SAFE_INTEGER
  let cymax = Number.MIN_SAFE_INTEGER
  for (const tower of towers) {
    cxmax = Math.max(tower[0], cxmax)
    cymax = Math.max(tower[1], cymax)
  }

  let cx = 0
  let cy = 0
  let maxStrength = 0
  for (let x = 0; x <= cxmax; x++) {
    for (let y = 0; y <= cymax; y++) {
      let strength = 0
      for (const tower of towers) {
        const distance = Math.sqrt(
          Math.pow(tower[0] - x, 2) + Math.pow(tower[1] - y, 2)
        )
        if (distance <= radius) {
          strength += Math.floor(tower[2] / (1 + distance))
        }
      }

      if (strength > maxStrength) {
        cx = x
        cy = y
        maxStrength = strength
      }
    }

  }

  return [cx, cy]
}

const towers = [
  [1, 2, 5],
  [2, 1, 7],
  [3, 1, 9]
]
const radius = 2
bestCoordinate(towers, radius)
