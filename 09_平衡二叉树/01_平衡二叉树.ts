import { AVLTreeNode, TreeNode } from "../types/Node"
import BSTree from "../05_二叉搜索树/01_二叉搜索树"

class AVLTree<T> extends BSTree<T> {
  protected createNode(value: T): TreeNode<T> {
    return new AVLTreeNode<T>(value)
  }

  protected checkBalance(node: AVLTreeNode<T>, isAdd: boolean = true) {
    let parent: AVLTreeNode<T> | null = node.parent

    while (parent) {
      if (parent.isBalanced) {
        this.rebanlance(parent)
        // 添加只需要调整最小不平衡子树
        // 删除影响了树的高度 需要回溯所有祖先节点来调整
        if (isAdd) break
      }
      parent = parent.parent
    }
  }
  /**
   * 
   * @param root 最小不平衡子树的根节点
   * @var pivot 基准节点 根节点的左右孩子
   * @var current 基准节点的左右孩子 在current节点子树中插入节点导致不平衡
   */
  private rebanlance(root: AVLTreeNode<T>) {
    const pivot = root.higherChild!
    const current = pivot.higherChild!
    let resultNode: AVLTreeNode<T> | null = null

    if (pivot.isLeft) {
      if (current.isLeft) {
        // LL
        resultNode = root.rightRotation()
      } else if (current.isRight) {
        // LR
        pivot.leftRotation()
        resultNode = root.rightRotation()
      }
    } else if (pivot.isRight) {
      if (current.isLeft) {
        // RL
        pivot.rightRotation()
        resultNode = root.leftRotation()
      } else if (current.isRight) {
        // RR
        resultNode = root.leftRotation()
      }
    }

    // 此时调整的节点是否为整棵树的根节点
    if (!resultNode!.parent) {
      this.root = resultNode
    }
  }
}

const avlTree = new AVLTree<number>()

const nums: number[] = []

for (let i = 0; i < 20; i++) {
  const num = Math.floor(Math.random() * 200 + 1)
  nums.push(num)
  avlTree.insert(num)
}
avlTree.print()

for (let i = 0; i < 8; i++) {
  avlTree.remove(nums[i])
}

avlTree.print()
