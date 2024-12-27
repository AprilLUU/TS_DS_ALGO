import IQueue from "./IQueue"

class monotonousQueue<T> implements IQueue<T> {
  queue: T[]
  isIncrease: boolean

  constructor(isIncrease: boolean) {
    this.queue = []
    this.isIncrease = isIncrease
  }

  enqueue(element: T): void {
    if (this.isIncrease) {
      while (this.queue.length && this.queue[this.queue.length - 1] < element) {
        this.queue.pop()
      }
    } else {
      while (this.queue.length && this.queue[this.queue.length - 1] > element) {
        this.queue.pop()
      }
    }
    this.queue.push(element)
  }

  dequeue(): T | undefined {
    return this.queue.shift()
  }

  isEmpty(): boolean {
    return this.queue.length === 0
  }

  peek(): T | undefined {
    return this.queue[0]
  }

  size(): number {
    return this.queue.length
  }
}