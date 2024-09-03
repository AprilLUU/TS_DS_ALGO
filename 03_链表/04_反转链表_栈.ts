import ArrayStack from "../01_栈/01_栈定义"
import { LinkNode } from "../types/Node"
import LinkedList from "./01_链表定义"

// 还可以使用带头结点的头插法
/**
 * 1. 创建虚拟头节点
 * 2. 迭代链表, 把一个元素使用头插法插进虚拟头结点, 完成链表的反转
 * 3. 返回实际头节点
 */
function reverseLinklist<T>(linklist: LinkedList<T>): LinkedList<T> {
  let current = linklist.head.next
  const stack = new ArrayStack<LinkNode<T>>()

  while (current) {
    stack.push(current)
    current = current.next
  }

  current = stack.pop()!
  linklist.head.next = current

  while (!stack.isEmpty()) {
    const next = stack.pop()!
    current.next = next
    current = next
  }

  current.next = null

  return linklist
}

const linklist = new LinkedList<number>()
for (let i = 1; i < 4; i++) {
  linklist.append(i)
}
linklist.traverse()
reverseLinklist<number>(linklist)
linklist.traverse()
