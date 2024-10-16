function countSubstrings(s: string): number {
  const dp = new Array(s.length).fill(1)

  const isPalindrome = (left: number, right: number): boolean => {
    while (left < right) {
      if (s[left] !== s[right]) return false
      left++
      right--
    }
    return true
  }

  for (let i = 1; i < s.length; i++) {
    dp[i] = dp[i - 1] + 1
    for (let j = 0; j < i; j++) {
      if (isPalindrome(j, i)) dp[i] += 1
    }
  }

  return dp[s.length - 1]
}

function countSubstringsV1(s: string): number {
  const isPalindrome = (left: number, right: number): boolean => {
    while (left < right) {
      if (s[left] !== s[right]) return false
      left++
      right--
    }
    return true
  }

  let curr = 1
  for (let i = 1; i < s.length; i++) {
    curr += 1
    for (let j = 0; j < i; j++) {
      if (isPalindrome(j, i)) curr += 1
    }
  }

  return curr
}

function countSubstringsV2(s: string): number {
  // dp[i][j] [i, j]范围内的子串是不是回文串
  const dp: boolean[][] = new Array(s.length)
    .fill(0)
    .map(() => new Array(s.length).fill(false))
  let res = 0

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        // 1. 下标相同，只有一个字符，肯定为回文串
        // 2. 下标相差1，只有两个字符，肯定为回文串
        // 3. 超过两个字符，取决于[i + 1, j - 1]范围内的子串是否为回文串
        if (j - i <= 1 || dp[i + 1][j - 1]) {
          res++
          dp[i][j] = true
        }
      }
    }
  }

  return res
}

function countSubstringsV3(s: string): number {
  const extend = (left: number, right: number) => {
    let res = 0

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
      res++
    }

    return res
  }

  let res = 0
  for (let i = 0; i < s.length; i++) {
    res += extend(i, i)
    res += extend(i, i + 1)
  }

  return res
}

const s1 = "abc"
// dp = [1, 2, 3]
const s2 = "aaa"
// dp = [1, 3, 6]
