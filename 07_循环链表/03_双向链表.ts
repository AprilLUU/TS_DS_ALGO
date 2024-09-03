import { DoubleLinkNode } from "../types/Node"
import { IDoubleLinkedList } from "./ILinkedList"
import LinkedList from "./01_链表定义"

class DoubleLinkedList<T> extends LinkedList<T> implements IDoubleLinkedList<T> {
  protected head: DoubleLinkNode<T>
  protected rear: DoubleLinkNode<T>

  constructor() {
    super()
    this.head = new DoubleLinkNode<T>(null)
    this.rear = this.head
  }

  append(value: T): void {
    const newNode = new DoubleLinkNode<T>(value)

    if (this.length === 0) {
      this.head.next = newNode
      newNode.prev = this.head
    } else {
      this.rear.next = newNode
      newNode.prev = this.rear
    }

    this.rear = newNode
    this.rear.next = null
    this.length++
  }

  prepend(value: T): void {
    const newNode = new DoubleLinkNode<T>(value)
    const nextNode = this.head.next
    newNode.next = nextNode
    this.head.next = newNode
    newNode.prev = this.head
    if (this.length === 0) {
      this.rear = newNode
    } else {
      nextNode!.prev = newNode
    }
    this.length++
  }

  insert(value: T, insertIndex: number): void {
    this.checkPosition("insert", insertIndex)
    const newNode = new DoubleLinkNode<T>(value)

    if (insertIndex === 0) {
      this.prepend(value)
    } else if (insertIndex === this.length) {
      this.append(value)
    } else {
      const preNode = this.findPreNodeWithIndex(insertIndex) as DoubleLinkNode<T>
      const nextNode = preNode.next!
      newNode.next = nextNode
      nextNode.prev = newNode
      preNode.next = newNode
      newNode.prev = preNode
      this.length++
    }

  }

  remove(index: number): T {
    this.checkPosition("remove", index)
    let removeNode: DoubleLinkNode<T> | null = null
  
    if (index === this.length - 1) {
      removeNode = this.rear
      this.rear = this.rear.prev!
      this.rear.next = null
    } else {
      removeNode = this.findPreNodeWithIndex(index + 1) as DoubleLinkNode<T>
      const preNode = removeNode.prev!
      const nextNode = removeNode.next!
      preNode.next = nextNode
      nextNode.prev = preNode
    }

    this.length--

    return removeNode.value!
  }

  postTraverse() {
    const values: T[] = []
    let current = this.rear

    while (current !== this.head) {
      values.push(current.value!)
      current = current.prev!
    }

    if (this.length !== 0 && this.head === this.rear.next) {
      values.push(this.rear.value!)
    }

    console.log(values.join("<-"))
  }
}

// const dLinklist = new DoubleLinkedList<number>()
// dLinklist.prepend(1)
// dLinklist.append(2)
// dLinklist.insert(3, 2)
// dLinklist.insert(0, 0)
// dLinklist.insert(1, 1)
// dLinklist.traverse()
// dLinklist.postTraverse()
// dLinklist.remove(1)
// dLinklist.remove(0)
// dLinklist.remove(2)
// dLinklist.traverse()
// dLinklist.postTraverse()

export default DoubleLinkedList
