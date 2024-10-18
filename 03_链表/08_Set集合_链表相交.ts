import ListNode from "./ListNode"

const getIntersectionNode = function (
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const set = new Set<ListNode>()
  let currA = headA
  let currB = headB

  while (currA) {
    set.add(currA)
    currA = currA.next
  }

  while (currB) {
    if (set.has(currB)) return currB
    currB = currB.next
  }

  return null
}
