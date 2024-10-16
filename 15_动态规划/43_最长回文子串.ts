function longestPalindrome(s: string): string {
  const dp: boolean[][] = new Array(s.length)
    .fill(0)
    .map(() => new Array(s.length).fill(false))
  let maxLen = 0
  let left = 0
  let right = 0

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1 || dp[i + 1][j - 1]) {
          if (j - i + 1 > maxLen) {
            maxLen = j - i + 1
            left = i
            right = j
          }
          dp[i][j] = true
        }
      }
    }
  }

  return s.slice(left, right + 1)
}

function longestPalindromeV2(s: string): string {
  let maxLen = 0
  let finalLeft = 0
  let finalRight = 0

  const extend = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1
        finalLeft = left
        finalRight = right
      }
      left--
      right++
    }
  }

  for (let i = 0; i < s.length; i++) {
    extend(i, i)
    extend(i, i + 1)
  }

  return s.slice(finalLeft, finalRight + 1)
}

const s = "babad"
// dp = [
//   [1, 0, 1, 0, 0],
//   [0, 1, 0, 1, 0],
//   [0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 1]
// ]
