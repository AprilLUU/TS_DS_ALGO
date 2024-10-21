import ListNode from "./ListNode"

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const virtualHead = new ListNode()
  virtualHead.next = head
  let prev2: ListNode | null = virtualHead
  let prev = head
  let curr = head?.next ?? null
  let isRepeat = false

  while (curr) {
    // 删除重复的结点
    if (curr.val === prev!.val) {
      isRepeat = true
      prev!.next = curr.next
      curr = curr.next
      continue
    }
    // 删除重复开始的结点
    if (isRepeat) {
      prev2!.next = curr
      // 删除之后需要重置指针和重复部分
      prev = prev2
      isRepeat = false
    }
    // 移动指针
    prev2 = prev
    prev = curr
    curr = curr.next
  }
  // 链尾部分重复时，需要删除重复开始的结点 
  // eg: 1 -> 2 -> 3 -> 4 -> 4
  if (isRepeat) prev2!.next = curr

  return virtualHead.next
}

export {}
