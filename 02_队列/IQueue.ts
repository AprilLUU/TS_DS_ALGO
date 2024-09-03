import IList from "../types/IList"

interface IQueue<T> extends IList<T> {
  enqueue(element: T): void
  dequeue(): T | undefined
}

interface IDeque<T> extends IQueue<T> {
  addFront(element: T): void
  removeBack(): T | undefined
}

interface IPriorityQueue<T> extends IList<T> {
  enqueue(value: T, priority: number): void
  dequeue(): T | undefined
}

export default IQueue
export { IQueue, IDeque, IPriorityQueue }