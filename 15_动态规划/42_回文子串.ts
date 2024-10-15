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


const s1 = "abc"
// dp = [1, 2, 3]
const s2 = "aaa"
// dp = [1, 3, 6]
