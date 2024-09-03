import ListNode from "./ListNode"

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const virtualHead = new ListNode()
  virtualHead.next = head

  let slow: ListNode = virtualHead
  let fast = virtualHead
  let step = 0

  // slow 和 fast 之间保持n的距离
  while (step < n) {
    fast = fast.next!
    step++
  }
  // 当走到链尾时，此时slow的下一个结点即为删除结点
  while (fast.next) {
    slow = slow.next!
    fast = fast.next
  }

  slow.next = slow.next!.next

  // 当删除的结点是原来的头结点时，需要返回实际的头结点
  return virtualHead.next
}
