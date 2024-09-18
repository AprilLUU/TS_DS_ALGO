function reconstructQueue(people: number[][]): number[][] {
  const queue: number[][] = []
  // 按身高排序之后 保证前面的节点均大于等于本节点
  // 身高相同 按k进行排序 保证人少的节点优先插入 确实后序插入正确
  people.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]
    else return b[0] - a[0]
  })
  console.log(people)

  for (let i = 0; i < people.length; i++) {
    // 按排序完的位置插入队列即可
    // 插入第k个位置,可保证前面有k个大于等于people[i]的节点
    const pos = people[i][1]
    queue.splice(pos, 0, people[i])
  }

  console.log(queue)

  return queue
}

const people = [
  [9, 0],
  [7, 0],
  [1, 9],
  [3, 0],
  [2, 7],
  [5, 3],
  [6, 0],
  [3, 4],
  [6, 2],
  [5, 2]
]

reconstructQueue(people)
