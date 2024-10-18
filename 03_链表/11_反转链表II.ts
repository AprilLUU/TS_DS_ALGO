import ListNode from "./ListNode"

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let prev: ListNode | null = null
  let curr: ListNode | null = head
  let next: ListNode | null = head?.next ?? null
  let index = 1

  while (curr) {
    if (index >= left && index <= right) {
      curr.next = next?.next ?? null
      if (prev) prev.next = next
      if (next) next.next = curr
    }
    prev = curr
    curr = curr.next
    next = curr?.next ?? null
    index += 1
  }

  return prev
}