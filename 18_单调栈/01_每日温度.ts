function dailyTemperatures(temperatures: number[]): number[] {
  // 初始化为0 未发生更新即右边的元素均小于该元素
  const res = new Array(temperatures.length).fill(0)
  // 找到右边第一个大于的元素 单调递减栈 
  // 找到右边第一个小于的元素 单调递增栈
  const stack: number[] = []

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length) {
      const index = stack[stack.length - 1]
      if (temperatures[index] >= temperatures[i]) break
      stack.pop()
      res[index] = i - index
    }
    stack.push(i)
  }

  return res
}

function dailyTemperaturesV2(temperatures: number[]): number[] {
  const res = new Array(temperatures.length).fill(0)
  const stack: number[] = []
  stack.push(0)

  for (let i = 1; i < temperatures.length; i++) {
    let index = stack[stack.length - 1]
    if (temperatures[index] >= temperatures[i]) {
      stack.push(i)
    } else {
      while (stack.length) {
        index = stack[stack.length - 1]
        if (temperatures[index] >= temperatures[i]) break
        stack.pop()
        res[index] = i - index
      }
      stack.push(i)
    }
  }

  return res
}


const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(temperatures))
