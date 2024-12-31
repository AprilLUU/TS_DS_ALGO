class MinStack {
  stack: number[]
  minStack: number[]

  constructor() {
    // 两个栈同步 每入栈或出栈一个元素的同时入栈和出栈最小元素
    this.stack = []
    // minStack栈顶元素为未加入元素前栈中的最小值，初始为最大整数
    this.minStack = [Number.MAX_SAFE_INTEGER]
  }

  push(val: number): void {
    this.stack.push(val)
    // 加入之后，取栈顶和加入元素的最小值，即为当前栈的最小值
    const minEl = Math.min(this.minStack[this.minStack.length - 1], val)
    this.minStack.push(minEl)
  }

  pop(): void {
    this.stack.pop()
    this.minStack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1]
  }
}
