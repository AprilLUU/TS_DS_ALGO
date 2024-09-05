class ProductA {}
class ProductA1 extends ProductA {}
class ProductA2 extends ProductA {}
class ProductB {}
class ProductB1 extends ProductB {}
class ProdcutB2 extends ProductB {}

interface AbstractFactory {
  createProductA(): ProductA
  createProductB(): ProductB
}

class Factory1 implements AbstractFactory {
  createProductA() {
    return new ProductA1()
  }

  createProductB() {
    return new ProductB1()
  }
}

class Factory2 implements AbstractFactory {
  createProductA() {
    return new ProductA2()
  }

  createProductB() {
    return new ProdcutB2()
  }
}

const f1 = new Factory1()
const f2 = new Factory2()
f1.createProductA()
f1.createProductB()

export {}
