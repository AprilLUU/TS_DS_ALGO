class Factory {
  createProduct(product: string) {
    if (product === "A") return new ProductA()
    if (product === "B") return new ProductB()
  }
}

class ProductA {}
class ProductB {}

const factory = new Factory()
factory.createProduct("A")
factory.createProduct("B")

export {}