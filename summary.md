## 算法

#### 1. 前缀和

使用哈希表存储前缀和出现的次数，求路径和为k的路径总数

- 和为K的子数组

- 路径总和III

#### 2. 矩阵

模拟题，每条边的处理都按一样的原则进行处理（左闭右开）

- 螺旋矩阵

n阶矩阵，注意中间最后的元素

- 螺旋矩阵II

分三种情况处理

```javascript
// n阶方阵且n为奇数 处理最后的中心元素
if (m === n && n % 2 === 1) res.push(matrix[x][y])
// m > n 处理中间剩下的一条竖边
if (m > n) {
    // x <= m - offset && y === n - offset 中间仍剩下元素
    while (x <= m - offset && y === n - offset) {
      res.push(matrix[x++][y])
    }
}
// m < n 处理中间剩下的一条横边
if (m < n) {
    // x === m - offset && y <= n - offset 中间仍剩下元素
    while (y <= n - offset && x === m - offset) {
      res.push(matrix[x][y++])
    }
}
```

#### 3. 哈希表

- 两数之和

找到一个数组内和等于target的两个元素

暴力，需要遍历数组两遍 O(n^2)

哈希表优化，使用哈希表存储target - arr[i]，一次遍历即可找到结果

- 四数之和

找到四个数组和为target的四元组

暴力，O(n^4)

哈希表优化，使用哈希表存储两个数组元素的和，降低到O(n^2)

- **字母异位词分组**

对每个字符串按字典序重新排序，以此为key，value值为异位词数组

- **最长连续序列**

通过set存储数组中所有数，找到序列的起点，累计序列的长度

```typescript
function longestConsecutive(nums: number[]): number {
  const set = new Set<number>()
  nums.forEach((num) => set.add(num))

  let max = 0
  for (let i = 0; i < nums.length; i++) {
    // 前驱数存在 肯定不会以该数为开头
    if (set.has(nums[i] - 1)) continue
    let len = 1
    let next = 1
    // 累计序列长度
    while (set.has(nums[i] + next)) {
      len++
      next++
    }
    max = Math.max(max, len)
  }

  return max
}
```

#### 4. 双指针

**快慢指针**

- 移动零

**对撞指针**

- 三数之和
- 四数之和

同一个数组内多数和等于指定值

核心：排序之后使用双指针查找解，注意去重

```javascript
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    let res: number[][] = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let left = i + 1
        let right = nums.length - 1
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum > 0) right--
            if (sum < 0) left++
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) left++
                while (left < right && nums[right] === nums[right - 1]) right--
                left++
                right--
            } 
        }
    }

    return res
};
```

- 盛最多水的容器

暴力：两次for循环，遍历以每条边为起点，另一条边为终点

核心：使两边尽可能地大，以及x轴的距离尽可能大

```typescript
function maxArea(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let res = 0 

    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right])
        res = Math.max(res, area)
        // 每次移动会使长度变小，想要使面积变大，需要找到更高的边
        // 左边小，移动左边，右边小，移动右边
        if (height[left] < height[right]) left++
        else right--
    }

    return res
}
```

- 接雨水
- 颜色分类
  - 左指针指向0的下一个插入位置，右指针指向2的下一个插入位置
  - 一次遍历，遇到0与左指针交换，遇到1直接跳过，遇到2与右指针交换，且需要重新检查该位置交换过来的元素


```typescript
function sortColors(nums: number[]): void {
    const n = nums.length
    let left = 0
    let right = n - 1

    const swap = (index1: number, index2: number) => {
        const temp = nums[index1]
        nums[index1] = nums[index2]
        nums[index2] = temp
    }

    let i = 0
    while (i <= right) {
        if (nums[i] === 0) {
            swap(left, i)
            i++
            left++
        } else if (nums[i] === 2) {
            swap(right, i)
            right--
        } else {
            i++
        }
    }
}
```

**分离双指针**

- 相交链表

```typescript
const getIntersectionNode = function (
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) return null

  let currA: ListNode | null = headA
  let currB: ListNode | null = headB

  // 相交部分长度为k listA长度为n listB长度为m
  // 不相交的部分为n - k 以及 m - k
  // 走到相交结点 (currA -> n + m - k) (currB -> m + n - k)
  // 不相交时 遍历完两个链表 同时走到null 不会死循环
  while (currA !== currB) {
    currA = currA === null ? headB : currA.next
    currB = currB === null ? headA : currB.next
  }

  return currA
}
```

#### 5. 滑动窗口

适合求解合适的子数组或者子串，一点点扩张和移动

