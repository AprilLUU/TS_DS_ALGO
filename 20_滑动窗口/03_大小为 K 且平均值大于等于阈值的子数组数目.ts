function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let left = 0
  let right = left + k - 1
  let sum = 0
  for (let i = left; i < left + k; i++) {
    sum += arr[i]
  }
  let res = 0

  while (right < arr.length) {
    // let sum = 0
    // for (let i = left; i < left + k; i++) {
    //   sum += arr[i]
    // }
    const average = Math.floor(sum / k)
    if (average >= threshold) res++
    sum -= arr[left]
    left++
    right++
    sum += arr[right]
  }

  return res
}
