import ListNode from "./ListNode"

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const k = lists.length
  if (k === 0) return null
  const kIndex: (ListNode | null)[] = new Array(k)
  for (let i = 0; i < k; i++) kIndex[i] = ListNode[i]

}
