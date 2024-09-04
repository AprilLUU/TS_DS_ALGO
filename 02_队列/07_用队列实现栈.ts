class MyStack {
  queue: number[]

  constructor() {
    this.queue = []
  }

  push(x: number): void {
    this.queue.push(x)
  }

  pop(): number {
    const n = this.queue.length
    for (let i = 1; i < n; i++) {
      this.queue.push(this.queue.shift()!)
    }
    return this.queue.shift()!
  }

  top(): number {
    const topEl = this.pop()
    this.queue.push(topEl)
    return topEl
  }

  empty(): boolean {
    return this.queue.length === 0
  }
}
