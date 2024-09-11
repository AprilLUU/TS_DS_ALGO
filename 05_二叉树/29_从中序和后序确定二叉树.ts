import TreeNode from "./type"

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder.length || !postorder.length) return null

  function traverse(
    inorderBegin: number,
    inorderEnd: number,
    postorderBegin: number,
    postorderEnd: number
  ): TreeNode | null {
    // 索引相同遍历结束
    if (postorderBegin === postorderEnd) return null
    const rootValue = postorder[postorderEnd - 1]
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

    const leftPostorderBegin = postorderBegin
    // 左子树的后序长度和中序长度相等
    // delimiterIndex - leftInorderBegin 中序长度
    const leftPostorderEnd =
      leftPostorderBegin + delimiterIndex - leftInorderBegin
    const rightPostorderBegin = leftPostorderEnd
    const rightPostorderEnd = postorderEnd - 1

    console.log("left:")
    console.log(leftPostorderBegin, leftPostorderEnd)
    for (let i = leftPostorderBegin; i < leftPostorderEnd; i++) {
      console.log(postorder[i])
    }
    console.log("right:")
    console.log(rightPostorderBegin, rightPostorderEnd)
    for (let i = rightPostorderBegin; i < rightPostorderEnd; i++) {
      console.log(postorder[i])
    }

    root.left = traverse(
      leftInorderBegin,
      leftInorderEnd,
      leftPostorderBegin,
      leftPostorderEnd
    )
    root.right = traverse(
      rightInorderBegin,
      rightInorderEnd,
      rightPostorderBegin,
      rightPostorderEnd
    )

    return root
  }

  const root = traverse(0, inorder.length, 0, postorder.length)
  console.log(root)

  return root
}

const inorder = [9, 3, 15, 20, 7]
const postorder = [9, 15, 7, 20, 3]
buildTree(inorder, postorder)
