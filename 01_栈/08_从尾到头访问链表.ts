import ListNode from "../03_链表/ListNode"

function reverseBookList(head: ListNode | null): number[] {
  const stack: number[] = []
  const res: number[] = []

  let curr = head
  while (curr) {
    stack.push(curr.val)
    curr = curr.next
  }

  while (stack.length) {
    res.push(stack.pop()!)
  }

  return res 
}

function reverseBookListV2(head: ListNode | null): number[] {
  const stack: number[] = []

  let curr = head
  while (curr) {
    stack.push(curr.val)
    curr = curr.next
  }

  let left = 0
  let right = stack.length - 1
  while (left < right) {
    const temp = stack[left]
    stack[left++] = stack[right]
    stack[right--] = temp
  }
  
  return stack 
}
