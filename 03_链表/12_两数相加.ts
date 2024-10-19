import ListNode from "./ListNode"

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let curr1 = l1
  let len1 = 0
  let curr2 = l2
  let len2 = 0

  while (curr1) {
    len1++
    curr1 = curr1.next
  }

  while (curr2) {
    len2++
    curr2 = curr2.next
  }

  // 结果统计需要在较长的链表上统计
  let curr = len1 > len2 ? l1 : l2
  curr1 = l1
  curr2 = l2
  // 超过10下一位加1
  let add = 0

  while (curr) {
    // 取值 若无值 则为0
    const val1 = curr1?.val ?? 0
    const val2 = curr2?.val ?? 0
    const res = val1 + val2 + add
    // 逢10进1
    if (res >= 10) add = 1
    else add = 0
    curr.val = res % 10
    // 已经到达链尾 但已经进1 创建新节点保存值
    if (!curr.next && add === 1) {
      curr.next = new ListNode(add)
      break
    }

    curr1 = curr1?.next ?? null
    curr2 = curr2?.next ?? null
    curr = curr.next
  }

  // 返回较长的链表
  return len1 > len2 ? l1 : l2
}
