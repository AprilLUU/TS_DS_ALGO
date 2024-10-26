import ListNode from "./ListNode"

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null
  if (k === 1) return head

  const reverseList = (head: ListNode) => {
    let prev: ListNode | null = null
    let curr: ListNode | null = head

    while (curr) {
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }

    return prev
  }

  let curr: ListNode | null = head
  let index = 1
  const heads: ListNode[] = []
  const tails: ListNode[] = []

  while (curr) {
    // 到达第nk个结点 收集尾结点
    if (index % k === 0) tails.push(curr)
    // 到达第nk + 1个结点 收集头结点
    if (index % k === 1) heads.push(curr)
    curr = curr.next
    index++
  }

  // 若链表长度与k成正比 tails.length === heads.length
  // 不成正比 tails.length + 1 === heads.length heads[heads.length - 1]为剩余部分的头结点
  for (let i = 0; i < tails.length; i++) {
    tails[i].next = null
    reverseList(heads[i])
    // 下一个链表的尾结点为反转后的头结点 若存在则接上
    if (tails[i + 1]) heads[i].next = tails[i + 1]
    // 不存在且不成正比 接上链表剩余部分
    else if (heads[i + 1]) heads[i].next = heads[i + 1]
    // 成正比 没有剩余 到达链尾
    else heads[i].next = null
  }

  // 返回反转后的头结点
  return tails[0]
}

function reverseKGroupV2(head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 1) return head

  const reverseList = (head: ListNode, tail: ListNode) => {
    let prev: ListNode | null = null
    let curr: ListNode | null = head
    const end = tail.next

    while (curr && curr !== end) {
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
  }

  let virtualHead = new ListNode()
  virtualHead.next = head
  let pre = virtualHead
  let curr: ListNode | null = head

  while (curr) {
    let tail: ListNode | null = curr

    for (let i = 1; i < k; i++) {
      tail = tail.next
      // 到达链尾 且剩余部分小于k 接上前面部分之后直接返回
      if (!tail) {
        pre.next = curr
        return virtualHead.next
      }
    }

    // 保存下一个开始结点
    const next = tail.next
    // 反转k个子结点
    reverseList(curr, tail)
    // 接上之前的链尾
    pre.next = tail
    // 保存当前链尾
    pre = curr
    // 进行下一组检查
    curr = next
  }

  return virtualHead.next
}
