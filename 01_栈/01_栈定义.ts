import IStack from "./IStack"

class ArrayStack<DataType> implements IStack<DataType> {
  // _top: number
  private _items: DataType[]

  constructor() {
    // this._top = -1
    this._items = []
  }

  push(item: DataType) {
    // this._top++
    // this._items[this._top] = item
    this._items.push(item)
  }

  pop(): DataType | undefined {
    // if (this._top === -1) {
    //   return
    // } else {
    //   const topItem = this._items[this._top]
    //   this._top--
    //   return topItem
    // }
    return this._items.pop()
  }

  peek(): DataType | undefined {
    // return this.items[this._top]
    return this._items[this._items.length - 1]
  }

  isEmpty(): boolean {
    // return this._top == -1
    return this._items.length === 0
  }

  size(): number {
    // return this._top + 1
    return this._items.length + 1
  }

  toString(): string {
    return this._items.join(" ")
  }
}

export default ArrayStack
