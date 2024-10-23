import ListNode from "./ListNode"

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null
  let len = 0
  let curr: ListNode | null = head

  while (curr) {
    len++
    curr = curr.next
  }

  const target = Math.floor(len / 2)
  let index = 0
  curr = head

  while (curr) {
    if (index === target) return curr
    index++
    curr = curr.next
  }

  return curr
}
