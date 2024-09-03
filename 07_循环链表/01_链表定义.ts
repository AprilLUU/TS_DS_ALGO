import ILinkedList from "./ILinkedList"
import { LinkNode } from "../types/Node"


class LinkedList<T> implements ILinkedList<T> {
  protected head: LinkNode<T>
  protected rear: LinkNode<T>
  protected length: number

  constructor() {
    this.head = new LinkNode<T>(null)
    this.rear = this.head
    this.length = 0
  }

  append(value: T) {
    const newNode = new LinkNode<T>(value)

    if (this.head.next) {
      this.rear.next = newNode
    } else {
      this.head.next = newNode
    }

    this.rear = newNode
    this.length++
  }

  insert(value: T, insertIndex: number) {
    this.checkPosition("insert", insertIndex)
    const newNode = new LinkNode<T>(value)

    if (insertIndex === this.length) {
      this.rear.next = newNode
      this.rear = newNode
    } else {
      const preNode = this.findPreNodeWithIndex(insertIndex)
      newNode.next = preNode.next
      preNode.next = newNode
    }

    this.length++
  }

  remove(index: number): T {
    this.checkPosition("remove", index)

    const preNode = this.findPreNodeWithIndex(index)
    const removeNode = preNode.next
    preNode.next = removeNode!.next
    removeNode!.next = null
    if (index === this.length - 1) this.rear = preNode
    this.length--

    return removeNode!.value!
  }

  private isRear(node: LinkNode<T>) {
    return node === this.rear
  }

  protected checkPosition(type: string, index: number) {
    if (type === "find" || type === "remove") {
      if (index < 0 || index >= this.length) {
        throw new Error("index invalid")
      }
    }

    if (type === "findPre" || type === "insert") {
      if (index < 0 || index > this.length) {
        throw new Error("index invalid")
      }
    }
  }

  protected findPreNodeWithIndex(findIndex: number) {
    this.checkPosition("findPre", findIndex)
    let index = -1
    let current = this.head
    while (index !== findIndex - 1) {
      current = current.next!
      index++
    }
    return current
  }

  find(index: number) {
    this.checkPosition("find", index)
    if (index === this.length - 1) return this.rear.value!
    return this.findPreNodeWithIndex(index).next!.value!
  }

  findIndex(value: T): number {
    if (value === this.rear.value) return this.length - 1
    let index = 0
    let current = this.head.next

    while (current) {
      if (current.value === value) return index
      if (this.isRear(current)) return -1
      current = current.next 
      index++
    }

    return -1
  }

  traverse() {
    let current = this.head.next
    const values: T[] = []

    while (current) {
      values.push(current.value!)
      if (this.isRear(current!)) {
        current = null
      } else {
        current = current.next
      }
    }

    if (this.head.next && this.rear.next === this.head) {
      values.push(this.head.next.value!)
    }

    console.log(values.join("->"))
  }

  peek() {
    return this.head.next?.value ?? undefined
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }
}

export default LinkedList 
