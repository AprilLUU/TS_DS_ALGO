interface IVisitor {
  visit(el: IElement): void
}

class Visitor1 implements IVisitor {
  visit(el: IElement): void {
    console.log("v1 visit" + el.msg)
  }
}

class Visitor2 implements IVisitor {
  visit(el: IElement): void {
    console.log("v2 visit" + el.msg)
  }
}

interface IElement {
  msg: string
  accept(visitor: IVisitor): void
}

class Element1 implements IElement {
  msg = "el1"

  accept(visitor: IVisitor): void {
    visitor.visit(this)
  }
}

class Element2 implements IElement {
  msg = "el2"

  accept(visitor: IVisitor): void {
    visitor.visit(this)
  }
}

class Manager {
  private elements: IElement[] = []

  add(el: IElement) {
    this.elements.push(el)
  }

  remove(el: IElement) {
    const index = this.elements.findIndex((item) => item === el)
    this.elements.splice(index, 1)
  }

  accept(visitor: IVisitor) {
    for (const el of this.elements) {
      el.accept(visitor)
    }
  }
}

const manger = new Manager()
manger.add(new Element1())

const v1 = new Visitor1()
const v2 = new Visitor2()
manger.accept(v1)
manger.accept(v2)

export {}