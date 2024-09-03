export const swap = <T>(arr: T[], i: number, j: number) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

export const isNeedSort = <T>(arr: T[]): boolean => {
  return arr.length > 1
}

export const randomIndex = (left: number, right: number): number => {
  return Math.floor(Math.random() * (right - left + 1)) + left
}