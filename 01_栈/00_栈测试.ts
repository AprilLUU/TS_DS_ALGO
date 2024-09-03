import ArrayStack from "./01_栈定义"

const stack = new ArrayStack<number>()
for (let i = 1; i < 6; i++) {
  stack.push(i)
}
console.log(stack)
