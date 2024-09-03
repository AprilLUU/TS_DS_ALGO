import ListNode from "../03_链表/ListNode"

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null
  let slow: ListNode | null = head
  let fast: ListNode | null = head

  do {
    fast = fast?.next ? fast.next.next : null
    slow = slow!.next
  } while (slow !== fast)

  if (!fast) return null

  let index1 = head
  let index2 = slow!

  while (index1 !== index2) {
    index1 = index1.next!
    index2 = index2.next!
  }

  return index1
}

const head = new ListNode(3)
head.next = new ListNode(2)
head.next.next = new ListNode(1)
head.next.next.next = head.next
const head1 = new ListNode(1)
console.log(detectCycle(head1))