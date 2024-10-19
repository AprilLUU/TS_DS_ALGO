import ListNode from "./ListNode"

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head) return head

  // 反转所用指针
  let prev: ListNode | null = null
  let curr: ListNode | null = head
  let next: ListNode | null = head?.next ?? null
  // 结点索引
  let index = 1
  // 局部反转之后 需要把局部反转的链表和原始链表接上
  // 保存三个结点
  // 1. start 局部反转区间之前的结点 即left - 1
  // 2. localHead 局部反转的开始结点 即left
  // 3. end 局部反转区间之后的结点 即right + 1
  let start: ListNode | null = null
  let end: ListNode | null = null
  let localHead: ListNode | null = null

  while (curr) {
    // (left, right]区间内的结点需要反转
    if (index > left && index <= right) {
      curr.next = prev
    }
    // 保存left - 1和left的结点
    if (index === left) {
      start = prev
      localHead = curr
    }
    // 保存right + 1的结点
    if (index === right) end = next
    if (index > right) break
    prev = curr
    // 反转之后 会丢失原来的next结点 因此需要用next来保存
    curr = next
    next = curr?.next ?? null
    index += 1
  }

  // 如果start存在，说明反转不是从头结点开始
  // 此时需要把反转之前的部分接上局部反转区间内的头结点
  if (start) start.next = prev
  // 把反转之前的链尾部分接上
  localHead!.next = end
  // 如果反转从头结点开始，需要返回反转之后的头结点，否则直接返回原来的头结点
  return left === 1 ? prev : head
}

function reverseBetweenV2(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head) return head

  let virtualHead = new ListNode()
  virtualHead.next = head
  // 反转所用指针
  let prev: ListNode | null = virtualHead
  let curr: ListNode | null = head
  let next: ListNode | null = head?.next ?? null
  // 结点索引
  let index = 1
  // 局部反转之后 需要把局部反转的链表和原始链表接上
  // 保存两个结点
  // 1. start 局部反转区间之前的结点 即left - 1
  // 2. end 局部反转区间之后的结点 即right + 1
  let start: ListNode | null = null
  let end: ListNode | null = null

  while (curr) {
    // (left, right]区间内的结点需要反转
    if (index > left && index <= right) {
      curr.next = prev
    }
    // 保存left - 1和left的结点
    if (index === left) start = prev
    // 保存right + 1的结点
    if (index === right) end = next
    if (index > right) break
    prev = curr
    // 反转之后 会丢失原来的next结点 因此需要用next来保存
    curr = next
    next = curr?.next ?? null
    index += 1
  }

  // 接上反转之前的链尾部分
  start!.next!.next = end
  // 接上反转之前的链首部分
  start!.next = prev
  
  return virtualHead.next
}

const head = new ListNode(3)
head.next = new ListNode(5)
reverseBetween(head, 1, 2)