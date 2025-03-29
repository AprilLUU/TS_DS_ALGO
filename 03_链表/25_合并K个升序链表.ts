import ListNode from "./ListNode"

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null) => {
    if (!list1 && !list2) return null
    if (!list1) return list2
    if (!list2) return list1
    const mergeList = new ListNode(-1)
    let curr = mergeList
    let curr1: ListNode | null = list1
    let curr2: ListNode | null = list2

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

  let mergeList: ListNode | null = null
  for (let i = 0; i < lists.length; i++) {
    mergeList = mergeTwoLists(mergeList, lists[i])
  }

  return mergeList
}

const list1 = new ListNode(1)
list1.next = new ListNode(4)
list1.next.next = new ListNode(5)

const list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

const list3 = new ListNode(2)
list3.next = new ListNode(6)

mergeKLists([list1, list2, list3])