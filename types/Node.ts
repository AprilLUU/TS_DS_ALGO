class Node<T> {
  value: T | null
  constructor(value: T | null) {
    this.value = value
  }
}

class LinkNode<T> extends Node<T> {
  next: LinkNode<T> | null

  constructor(value: T | null) {
    super(value)
    this.next = null
  }
}

class DoubleLinkNode<T> extends LinkNode<T> {
  prev: DoubleLinkNode<T> | null
  next: DoubleLinkNode<T> | null

  constructor(value: T | null) {
    super(value)
    this.next = null
    this.prev = null
  }
}

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  parent: TreeNode<T> | null = null

  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this)
  }

  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this)
  }
}

class AVLTreeNode<T> extends TreeNode<T> {
  left: AVLTreeNode<T> | null = null
  right: AVLTreeNode<T> | null = null
  parent: AVLTreeNode<T> | null = null

  private get leftHeight(): number {
    return this.left ? this.left.height : 0
  }

  private get rightHeight(): number {
    return this.right ? this.right.height : 0
  }

  private get height(): number {
    return Math.max(this.leftHeight, this.rightHeight) + 1
  }

  private get balanceFactor(): number {
    return this.leftHeight - this.rightHeight
  }

  get isBalanced(): boolean {
    return Math.abs(this.balanceFactor) <= 1 
  }

  get higherChild(): AVLTreeNode<T> | null {
    if (this.leftHeight !== this.rightHeight) {
      return this.leftHeight > this.rightHeight ? this.left : this.right
    } else {
      return this.isLeft ? this.left : this.right
    }
  }
  // LL 在节点的左孩子的左子树上插入节点导致不平衡
  rightRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight
    // 1. pivot为不平衡节点的左孩子 也是旋转之后的子树根节点
    const pivot = this.left!
    pivot.parent = this.parent
    // 2. pivot.right 把右子树挂载到不平衡节点的左子树
    this.left = pivot.right
    if (pivot.right) pivot.right.parent = this
    // 3. 旋转 把pivot进行右选择
    pivot.right = this
    this.parent = pivot
    // 4. 挂载pivot
    if (!pivot.parent) return pivot
    else if (isLeft) pivot.parent.left = pivot
    else if (isRight) pivot.parent.right = pivot

    return pivot
  }
  // RR 在节点的右孩子的右子树上插入节点导致不平衡
  leftRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight

    const pivot = this.right!
    pivot.parent = this.parent

    this.right = pivot.left
    if (pivot.left) pivot.left.parent = this

    pivot.left = this
    this.parent = pivot

    if (!pivot.parent) return pivot
    else if (isLeft) pivot.parent.left = pivot
    else if (isRight) pivot.parent.right = pivot

    return pivot
  }
}

export { Node, LinkNode, DoubleLinkNode, TreeNode, AVLTreeNode }