**定长窗口**

- **找到字符串中所有字母异位词**

使用字符哈希存储字母计数，遍历字符串p和字符串s中每一个窗口

窗口中的字符会使计数加1，字符串p中的字符会使计数-1

遍历字符哈希，若全为0，说明窗口内的子串为p的异位词

另一种方法，对p和窗口内的子串都进行字典序排序，对比两个字符串是否相同即可，时间复杂度过高

```typescript
function findAnagrams(s: string, p: string): number[] {
  const res: number[] = []
  if (s.length < p.length) return res

  const map = new Array(26).fill(0)
  const aCode = "a".charCodeAt(0)
  // 预处理第一个窗口
  for (let i = 0; i < p.length; i++) {
    const index1 = p[i].charCodeAt(0) - aCode
    const index2 = s[i].charCodeAt(0) - aCode
    map[index1]--
    map[index2]++
  }

  let diff = 0
  for (const count of map) {
    if (count !== 0) diff++
  }
  if (diff === 0) res.push(0)

  let left = 0
  let right = p.length - 1

  while (right < s.length - 1) {
    const index1 = s[left].charCodeAt(0) - aCode
    const index2 = s[right + 1].charCodeAt(0) - aCode
    // 窗口移除和加入的是同一个字符
    if (index1 === index2) {
      left++
      right++
      if (diff === 0) res.push(left)
      continue
    }

    // 移除左边的字符
    // 移除之前count为0 两个字符串差异加1
    // 移除需要使count减1
    if (map[index1] === 0) diff++
    left++
    map[index1]--
    // 移除之后count为0 说明移除的字符不是p中有的字符
    // 两个字符串差异减1
    if (map[index1] === 0) diff--

    // 加入右边的字符
    // 加入之前count为0 两个字符串差异加1
    // 加入需要使count加1
    if (map[index2] === 0) diff++
    right++
    map[index2]++
    // 加入之后count为0 说明加入的字符是p中有的字符
    // 两个字符串差异减1
    if (map[index2] === 0) diff--

    if (diff === 0) res.push(left)
  }

  return res
}

/**
 * O(n * mlogm) 超时
 */
function findAnagramsV1(s: string, p: string): number[] {
  let left = 0
  let right = p.length - 1
  const res: number[] = []
  const sortStr = p.split("").sort().join("")

  while (right < s.length) {
    const str = s
      .slice(left, right + 1)
      .split("")
      .sort()
      .join("")
    if (str === sortStr) res.push(left)
    left++
    right++
  }

  return res
}
```

**不定长窗口**

- 无重复字符的最长子串

#### 6. 链表

- 反转链表
  - 迭代
  - 递归
  - 栈
  - 头插法
- 环形链表
  - 检测是否有环
    - 快慢指针，相遇与非空结点即有环
    - 检测环入口，快慢指针，到达相遇结点，双指针从头结点和相遇结点出发，再次相遇即为环入口


#### 7. 贪心

- 买卖股票的最佳时机

每一天在卖出时，选择之前价格最低的一天卖出（局部最优）

遍历完整个价格数组，可得到最终的最优解（全局最优）

- 

#### 8. 技巧题

- 只出现一次的数字
  - 哈希表，需要O(n)的时间复杂度，不满足需求
  - 位运算，按位异或，一次遍历，出现两次的数字互相异或得0（使用交换律），最终结果为0与出现一次的数字异或，即为最终的结果
    - 任何数与0异或仍为其本身
    - 任何数与本身异或为0
    - 异或运算满足交换律和结合律

```typescript
function singleNumber(nums: number[]): number {
  let res = 0

  for (const num of nums) {
    res ^= num
  }

  return res
}
```

- 多数元素
  - 哈希表，时间复杂度O(n)
  - 投票法，选定候选的数字，初始为nums[0]，遇到相同的数票数加1，不相同的数票数减1，为0时更换候选的数字，一次遍历之后，最终的候选数字为最终结果（因为得到的票数大于n/2）

```typescript
function majorityElement(nums: number[]): number {
    let candicate = nums[0]
    let votes = 1

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        // 票数为0 更换候选人
        if (votes === 0) {
            candicate = num
        }
        if (num === candicate) {
            votes++
        } else {
            votes--

        }
    }

    return candicate
}
```

#### 9. 数组

数组题没思路时，可以考虑排序之后再进行求解

#### 10. 动态规划

1. 确定dp数组的含义
2. 确定状态转移方程
3. 确定dp数组的初始化
4. 确定遍历顺序
5. 举例推导
