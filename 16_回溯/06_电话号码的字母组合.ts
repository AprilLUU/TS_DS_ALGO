function letterCombinations(digits: string): string[] {
  const res: string[] = []
  if (!digits.length) return res
  type LetterMapIndex = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
  const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  }
  let substr: string[] = []

  function backtracking(index: number) {
    if (substr.length === digits.length) {
      res.push(substr.join(""))
      return
    }

    const mapIndex = digits[index] as LetterMapIndex
    const corrLetter = map[mapIndex]
    for (let i = 0; i < corrLetter.length; i++) {
      substr.push(corrLetter[i])
      backtracking(index + 1)
      substr.pop()
    }
  }

  backtracking(0)

  return res
}

console.log(letterCombinations("23"))
