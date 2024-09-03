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
    while (this.enqueueStack.length !== 0) {
      this.dequeueStack.push(this.enqueueStack.pop()!)
    }

    while (this.dequeueStack.length !== 0) {
      this.dequeueStack.push(this.dequeueStack.pop()!)
    }
    
    
    return this.dequeueStack.pop()
  }

  peek(): number {}

  empty(): boolean {
    return this.enqueueStack.length === 0
  }
}
