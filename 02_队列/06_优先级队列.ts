import Heap from "../08_堆/01_堆"

class PriorityQueue<T> {
  private head: Heap<T> = new Heap()

  enqueue(value: T): void {
    this.head.insert(value)
  }

  dequeue(): T | undefined {
    return this.head.extract()
  }

  peek(): T | undefined {
    return this.head.peek()
  }

  isEmpty(): boolean {
    return this.head.size() === 0
  }

  size(): number {
    return this.head.size()
  }
}

class Student {
  constructor(private name: string, private score: number) {
    this.name = name
    this.score = score
  }

  [Symbol.toPrimitive](hint: string) {
    if (hint === "string") return this.name
    else return this.score
  }
} 

const priorityQueue = new PriorityQueue<Student>()
const s1 = new Student("lll", 100)
const s2 = new Student("kkk", 10)
const s3 = new Student("jjj", 50)
priorityQueue.enqueue(s1)
priorityQueue.enqueue(s2)
priorityQueue.enqueue(s3)

while (!priorityQueue.isEmpty()) {
  console.log(priorityQueue.dequeue())
}

export default PriorityQueue