import ListNode from "../03_链表/ListNode"

function trainingPlan(head: ListNode | null, cnt: number): ListNode | null {
  if (!head) return head

  let slow = head
  let fast = head.next
  let distance = 1

  while (distance < cnt) {
    distance++
    fast = fast?.next ?? null
  }

  while (fast) {
    fast = fast.next
    slow = slow.next!
  }

  return slow
}
