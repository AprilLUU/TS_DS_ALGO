import ListNode from "./ListNode"

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let prev: ListNode | null = null
  let current = head
  
  while (current) {
    // 删除节点时保存前一个节点的指针不需要移动
    if (current.val === val) {
      // 删除头结点时 需要重新保存头指针
      if (prev) prev.next = current.next
      else head = current.next
    } else {
      prev = current
    }
    
    current = current.next
  }

  return head
}
