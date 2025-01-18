class DoubleLinkNode {
  value: number | undefined
  prev?: DoubleLinkNode | null
  next?: DoubleLinkNode | null

  constructor(
    value?: number,
    prev?: DoubleLinkNode | null,
    next?: DoubleLinkNode | null
  ) {
    this.value = value
    this.prev = prev ? prev : null
    this.next = next ? next : null
  }
}

class LRUCache {
  capacity: number
  length: number
  // 双向链表 头部为最近使用 尾部为最久使用
  // 维护首尾两个指针 达到在首尾操作为O(1)
  head: DoubleLinkNode
  tail: DoubleLinkNode
  // 维护两个哈希表 分别为 key -> value value -> key
  // 以便在O(1)时间内查找到对应的key
  map: Map<number, DoubleLinkNode>
  keyMap: Map<DoubleLinkNode, number>

  constructor(capacity: number) {
    this.capacity = capacity
    this.length = 0
    this.map = new Map()
    this.keyMap = new Map()
    this.head = new DoubleLinkNode()
    this.tail = new DoubleLinkNode()
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  moveToHead(node: DoubleLinkNode, isNew: boolean = false) {
    // 是否为新创建的节点
    if (!isNew) {
      // 先断链
      node.next!.prev = node.prev
      node.prev!.next = node.next
    }
    // 移动到头部
    node.next = this.head.next
    this.head.next!.prev = node
    this.head.next = node
    node.prev = this.head
  }

  removeTailNode() {
    // 移除节点
    const node = this.tail.prev!
    node.prev!.next = this.tail
    this.tail.prev = node.prev
    // 删除哈希表对应项
    const key = this.keyMap.get(node)!
    this.keyMap.delete(node)
    this.map.delete(key)
  }

  get(key: number): number {
    const node = this.map.get(key)
    if (!node) return -1
    this.moveToHead(node)
    return node.value!
  }

  put(key: number, value: number): void {
    const node = this.map.get(key)
    if (node) {
      node.value = value
      this.moveToHead(node)
    } else {
      const newNode = new DoubleLinkNode(value)
      this.map.set(key, newNode)
      this.keyMap.set(newNode, key)
      this.moveToHead(newNode, true)
      this.length++
      if (this.length > this.capacity) {
        this.removeTailNode()
        this.length--
      }
    }
  }
}

const lruCache = new LRUCache(2)
lruCache.put(1, 0)
lruCache.put(2, 2)
lruCache.get(1)
lruCache.put(3, 3)
lruCache.get(2)
lruCache.put(4, 4)
lruCache.get(1)
lruCache.get(3)
lruCache.get(4)