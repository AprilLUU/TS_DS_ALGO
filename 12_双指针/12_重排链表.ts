import ListNode from "../03_链表/ListNode"

function reorderList(head: ListNode | null): void {
  let curr = head
  const arr: ListNode[] = []

  while (curr) {
    arr.push(curr)
    curr = curr.next
  }

  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    // 统一两种情况
    // 奇数个结点: left === right 到达中间结点 也就是链尾
    // 偶数个结点：left + 1 === right 到达中间结点 也就是链尾
    if (left === right || left + 1 === right) {
      arr[right].next = null
      break
    }
    arr[left++].next = arr[right]
    // 偶数个结点 left++ === right 此时到达重排之后的链尾
    // eg： 1 -> 2 -> 3 -> 4
    // if (left === right) {
    //   arr[right].next = null 
    //   break
    // }
    arr[right--].next = arr[left]
  }

  // 奇数个结点 left++ right--之后 left === right
  // 此时到达重排之后的链尾 不会进入循环
  // eg: 1 -> 2 -> 3 -> 4 -> 5
  // if (left === right) arr[right].next = null

  // while (left < right) {
  //   arr[left++].next = arr[right]
  //   arr[right--].next = arr[left]
  // }
  // arr[left].next = null
}

function reorderListV2(head: ListNode | null): void {
  if (!head) return

  const middleNode = (head: ListNode): ListNode => {
    let slow: ListNode | null = head
    let fast: ListNode | null = head
    
    // 奇数结点 fast.next === null时 slow走到中间结点
    // 偶数结点 fast.next.next === null时 slow走到中间的左边结点
    while (fast.next && fast.next.next) {
      slow = slow!.next
      fast = fast.next.next
    }

    return slow!
  }

  const reverseList = (head: ListNode): ListNode => {
    let prev: ListNode | null = null
    let curr: ListNode | null = head

    while (curr) {
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }

    return prev!
  }

  const mergeList = (head1: ListNode, head2: ListNode) => {
    let curr1: ListNode | null = head1
    let curr2: ListNode | null = head2
  
    while (curr1 && curr2) {
      const next1 = curr1.next
      const next2 = curr2.next
      curr1.next = curr2
      curr1 = next1
      curr2.next = next1
      curr2 = next2
    }
  }

  // 找到中点位置
  const mid = middleNode(head)
  // 反转中点之后的部分
  // 奇数结点
  // 1 -> 2 -> 3 -> null 5 -> 4 -> null
  // 1 -> 5 -> 2 -> 4 -> 3 -> null
  // 偶数结点
  // 1 -> 2 -> null 4 -> 3 -> null
  // 1 -> 4 -> 2 -> 3 -> null
  const tailNode = reverseList(mid.next!)
  // 断开两个链表之间的连接
  mid.next = null
  // 合并两个链表
  mergeList(head, tailNode)
}
