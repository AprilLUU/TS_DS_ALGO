function findItinerary(tickets: string[][]): string[] {
  // 按字典顺序进行排序 到达机场靠前的排在前面
  tickets.sort((a, b) => (a[1] < b[1] ? -1 : 1))

  type TicketsMap = {
    [index: string]: Map<string, number>
  }
  const ticketsMap: TicketsMap = {}
  for (const [from, to] of tickets) {
    if (!ticketsMap[from]) ticketsMap[from] = new Map()
    // 记录某一出发机场可以到达同一机场的次数
    ticketsMap[from].set(to, (ticketsMap[from].get(to) ?? 0) + 1)
  }

  const res = ["JFK"]
  const ticketNum = tickets.length
  const backtracking = (): boolean => {
    // 搜索到所有行程 ticketNum即有几个到达机场
    // 加上起始机场 需要加1
    if (res.length === ticketNum + 1) return true

    const targetMap = ticketsMap[res[res.length - 1]]
    if (targetMap) {
      // 遍历所有可到达机场
      for (const [to, count] of targetMap.entries()) {
        // 判断是否已经飞过
        if (count > 0) {
          res.push(to)
          targetMap.set(to, count - 1)
          if (backtracking()) return true
          res.pop()
          targetMap.set(to, count)
        }
      }
    }

    return false
  }

  backtracking()

  return res
}

// const tickets = [
//   ["MUC", "LHR"],
//   ["JFK", "MUC"],
//   ["SFO", "SJC"],
//   ["LHR", "SFO"]
// ]
// [["MUC", "LHR"], ["JFK", "MUC"], ["LHR", "SFO"], ["SFO", "SJC"]]
// {
//   "MUC": {
//     "LHR": 1
//   },
//   "JFK": {
//     "MUC": 1
//   },
//   "LHR": {
//     "SFO": 1
//   },
//   "SFO": {
//     "SJC": 1
//   }
// }
// {
//   "MUC": {
//     "LHR": 0
//   },
//   "JFK": {
//     "MUC": 0
//   },
//   "LHR": {
//     "SFO": 0
//   },
//   "SFO": {
//     "SJC": 0
//   }
// }
// res = ["JFK", "MUC", "LHR", "SFO", "SJC"]