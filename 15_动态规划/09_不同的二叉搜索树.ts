function numTrees(n: number): number {
  // dp[i]为i个节点时二叉搜索树的数量
  const dp: number[] = new Array(n + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      // 以j为头结点
      // j - 1为左子树上的节点数 i - j为右子树上的节点数
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }

  return dp[n]
}
