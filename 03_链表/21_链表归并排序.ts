import ListNode from "./ListNode"

function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null

  const merge = (
    list1: ListNode | null,
    list2: ListNode | null
  ): ListNode | null => {
    const mergeList = new ListNode()
    let curr = mergeList
    let curr1 = list1
    let curr2 = list2

    while (curr1 && curr2) {
      if (curr1.val <= curr2.val) {
        curr.next = curr1
        curr1 = curr1.next
      } else {
        curr.next = curr2
        curr2 = curr2.next
      }
      curr = curr.next
    }

    if (curr1) curr.next = curr1
    if (curr2) curr.next = curr2

    return mergeList.next
  }

  const middleNode = (head: ListNode | null): ListNode | null => {
    if (!head) return head
    let slow = head
    let fast = head

    while (fast.next && fast.next.next) {
      slow = slow.next!
      fast = fast.next.next
    }

    return slow!
  }

  // 4 -> 2 -> 1 -> 3
  // leftHead: 4 -> 2
  // leftList: 4 rightList: 2 
  // leftList: 2 -> 4
  // rightHead: 1 -> 3
  // leftList: 1 rightList: 3
  // rightList: 1 -> 3
  // 1 -> 2 -> 3 -> 4
  const mergeSort = (head: ListNode | null): ListNode | null => {
    if (!head || !head.next) return head
    const middle = middleNode(head)!
    const leftHead = head
    const rightHead = middle.next
    middle.next = null
    const leftList = mergeSort(leftHead)
    const rightList = mergeSort(rightHead)
    return merge(leftList, rightList)
  }

  return mergeSort(head)
}

const head = new ListNode(4)
head.next = new ListNode(2)
head.next.next = new ListNode(1)
head.next.next.next = new ListNode(3)
console.log(sortList(head))