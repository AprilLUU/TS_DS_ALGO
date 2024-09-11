import TreeNode from "./type"

function findMode(root: TreeNode | null): number[] {
  const res: number[] = []
  let pre: TreeNode | null = null
  let count = 0
  let maxCount = 0

  function traverse(current: TreeNode | null) {
    if (!current) return

    traverse(current.left)

    if (!pre || pre.val !== current.val) count = 1
    else count++

    if (count === maxCount) res.push(current.val)
    if (count > maxCount) {
      maxCount = count
      res.splice(0, res.length)
      res.push(current.val)
    }

    pre = current

    console.log(current.val, count, res)

    traverse(current.right)
  }

  traverse(root)

  return res
}

const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(2)
findMode(root)

export {}
