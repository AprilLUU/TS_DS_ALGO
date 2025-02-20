import TreeNode from "./type"

function flatten(root: TreeNode | null): void {
  const res: TreeNode[] = []

  // 前序遍历保存所有结点
  const traverse = (node: TreeNode | null) => {
    if (!node) return
    res.push(node)
    traverse(node.left)
    traverse(node.right)
  }

  traverse(root)

  // 左指针置空 修改右指针指向
  for (let i = 0; i < res.length - 1; i++) {
    res[i].left = null
    res[i].right = res[i + 1]
  }
}

function flattenV2(root: TreeNode | null): void {
  if (!root) return
  const stack: TreeNode[] = []
  stack.push(root)
  let prev: TreeNode | null = null

  while (stack.length) {
    const curr = stack.pop()!
    if (prev) {
      prev.left = null
      prev.right = curr
    }
    prev = curr
    // 保持前序遍历的顺序
    // 由于修改了结点的右指针 需要提前将右孩子保存到栈内
    if (curr.right) stack.push(curr.right)
    if (curr.left) stack.push(curr.left)
  }
}

function flattenV3(root: TreeNode | null): void {
  let curr = root

  while (curr) {
    // 左子树不为空,需要展开
    // 左子树为空,仅有右子树,不需要展开
    if (curr.left) {
      // 链表的下一个结点为左子树结点
      const next = curr.left
      // 找到最右的结点 接上curr的右子树
      // 即找到前序遍历中curr右子树的前驱结点
      // 由于会依次遍历展开后的链表的每一个结点进行处理,因此可以暂时忽略左子树
      let rightPre = next
      while (rightPre.right) {
        rightPre = rightPre.right
      }
      rightPre.right = curr.right
      curr.left = null
      curr.right = next
    }
    // 处理下一个结点
    curr = curr.right
  }
}

export {}
