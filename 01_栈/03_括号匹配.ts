import ArrayStack from "./01_栈定义"

const openBrackets = new Set(["(", "[", "{"])
const matchingBrackets = {
  ")": "(",
  "]": "[",
  "}": "{"
}

const bracketsMatch = (brackets: string): boolean => {
  const stack = new ArrayStack<string>()

  for (const bracket of brackets) {
    // switch (bracket) {
    //   case "(":
    //     stack.push(bracket)
    //     break
    //   case "[":
    //     stack.push(bracket)
    //     break
    //   case "{":
    //     stack.push(bracket)
    //     break
    //   case ")":
    //     if (stack.pop() !== "(") return false
    //     break
    //   case "]":
    //     if (stack.pop() !== "[") return false
    //     break
    //   case "}":
    //     if (stack.pop() !== "{") return false
    //     break
    // }
    if (openBrackets.has(bracket)) {
      stack.push(bracket)
    } else {
      const match = matchingBrackets[bracket]
      if (stack.pop() !== match) return false
    }
  }
  // 栈空则满足匹配
  return stack.isEmpty()
}

const str = "(())"
const str1 = "()()()()(()"

console.log(bracketsMatch(str), bracketsMatch(str1))
