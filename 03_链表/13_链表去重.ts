import ListNode from "./ListNode"

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head
  const set = new Set<number>()
  set.add(head.val)
  let prev = head
  let curr = head.next

  while (curr) {
    if (set.has(curr.val)) {
      // 重复之后断链 并重新检查新的位置
      prev.next = curr.next
      curr = curr.next
      continue
    } else {
      set.add(curr.val)
    }
    prev = curr
    curr = curr.next
  }

  return head
}

function deleteDuplicateV2(head: ListNode | null): ListNode | null {
  let prev = head
  let curr = head?.next ?? null

  while (curr) {
    if (curr.val === prev!.val) {
      prev!.next = curr.next
      curr = curr.next
      continue
    }
    prev = curr
    curr = curr.next
  }

  return head
}

function deleteDuplicateV3(head: ListNode | null): ListNode | null {
  if (!head) return head
  let curr = head

  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }

  return head
}


export {}
