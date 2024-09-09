interface IIterator<T> {
  hasNext(): boolean
  next(): T | null
}

class Iterator<T> implements IIterator<T> {
  private index: number
  private data: T[]

  constructor(data: T[]) {
    this.data = data
    this.index = 0
  }

  hasNext(): boolean {
    return this.index < this.data.length
  }

  next(): T | null {
    if (this.hasNext()) return this.data[this.index++]
    else return null
  }
}

interface IIterable<T> {
  createIterator(): Iterator<T>
}

class Iterable<T> implements IIterable<T> {
  private data: T[]

  constructor(data: T[]) {
    this.data = data
  }

  createIterator(): Iterator<T> {
    return new Iterator<T>(this.data)
  }
}

const data = [1, 2, 3, 4, 5, 6]
const iterable = new Iterable<number>(data)
const iterator = iterable.createIterator()

while (iterator.hasNext()) {
  console.log(iterator.next())
}