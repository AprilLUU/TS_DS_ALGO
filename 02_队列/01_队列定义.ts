import IQueue from "./IQueue"

class ArrayQueue<DataType> implements IQueue<DataType> {
  protected _data: DataType[] = []

  enqueue(element: DataType): void {
    this._data.push(element)
  }

  dequeue(): DataType | undefined {
    return this._data.shift()
  }

  peek(): DataType | undefined {
    return this._data[0]
  }

  isEmpty(): boolean {
    return this._data.length === 0
  }

  size(): number {
    return this._data.length
  }
}

export default ArrayQueue