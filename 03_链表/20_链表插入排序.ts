import ListNode from "./ListNode"

function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null
  const virtualHead = new ListNode(Number.MIN_SAFE_INTEGER)
  virtualHead.next = head
  let tail: ListNode | null = head
  let curr: ListNode | null = head.next

  const insertSort = (vHead: ListNode, node: ListNode) => {
    // 使用虚拟头结点来统一插入表头的情况
    let pre = vHead
    let curr = vHead.next

    while (curr) {
      // 插入到中间结点或者表头
      if (curr.val > node.val) {
        pre.next = node
        node.next = curr
        break
      }
      pre = curr
      curr = curr.next
    }
    // 插入到链尾
    if (!curr) {
      pre.next = node
      return node
    }
    // 返回插入到的链尾
    while (curr.next) {
      curr = curr.next
    }

    return curr
  }

  while (curr) {
    const next = curr.next
    // 把已排好的有序链表当成一个新链表
    tail.next = null
    tail = insertSort(virtualHead, curr)
    curr = next
  }

  return virtualHead.next
}

const head = new ListNode(4)
head.next = new ListNode(2)
head.next.next = new ListNode(1)
head.next.next.next = new ListNode(3)

console.log(sortList(head))
