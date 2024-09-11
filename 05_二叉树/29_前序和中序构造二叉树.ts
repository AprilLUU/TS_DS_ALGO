import TreeNode from "./type"

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!inorder.length || !preorder.length) return null

  function traverse(
    inorderBegin: number,
    inorderEnd: number,
    preorderBegin: number,
    preorderEnd: number
  ): TreeNode | null {
    // 索引相同遍历结束
    if (preorderBegin === preorderEnd) return null
    const rootValue = preorder[preorderBegin]
    const root = new TreeNode(rootValue)
    console.log("root: " + root.val)

    let delimiterIndex = inorderBegin
    while (delimiterIndex < inorderEnd) {
      if (inorder[delimiterIndex] === rootValue) break
      delimiterIndex++
    }

    console.log("delimiter: " + delimiterIndex)

    // 分割区间采用左闭右开的原则
    const leftInorderBegin = inorderBegin
    const leftInorderEnd = delimiterIndex
    const rightInorderBegin = delimiterIndex + 1
    const rightInorderEnd = inorderEnd

    console.log("left:")
    console.log(leftInorderBegin, leftInorderEnd)
    for (let i = leftInorderBegin; i < leftInorderEnd; i++) {
      console.log(inorder[i])
    }
    console.log("right:")
    console.log(rightInorderBegin, rightInorderEnd)
    for (let i = rightInorderBegin; i < rightInorderEnd; i++) {
      console.log(inorder[i])
    }

    const leftPreorderBegin = preorderBegin + 1
    // 左子树的前序长度和中序长度相等
    // delimiterIndex - leftInorderBegin 中序长度
    const leftPreorderEnd =
      leftPreorderBegin + delimiterIndex - leftInorderBegin
    const rightPreorderBegin = leftPreorderEnd
    const rightPreorderEnd = preorderEnd

    console.log("left:")
    console.log(leftPreorderBegin, leftPreorderEnd)
    for (let i = leftPreorderBegin; i < leftPreorderEnd; i++) {
      console.log(preorder[i])
    }
    console.log("right:")
    console.log(rightPreorderBegin, rightPreorderEnd)
    for (let i = rightPreorderBegin; i < rightPreorderEnd; i++) {
      console.log(preorder[i])
    }

    root.left = traverse(
      leftInorderBegin,
      leftInorderEnd,
      leftPreorderBegin,
      leftPreorderEnd
    )
    root.right = traverse(
      rightInorderBegin,
      rightInorderEnd,
      rightPreorderBegin,
      rightPreorderEnd
    )

    return root
  }

  const root = traverse(0, inorder.length, 0, preorder.length)
  console.log(root)

  return root
}

const inorder = [9, 3, 15, 20, 7]
const preorder = [3, 9, 20, 15, 7]
buildTree(preorder, inorder)
