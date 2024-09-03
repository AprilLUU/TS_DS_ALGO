import ListNode from "./ListNode"

const getIntersectionNode = function(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) return null

  let lenA = 0
  let lenB = 0
  let currA: ListNode | null = headA
  let currB: ListNode | null = headB

  // 求A和B长度
  while (currA) {
    lenA++
    currA = currA.next
  }

  while (currB) {
    lenB++
    currB = currB.next
  }

  // 如果有相交部分肯定位于较长链表的尾部
  if (lenA < lenB) {
    const temp = lenA
    lenA = lenB
    lenB = temp
    currA = headB
    currB = headA
  } else {
    currA = headA
    currB = headB
  }

  let gap = lenA - lenB

  // 把指针移动到和短链表平齐的部分
  while (gap > 0) {
    currA = currA!.next
    gap--
  }

  // 扫描两个链表，是否有相交结点
  // 此时两个链表长度相等，如果有相交结点，肯定处于同一位置
  while (currA) {
    if (currA === currB) return currA
    currA = currA.next
    currB = currB!.next
  }

  return null
}

const headA = new ListNode(2)
const headB = new ListNode(1)
headA.next = new ListNode(4)
headA.next.next = new ListNode(6)
headB.next = new ListNode(5)
console.log(getIntersectionNode(headA, headB))