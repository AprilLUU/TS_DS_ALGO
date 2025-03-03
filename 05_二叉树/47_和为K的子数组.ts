/**
 * 前缀和
 */
function subarraySum(nums: number[], k: number): number {
  let res = 0
  let pre = 0
  // 哈希表存储前缀和出现的次数
  const map = new Map<number, number>()
  // 虚拟头结点，值为0
  // 从0出发，第一次路径和为k时可以得到路径
  map.set(0, 1)

  for (const num of nums) {
    // 加上当前节点的值
    pre += num
    // 如果存在值为pre - k的前缀和，即存在路径到当前节点和为k
    if (map.has(pre - k)) {
      res += map.get(pre - k)!
    }
    // 更新哈希表
    map.set(pre, map.get(pre) ?? 0 + 1)
  }

  return res
}
