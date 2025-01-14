import ListNode from "./ListNode"

const getIntersectionNode = function (
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) return null

  let currA: ListNode | null = headA
  let currB: ListNode | null = headB

  // 相交部分长度为k listA长度为n listB长度为m
  // 不相交的部分为n - k 以及 m - k
  // 走到相交结点 (currA -> n + m - k) (currB -> m + n - k)
  // 不相交时 遍历完两个链表 同时走到null 不会死循环
  while (currA !== currB) {
    currA = currA === null ? headB : currA.next
    currB = currB === null ? headA : currB.next
  }

  return currA
}
