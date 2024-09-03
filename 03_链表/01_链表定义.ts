import { LinkNode } from "../types/Node"
import ILinkedList from "./ILinkedList"

class LinkedList<T> implements ILinkedList<T> {
  head: LinkNode<T>
  rear: LinkNode<T>
  private length: number

  constructor() {
    this.head = new LinkNode<T>(null)
    this.rear = this.head
    this.length = 0
  }

  append(value: T) {
    const newNode = new LinkNode<T>(value)

    if (this.head.next) {
      this.rear.next = newNode
      this.rear = newNode
    } else {
      this.head.next = newNode
      this.rear = newNode
    }

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
    this.length--

    return removeNode!.value!
  }

  checkPosition(type: string, index: number) {
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

  findPreNodeWithIndex(findIndex: number) {
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
    return this.findPreNodeWithIndex(index).next!.value!
  }

  findIndex(value: T): number {
    let index = 0
    let current = this.head.next

    while (current) {
      if (current.value === value) return index
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
      current = current.next
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

// const linkedList = new LinkedList<number>()
// linkedList.append(1)
// linkedList.append(2)
// linkedList.append(3)
// linkedList.insert(4, 3)
// linkedList.insert(0, 0)
// console.log(linkedList.remove(3))
// linkedList.traverse()
// console.log(linkedList.length)

export default LinkedList
