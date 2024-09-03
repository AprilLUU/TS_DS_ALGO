import ArrayQueue from "./01_队列定义"

function winner(names: string[], num: number) {
  if (names.length === 0) return

  const queue = new ArrayQueue<string>()

  for (const name of names) {
    queue.enqueue(name)
  }

  while (queue.size() > 1) {
    for (let i = 1; i < num; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    queue.dequeue()
  }

  return queue.dequeue()
}