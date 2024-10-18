import ListNode from "./ListNode"

function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  // fast肯定比slow先走到链尾 不可能存在slow === fast === null
  // 1. 若没有环 fast为null
  // 2. 有环 fast每次比slow多走一步 一定会追上slow slow和fast会在环中相遇
  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
    if (slow === fast) return true
  }

  return false
}
