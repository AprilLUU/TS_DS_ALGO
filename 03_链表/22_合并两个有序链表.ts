import ListNode from "./ListNode"

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
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
