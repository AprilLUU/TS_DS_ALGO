import Heap from "../08_堆/01_堆"
import { IPriorityQueue } from "./IQueue"

class PriorityNode<T> {
  constructor(public value: T, public priority: number) {
    this.value = value
    this.priority = priority
  }

  [Symbol.toPrimitive]() {
    return this.priority
  }
}

class PriorityQueue<T> implements IPriorityQueue<T> {
  private head: Heap<PriorityNode<T>> = new Heap()

  enqueue(value: T, priority: number): void {
    const node = new PriorityNode(value, priority)
    this.head.insert(node)
  }

  dequeue(): T | undefined {
    return this.head.extract()?.value
  }

  peek(): T | undefined {
    return this.head.peek()?.value
  }

  isEmpty(): boolean {
    return this.head.size() === 0
  }

  size(): number {
    return this.head.size()
  }
}

const priorityQueue = new PriorityQueue<string>()
priorityQueue.enqueue("lll", 100)
priorityQueue.enqueue("kkk", 10)
priorityQueue.enqueue("jjj", 50)

while (!priorityQueue.isEmpty()) {
  console.log(priorityQueue.dequeue())
}

export default PriorityQueue