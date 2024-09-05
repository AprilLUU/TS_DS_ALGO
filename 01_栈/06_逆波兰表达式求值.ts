function evalRPN(tokens: string[]): number {
  const stack: number[] = []
  const operator = ["+", "-", "*", "/"]

  for (const token of tokens) {
    console.log(stack)
    if (operator.includes(token)) {
      const num1 = stack.pop()!
      const num2 = stack.pop()!

      switch (token) {
        case "+":
          stack.push(num2 + num1)
          break
        case "-":
          stack.push(num2 - num1)
          break
        case "*":
          stack.push(num2 * num1)
          break
        case "/":
          const res = num2 / num1
          stack.push(res < 0 ? Math.ceil(res) : Math.floor(res))
          break
      }
    } else {
      stack.push(Number(token))
    }
  }

  return stack.pop()!
}

const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN(tokens))