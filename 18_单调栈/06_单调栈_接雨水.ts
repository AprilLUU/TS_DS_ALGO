function trap(height: number[]): number {
  const stack: number[] = []
  stack.push(0)
  let sum = 0

  for (let i = 1; i < height.length; i++) {
    let el = height[stack[stack.length - 1]]
    if (height[i] < el) stack.push(i)
    // 相等时取右边的元素
    // eg: stack [2, 1, 1, 1]
    // 遍历时需要找i的左边第一个大的元素 栈顶元素需要保证为i元素的最左边元素
    // 因此需要保留最右边的元素 否则会出现宽度计算错误 过长
    if (height[i] === el) {
      stack.pop()
      stack.push(i)
    }
    if (height[i] > el) {
      while (stack.length) {
        const mid = stack[stack.length - 1]
        if (height[mid] > height[i]) break
        // 相等时也弹出取右边的元素来计算
        stack.pop()
        // 左边没有墙时不能接水
        if (stack.length) {
          // 栈顶元素为左边的墙 此时遍历的元素为右边的墙
          // 弹出的元素即为需要计算的凹槽
          const left = stack[stack.length - 1]
          const h = Math.min(height[i], height[left]) - height[mid]
          const w = i - left - 1
          sum += h * w
        }
      }
      stack.push(i)
    }
  }

  return sum
}

function trapV1(height: number[]): number {
  const stack: number[] = []
  stack.push(0)
  let sum = 0

  for (let i = 1; i < height.length; i++) {
    let el = height[stack[stack.length - 1]]
    if (height[i] === el) stack.pop()
    if (height[i] > el) {
      while (stack.length) {
        const mid = stack[stack.length - 1]
        if (height[mid] > height[i]) break
        stack.pop()
        if (stack.length) {
          const left = stack[stack.length - 1]
          const h = Math.min(height[i], height[left]) - height[mid]
          const w = i - left - 1
          sum += h * w
        }
      }
    }

    stack.push(i)
  }

  return sum
}

function trapV2(height: number[]): number {
  const stack: number[] = []
  let sum = 0

  for (let i = 0; i < height.length; i++) {
    while (stack.length) {
      const mid = stack[stack.length - 1]
      // 相等时也压入
      // eg: stack [2, 1, 1, 1]
      // 此时height[i]为3时, 会不断弹出1 计算高度时由于左边的墙一样高 高度为0
      // 直至弹出最后一个1 此时计算出高度和宽度仍然正确
      if (height[mid] >= height[i]) break
      stack.pop()
      if (stack.length) {
        const left = stack[stack.length - 1]
        const h = Math.min(height[i], height[left]) - height[mid]
        const w = i - left - 1
        sum += h * w
      }
    }

    stack.push(i)
  }

  return sum
}


const height = [4, 2, 0, 3, 2, 5]
console.log(trapV2(height))

export {}
