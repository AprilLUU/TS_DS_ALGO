import TreeNode from "./type"

function findMode(root: TreeNode | null): number[] {
  const stack: TreeNode[] = []
  const res: number[] = []
  let pre: TreeNode | null = null
  let current: TreeNode | null = root
  let count = 0
  let maxCount = 0

  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack.pop()!
    if (!pre || pre.val !== current.val) count = 1
    else count++
    if (count === maxCount) res.push(current.val)
    if (count > maxCount) {
      maxCount = count
      res.splice(0, res.length)
      res.push(current.val)
    }
    pre = current

    current = current.right
  }

  return res
}

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(2)
console.log(findMode(root))

export {}
