function trainingPlan(actions: number[]): number[] {
  let slowIndex = 0
  let fastIndex = 0

  while (fastIndex < actions.length) {
    if (actions[fastIndex] % 2 === 1) {
      const temp = actions[slowIndex]
      actions[slowIndex++] = actions[fastIndex]
      actions[fastIndex] = temp
    }
    fastIndex++
  }

  return actions
}

function trainingPlanV2(actions: number[]): number[] {
  const res: number[] = []

  for (let i = 0; i < actions.length; i++) {
    if (actions[i] % 2 === 1) res.push(actions[i])
  }
  for (let i = 0; i < actions.length; i++) {
    if (actions[i] % 2 === 0) res.push(actions[i])
  }

  return res
}
