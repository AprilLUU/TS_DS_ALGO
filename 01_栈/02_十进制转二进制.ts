import ArrayStack from "./01_栈定义"

function decimal2Binary(decimal: number): string {
  const stack = new ArrayStack<number>()
  let binary = ""

  for (let temp = decimal; temp > 0; temp = Math.floor(temp / 2)) {
    const res = temp % 2
    stack.push(res)
  }

  while (!stack.isEmpty()) {
    binary += stack.pop()
  }
  return binary
}

console.log(decimal2Binary(35))
