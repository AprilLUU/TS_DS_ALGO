interface IHeap<T> {
  insert(value: T): void
  extract(): T | undefined
  peek(): T | undefined
  size(): number
  isEmpty(): boolean
  buildHeap(arr: T[]): void
}

export default IHeap