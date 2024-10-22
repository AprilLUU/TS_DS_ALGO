import ListNode from "./ListNode"

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return head
  let odd: ListNode | null = head
  let even: ListNode | null = head.next
  // 保存偶数链表的头结点
  const evenHead: ListNode | null = even
  // 保存奇数链表的尾结点
  let oddEnd: ListNode = odd

  while (odd && even) {
    // 连接奇数结点
    odd.next = even.next
    odd = even.next
    // 当链表长度为奇数时 odd指向尾结点
    // 当链表长度为偶数时 odd指向null
    // 不为null才保存
    if (odd) oddEnd = odd
    // 连接偶数结点
    even.next = odd?.next ?? null
    even = odd?.next ?? null
  }

  // 连接偶数链表
  oddEnd!.next = evenHead

  return head
}
