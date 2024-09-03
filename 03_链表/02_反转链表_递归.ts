import { LinkNode } from "../types/Node"
import LinkedList from "./01_链表定义"

function reverseLinklist<T>(current: LinkNode<T>): LinkNode<T> {
  if (!current.next) return current

  /**
   * node final node
   * head current node
   */
  const node = reverseLinklist<T>(current.next)
  current.next.next = current
  current.next = null
  return node
}

const linklist = new LinkedList<number>()
for (let i = 1; i < 4; i++) {
  linklist.append(i)
}
linklist.traverse()
const firstNode = reverseLinklist<number>(linklist.head.next!)
linklist.head.next = firstNode
linklist.traverse()

