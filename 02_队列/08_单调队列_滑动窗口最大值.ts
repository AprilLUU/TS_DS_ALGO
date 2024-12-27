function maxSlidingWindow(nums: number[], k: number): number[] {
  class Queue {
    data: number[] = []

    pop(value: number) {
      if (!this.isEmpty() && value === this.front()!) {
        // 前一个窗口的最大值为当前窗口移除的元素 将其弹出队列
        this.data.shift()
      }
    }

    push(value: number) {
      while (!this.isEmpty() && value > this.back()!) {
        // 保持队列单调递减 弹出队列中小于新加入元素的元素
        this.data.pop()
      }
      this.data.push(value)
    }

    back() {
      if (!this.isEmpty()) return this.data[this.data.length - 1]
    }

    front() {
      if (!this.isEmpty()) return this.data[0]
    }

    isEmpty() {
      return this.data.length === 0
    }
  }

  const decreaseQueue = new Queue()
  const res: number[] = []
  // 处理第一个窗口
  for (let i = 0; i < k; i++) {
    decreaseQueue.push(nums[i])
  }
  res.push(decreaseQueue.front()!)
  // 移动窗口
  for (let i = k; i < nums.length; i++) {
    // 移除前一个窗口的元素
    decreaseQueue.pop(nums[i - k])
    // 加入新窗口元素
    decreaseQueue.push(nums[i])
    // 取出最大值
    res.push(decreaseQueue.front()!)
  }

  return res
}

const nums = [1, 3, 1, 2, 0, 5]
const k = 3
console.log(maxSlidingWindow(nums, k))
