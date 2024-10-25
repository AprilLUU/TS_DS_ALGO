import ListNode from "../03_链表/ListNode"

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false
  let curr: ListNode | null = head
  const arr: number[] = []

  while (curr) {
    arr.push(curr.val)
    curr = curr.next
  }

  let left = 0
  let right = arr.length - 1

  while (left < right) {
    if (arr[left++] !== arr[right--]) return false
  }

  return true
}

function isPalindromeV2(head: ListNode | null): boolean {
  if (!head) return false

  const middleNode = (head: ListNode): ListNode => {
    let slow = head
    let fast = head

    while (fast.next && fast.next.next) {
      slow = slow.next!
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

  // 找到中结点
  const mid = middleNode(head)
  // 反转后半部分链表
  const tail = reverseList(mid.next!)
  mid.next = null

  let curr1: ListNode | null = head
  let curr2: ListNode | null = tail

  // 对比两个链表是否相等
  // 偶数：前后两部分长度相等
  // 奇数：前后两部分长度相差1
  while (curr1 && curr2) {
    if (curr1.val !== curr2.val) {
      // 恢复原来链表
      mid.next = reverseList(tail)
      return false
    }
    curr1 = curr1.next
    curr2 = curr2.next
  }

  // 恢复原来链表
  mid.next = reverseList(tail)
  return true
}

export {}
