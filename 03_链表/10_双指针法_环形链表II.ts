import ListNode from "./ListNode"

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null
  let slow: ListNode | null = head
  let fast: ListNode | null = head

  // 设头结点到环入口的距离为x 
  // slow和fast指针相遇的结点距离环入口的距离为y
  // 从y走到环入口的距离为z
  // 此时 2 * (x + y) = (x + y) + n(y + z)
  // 即x + y = n(y + z) -> x = (n - 1)(y + z) + z
  // 此时index1从头结点出发 index2从y出发 两者相遇的位置为环入口
  // 1. n = 1 x = z
  // 2. n > 1 相当于在环内转了n - 1圈 相遇位置仍为环入口
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