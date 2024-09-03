import ListNode from "./ListNode"

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const virtualHead = new ListNode()
  virtualHead.next = head
  let prev = virtualHead
  let current = head
  
  while (current) {
    if (current.val === val) {
      prev.next = current.next
    } else {
      prev = current
    }
    
    current = current.next
  }

  return virtualHead.next
}
