import ListNode from "./ListNode"

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null

  const visited = new Set<ListNode>()
  let curr: ListNode | null = head

  while (curr) {
    if (visited.has(curr)) return curr
    visited.add(curr)
    curr = curr.next
  }

  return null
}
