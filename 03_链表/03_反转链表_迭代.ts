import { LinkNode } from "../types/Node"
import LinkedList from "./01_链表定义"

function reverseLinklist<T>(linklist: LinkedList<T>): LinkedList<T> {
  let preNode: LinkNode<T> | null = null
  let currNode = linklist.head.next
  let nextNode = currNode!.next

  while (currNode) {
    currNode.next = preNode
    preNode = currNode
    currNode = nextNode
    if (currNode) nextNode = currNode.next
  }

  linklist.head.next = preNode

  return linklist
}

const linklist = new LinkedList<number>()
for (let i = 1; i < 4; i++) {
  linklist.append(i)
}
linklist.traverse()
reverseLinklist<number>(linklist)
linklist.traverse()
