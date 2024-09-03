import IList from "../types/IList"
import { LinkNode } from "../types/Node"

interface ILinkedList<T> extends IList<T> {
  append(value: T): void
  insert(value: T, insertIndex: number): void
  remove(index: number): T
  checkPosition(type: string, index: number)
  findPreNodeWithIndex(findIndex: number): LinkNode<T>
  find(index: number): T
  traverse(): void
}

export default ILinkedList