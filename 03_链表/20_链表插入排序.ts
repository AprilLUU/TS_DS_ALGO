import ListNode from "./ListNode"

function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null
  const virtualHead = new ListNode()
  virtualHead.next = head
  let curr: ListNode | null = head.next

  while (curr) {
  }

  return virtualHead.next
}

const head = new ListNode(4)
head.next = new ListNode(2)
head.next.next = new ListNode(1)
head.next.next = new ListNode(3)

console.log(sortList(head))
