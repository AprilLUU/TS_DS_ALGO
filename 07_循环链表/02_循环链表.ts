import LinkedList from "./01_链表定义";

class CircularLinkedList<T> extends LinkedList<T> {
  append(value: T): void {
    super.append(value)
    this.rear.next = this.head
  }

  insert(value: T, insertIndex: number): void {
    super.insert(value, insertIndex)
    if (insertIndex === this.length - 1) this.rear.next = this.head
  }
}

const cLinkList = new CircularLinkedList<number>()
cLinkList.append(1)
cLinkList.append(2)
cLinkList.append(3)
cLinkList.insert(0, 0)
cLinkList.remove(3)
cLinkList.remove(0)
console.log(cLinkList.findIndex(2))
console.log(cLinkList.findIndex(3))
cLinkList.traverse()