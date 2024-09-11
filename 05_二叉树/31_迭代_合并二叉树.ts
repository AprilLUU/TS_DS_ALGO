import TreeNode from "./type"

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1) return root2
  if (!root2) return root1

  const queue: (TreeNode | null)[] = []
  queue.push(root1)
  queue.push(root2)

  while (queue.length) {
    const node1 = queue.shift()!
    const node2 = queue.shift()!
    node1.val += node2.val

    if (node1.left && node2.left) {
      queue.push(node1.left)
      queue.push(node2.left)
    }

    if (node1.right && node2.right) {
      queue.push(node1.right)
      queue.push(node2.right)
    }

    if (!node1.left && node2.left) {
      node1.left = node2.left
    }

    if (!node1.right && node2.right) {
      node1.right = node2.right
    }
  }
  
  return root1
}

function mergeTreesV2(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1) return root2
  if (!root2) return root1

  const stack: (TreeNode | null)[] = []
  stack.push(root1)
  stack.push(root2)

  while (stack.length) {
    const node2 = stack.pop()!
    const node1 = stack.pop()!
    node1.val += node2.val

    if (node1.left && node2.left) {
      stack.push(node1.left)
      stack.push(node2.left)
    }

    if (node1.right && node2.right) {
      stack.push(node1.right)
      stack.push(node2.right)
    }

    if (!node1.left && node2.left) {
      node1.left = node2.left
    }

    if (!node1.right && node2.right) {
      node1.right = node2.right
    }
  }
  
  return root1
}

export {}