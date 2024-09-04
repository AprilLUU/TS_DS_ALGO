class ProductA {}
class ProductB {}

class AbstractFactory {
  createProduct() {}
}

class FactoryA extends AbstractFactory {
  createProduct() {
    return new ProductA()
  }
}

class FactoryB extends AbstractFactory {
  createProduct() {
    return new ProductB()
  }
}

const factoryA = new FactoryA()
factoryA.createProduct()

export {}

