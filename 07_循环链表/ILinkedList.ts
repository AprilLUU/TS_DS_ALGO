import IList from "../types/IList"

interface ILinkedList<T> extends IList<T> {
  append(value: T): void
  insert(value: T, insertIndex: number): void
  remove(index: number): T
  find(index: number): T
  traverse(): void
}

interface IDoubleLinkedList<T> extends ILinkedList<T> {
  prepend(value: T): void
}

export default ILinkedList
export { IDoubleLinkedList }