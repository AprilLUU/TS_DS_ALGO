import { btPrint } from "hy-algokit"
import { TreeNode } from "../types/Node"
import ArrayQueue from "../02_队列/01_队列定义"

class BSTree<T> {
  protected root: TreeNode<T> | null = null

  protected createNode(value: T): TreeNode<T> {
    return new TreeNode<T>(value)
  }

  protected checkBalance(node: TreeNode<T>, isAdd: boolean = true) {}
  // 每次递归都当成子树当成新的树
  private insertNode(root: TreeNode<T> | null, preRoot: TreeNode<T> | null, newNode: TreeNode<T>): TreeNode<T> {
    if (!root) {
      // 找到插入位置
      newNode.parent = preRoot
      return newNode
    } else {
      if (newNode.value! > root.value!) {
        root.right = this.insertNode(root.right, root, newNode)
      } else {
        root.left = this.insertNode(root.left, root, newNode)   
      }
      // 返回根节点
      return root
    }
  }

  insert(value: T) {
    const newNode = this.createNode(value)
    this.root = this.insertNode(this.root, null, newNode)
    this.checkBalance(newNode)
  }

  private preOrder(root: TreeNode<T> | null) {
    if (root) {
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  preOrderTraverse() {
    this.preOrder(this.root)
  }

  /**
   * 先中后三种遍历方式的非递归实现
   * 先统一走到最左 栈的作用是保存走的过程的结点 便于访问右子树
   * 先序：走到最左的过程中访问结点 这个过程相当于访问了根和左子树 之后弹栈 访问这些节点的右子树
   * 中序：走到最左，之后弹栈，访问节点，这个过程相当于访问了左子树和根，再访问右子树
   * 后序：走到最左，相当于先访问左子树，需要记录上一次访问结点是否为右子树上的结点
   * 若右子树为空或右子树已访问过 说明当前结点的左右子树均访问完毕，此时访问根节点并且弹栈
   * 否则 访问右子树
   */

  preOrderNoRec() {
    const stack: TreeNode<T>[] = []
    let current = this.root

    while (current || stack.length !== 0) {
      // 先走到最左
      while (current) {
        console.log(current.value)
        stack.push(current)
        current = current.left
      }

      current = stack.pop()!
      current = current.right
    }
  }

  inOrderTraverse() {
    const stack: TreeNode<T>[] = []
    let current = this.root

    // 栈不为空说明有结点未访问
    // current判断第一次可以进入循环
    while (current || stack.length !== 0) {
      // 找到最先访问的左子树结点
      while (current) {
        stack.push(current)
        current = current.left
      }
      // 弹出当前访问的结点
      current = stack.pop()!
      console.log(current.value)
      // 访问右子树
      current = current.right
    }
  }

  postOrderTraverse() {
    const stack: TreeNode<T>[] = []
    let current = this.root
    let lastVisitNode: TreeNode<T> | null = null

    while (current || stack.length !== 0) {
      // 先往左走找不到不为空的节点
      while (current) {
        stack.push(current)
        current = current.left
      }

      current = stack[stack.length - 1]
      // 记录上一次访问的结点是否为当前结点的右子树结点 若已经访问过 则证明右子树已经访问过
      // 右子树为空或者右子树已经访问过 访问当前节点并且弹栈
      if (!current.right || current.right === lastVisitNode) {
        console.log(current.value)
        lastVisitNode = current
        stack.pop()
        current = null
      } else {
        // 访问右子树
        current = current.right
      }
    }
  }

  leverOrderTraverse() {
    const queue = new ArrayQueue<TreeNode<T>>()
    if (!this.root) return
    queue.enqueue(this.root!)

    while (!queue.isEmpty()) {
      const node = queue.dequeue()!
      console.log(node.value)
      if (node.left) queue.enqueue(node.left)
      if (node.right) queue.enqueue(node.right)
    }
  }

  private getBestValueNode(root: TreeNode<T> | null, isMax = true): TreeNode<T> | null {
    let current = root
    if (!current) return null
    if (isMax) {
      while (current.right) {
        current = current.right
      }
    } else {
      while (current.left) {
        current = current.left
      }
    }
    return current
  }

  getMaxValue(): T | undefined{
    return this.getBestValueNode(this.root)?.value ?? undefined
  }

  getMinValueNode(): T | undefined {
    return this.getBestValueNode(this.root, false)?.value ?? undefined
  }

  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    if (!current) return null
    while (current) {
      if (current.value === value) return current
      if (current.value! < value) current = current.right
      if (current!.value! > value) current = current!.left
    }
    return null
  }

  search(value: T): boolean {
    return !!this.searchNode(value)
  }

  private removeNode(delNode: TreeNode<T>) {
    let replaceNode: TreeNode<T> | null = null

    if (!delNode.left && !delNode.right) replaceNode = null
    else if (delNode.left) replaceNode = delNode.left
    else if (delNode.right) replaceNode = delNode.right

    if (delNode === this.root) this.root = replaceNode
    else if (delNode.isLeft) delNode.parent!.left = replaceNode
    else if (delNode.isRight) delNode.parent!.right = replaceNode
    // 修改父结点指针
    if (replaceNode) replaceNode.parent = delNode.parent
  }

  remove(value: T): boolean {
    let current = this.searchNode(value)
    if (!current) return false

    if (current.left && current.right) {
      // 删除结点有左右子树
      const successor = this.getBestValueNode(current.right, false)!
      // 找到后继结点替代删除结点(换一下值,不需要进行复杂的指针操作)
      current.value = successor.value
      // 删除后继结点即可 后继结点肯定为叶子结点或只有右孩子的结点
      current = successor
    }
    // 删除叶子节点或只有一个孩子的节点
    this.removeNode(current)
    // AVL树中检查是否平衡
    this.checkBalance(current, false)
    return true
  }

  print() {
    btPrint(this.root)
  }
}

// const bst = new BSTree<number>()
// bst.insert(10)
// bst.insert(8)
// bst.insert(7)
// bst.insert(9)
// bst.insert(12)
// bst.insert(11)
// bst.insert(13)
// bst.print()
// bst.preOrderTraverse()
// bst.preOrderNoRec()
// bst.inOrderTraverse()
// bst.postOrderTraverse()
// bst.leverOrderTraverse()
// console.log(bst.getMaxValue(), bst.getMinValue(), bst.search(10), bst.search(8))
// bst.remove(11)
// bst.print()
// bst.remove(12)
// bst.print()
// bst.remove(10)
// bst.print()

export default BSTree