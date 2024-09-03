import ListNode from "./ListNode"

function swapPairs(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  // 链表为空或只有一个节点
  if (!head || !head.next) return head
  let curr: ListNode | null = head
  let next: ListNode | null = head.next

  while (next) {
    if (prev) prev.next = next
    else head = next

    curr!.next = next.next
    next.next = curr

    prev = curr
    curr = curr!.next
    if (curr) next = curr.next
    else next = null
  }

  return head
}
