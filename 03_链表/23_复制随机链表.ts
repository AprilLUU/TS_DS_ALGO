class _Node {
  val: number
  next: _Node | null
  random: _Node | null

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}

// 解决不了节点值重复问题
function copyRandomList(head: _Node | null): _Node | null {
  if (!head) return null

  const newHead = new _Node(head.val)
  let curr: _Node | null = head.next
  let newCurr: _Node | null = newHead
  const map = new Map<_Node, _Node>()
  map.set(head, newHead)

  // 先复制next指针并缓存
  while (curr) {
    const newNode = new _Node(curr.val)
    newCurr!.next = newNode
    map.set(curr, newNode)
    curr = curr.next
    newCurr = newCurr.next
  }

  curr = head
  newCurr = newHead
  // 在复制random指针
  while (curr) {
    if (curr.random) {
      const cachedNode = map.get(curr.random)!
      newCurr!.random = cachedNode
    }
    curr = curr.next
    newCurr = newCurr!.next
  }

  return newHead
}

function copyRandomListV1(head: _Node | null): _Node | null {
  const map = new Map<_Node, _Node>()

  const copy = (node: _Node | null) => {
    if (!node) return null
  
    if (!map.has(node)) {
      const newNode = new _Node(node.val)
      // 保存节点对应的复制节点
      map.set(node, newNode)
      // 先复制整个链表 保存所有新节点
      newNode.next = copy(node.next)
      // 复制random指针 此时所有节点都已在map缓存
      newNode.random = copy(node.random)
    }

    return map.get(node)!
  }

  return copy(head)
}

const head = new _Node(3)
head.next = new _Node(3)
head.next.next = new _Node(3)
head.next.random = head
copyRandomList(head)