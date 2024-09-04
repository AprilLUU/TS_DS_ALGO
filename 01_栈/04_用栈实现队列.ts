class MyQueue {
  enqueueStack: number[]
  dequeueStack: number[]

  constructor() {
    this.enqueueStack = []
    this.dequeueStack = []
  }

  push(x: number): void {
    this.enqueueStack.push(x)
  }

  pop(): number {
    if (this.dequeueStack.length === 0) {
      while (this.enqueueStack.length !== 0) {
        this.dequeueStack.push(this.enqueueStack.pop()!)
      }
    }
    
    return this.dequeueStack.pop()!
  }

  peek(): number {
    const peekEl = this.pop()
    this.dequeueStack.push(peekEl)
    return peekEl
  }

  empty(): boolean {
    return this.enqueueStack.length === 0 && this.dequeueStack.length === 0
  }
}
