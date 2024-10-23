import ListNode from "../03_链表/ListNode"

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head
  let fast = head?.next ?? null

  // 快指针每次比慢指针多走一步 当走到链尾时 此时慢指针位于中间结点
  while (fast) {
    slow = slow!.next
    fast = fast.next?.next ?? null
  }

  return slow
}

export {}
