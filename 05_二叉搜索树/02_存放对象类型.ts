import BSTree from "./01_二叉搜索树"

class Person {
  age: number

  constructor(age: number) {
    this.age = age
  }

  [Symbol.toPrimitive](hint: string) {
    return this.age
  }
}

const p1 = new Person(10)
const p2 = new Person(8)
const p3 = new Person(7)
const p4 = new Person(9)
const p5 = new Person(12)
const p6 = new Person(11)
const p7 = new Person(13)

const bst = new BSTree<Person>()
bst.insert(p1)
bst.insert(p2)
bst.insert(p3)
bst.insert(p4)
bst.insert(p5)
bst.insert(p6)
bst.insert(p7)
bst.print()