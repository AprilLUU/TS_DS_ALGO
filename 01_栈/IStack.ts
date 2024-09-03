import IList from "../types/IList"

interface IStack<T> extends IList<T> {
  push(item: T): void
  pop(): T | undefined
  toString(): string
}

export default IStack
