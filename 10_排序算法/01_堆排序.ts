import { testSort } from "hy-algokit"
import Heap from "../08_堆/01_堆"

const headSort = <T>(arr: T[]): T[] =>  {
  if (arr.length === 0 || arr.length === 1) return arr 
  const heap = new Heap(true, arr)
  const newArr: T[] = []
  while (!heap.isEmpty()) {
    newArr.unshift(heap.extract()!)
  }
  return newArr
}

testSort(headSort<number>)