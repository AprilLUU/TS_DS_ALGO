import ArrayQueue from "./01_队列定义"
import { IDeque } from "./IQueue"

class Deque<T> extends ArrayQueue<T> implements IDeque<T> {
  addFront(element: T): void {
    this._data.unshift(element)
  }
  removeBack(): T | undefined {
    return this._data.pop()
  }
}

export default Deque