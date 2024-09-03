import DoubleLinkedList from "./03_双向链表"

class CircularDoubleLinkedList<T> extends DoubleLinkedList<T> {
  constructor() {
    super()
    this.rear.next = this.head
    this.head.prev = this.rear
  }

  append(value: T): void {
    super.append(value)
    this.rear.next = this.head
    this.head.prev = this.rear
  }

  prepend(value: T): void {
    super.prepend(value)
    if (this.length === 0) this.head.prev = this.rear
  }

  remove(index: number): T {
    const value = super.remove(index)
    if (index === this.length) {
      this.rear.next = this.head
      this.head.prev = this.rear
    }
    return value
  }
}

const cbLinkList = new CircularDoubleLinkedList<number>()
cbLinkList.append(1)
cbLinkList.append(2)
cbLinkList.append(3)
cbLinkList.append(4)
cbLinkList.prepend(0)
cbLinkList.traverse()
cbLinkList.postTraverse()
cbLinkList.remove(0)
cbLinkList.insert(0, 0)
cbLinkList.insert(5, 5)
cbLinkList.insert(1, 1)
cbLinkList.traverse()
cbLinkList.postTraverse()

export default CircularDoubleLinkedList