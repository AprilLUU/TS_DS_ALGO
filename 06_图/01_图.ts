import ArrayQueue from "../02_队列/01_队列定义"

class Graph<T> {
  private vertices: T[] = []
  private adjList: Map<T, T[]> = new Map()
  private visited: Set<T> = new Set()

  addVertex(vertex: T) {
    this.vertices.push(vertex)
    this.adjList.set(vertex, [])
  }

  addEdge(v1: T, v2: T) {
    if (!this.vertices.includes(v1) || !this.vertices.includes(v2)) {
      console.log("vertex does not exist")
      return
    }
    this.adjList.get(v1)!.push(v2)
    this.adjList.get(v2)!.push(v1)
  }

  print() {
    this.vertices.forEach(vertex => {
      console.log(`${vertex} -> ${this.adjList.get(vertex)?.join(" ")}`)
    })
  }

  bfs(vertex: T) {
    if (!this.vertices.includes(vertex)) return
    const queue = new ArrayQueue<T>()
    queue.enqueue(vertex)
    const visited = new Set<T>()
    visited.add(vertex)

    while (!queue.isEmpty()) {
      const visitedVertex = queue.dequeue()!
      console.log(visitedVertex)
      const neighbors = this.adjList.get(visitedVertex)!
      if (neighbors.length === 0) continue
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i]
        if (!visited.has(neighbor)) {
          queue.enqueue(neighbor)
          visited.add(neighbor)
        }
      }
    }
  }

  dfs(vertex: T) {
    if (!this.vertices.includes(vertex)) return
    const stack: T[] = []
    stack.push(vertex)
    const visited = new Set<T>()
    visited.add(vertex)

    while (stack.length !== 0) {
      const visitedVertex = stack.pop()!
      console.log(visitedVertex)
      const neighbors = this.adjList.get(visitedVertex)!
      if (neighbors.length === 0) continue
      for (let i = neighbors.length - 1; i > -1; i--) {
        const neighbor = neighbors[i]
        if (!visited.has(neighbor)) {
          stack.push(neighbor)
          visited.add(neighbor)
        }
      }
    }
  }

  private dfs_implement(vertex: T) {
    console.log(vertex)
    this.visited.add(vertex)

    const neighbors = this.adjList.get(vertex)!
    if (neighbors.length === 0) return
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i]
      if (!this.visited.has(neighbor)) {
        this.dfs_implement(neighbor)
      }
    }
  }

  dfs_rec(vertex: T) {
    if (!this.vertices.includes(vertex)) return
    this.dfs_implement(vertex)
  }
}

const graph = new Graph<string>()
for (let i = 65; i < 74; i++) {
  graph.addVertex(String.fromCharCode(i))
}
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("A", "D")
graph.addEdge("B", "E")
graph.addEdge("B", "F")
graph.addEdge("C", "D")
graph.addEdge("C", "G")
graph.addEdge("D", "G")
graph.addEdge("D", "H")
graph.addEdge("E", "I")

graph.print()
// graph.bfs("A")
// graph.dfs("A")
graph.dfs_rec("A")

export default Graph