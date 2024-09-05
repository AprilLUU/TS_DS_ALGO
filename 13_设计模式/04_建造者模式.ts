class Product {
  part1: string
  part2: string

  setPart1(part1: string) {
    this.part1 = part1
  }

  setPart2(part2: string) {
    this.part2 = part2
  }
}

interface AbstractBuilder {
  buildPart1(part1: string)
  buildPart2(part2: string)
  getProduct(): Product
}

class Builder implements AbstractBuilder {
  private product = new Product()

  buildPart1(part1: string) {
    this.product.setPart1(part1)
  }

  buildPart2(part2: string) {
    this.product.setPart2(part2)
  }

  getProduct(): Product {
    return this.product
  }
}

class Director {
  private builder: Builder

  constructor(builder: Builder) {
    this.builder = builder
  }

  construct() {
    this.builder.buildPart1("part1")
    this.builder.buildPart1("part2")
  }
}

const builder = new Builder()
const director = new Director(builder)
director.construct()
const product = builder.getProduct()