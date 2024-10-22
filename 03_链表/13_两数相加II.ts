import ListNode from "./ListNode"

/**
 * 1. 反转之后和两数相加一样
 * 2. 借助栈
 */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const s1: number[] = []
  const s2: number[] = []
  let curr1 = l1
  let curr2 = l2
  while (curr1) {
    s1.push(curr1.val)
    curr1 = curr1.next
  }
  while (curr2) {
    s2.push(curr2.val)
    curr2 = curr2.next
  }

  let add = 0
  const virtualHead = new ListNode()
  while (s1.length || s2.length) {
    const val1 = s1.pop() ?? 0
    const val2 = s2.pop() ?? 0
    let res = val1 + val2 + add
    add = Math.floor(res / 10)
    res %= 10
    // 头插法
    const addNode = new ListNode(res)
    addNode.next = virtualHead.next
    virtualHead.next = addNode
  }

  // 首位进1时 创建新结点
  if (add === 1) {
    const newNode = new ListNode(add)
    newNode.next = virtualHead.next
    virtualHead.next = newNode
  }

  return virtualHead.next
}

export {}