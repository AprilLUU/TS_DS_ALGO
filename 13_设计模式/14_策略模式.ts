interface IStrategy {
  algoImpl(): void
}

class ConcreteStrategyA implements IStrategy {
  algoImpl(): void {
    console.log("A")
  }
}

class ConcreteStrategyB implements IStrategy {
  algoImpl(): void {
    console.log("A")
  }
}

class ConcreteStrategyC implements IStrategy {
  algoImpl(): void {
    console.log("A")
  }
}

class Context {
  private strategy: IStrategy

  constructor(strategy: IStrategy) {
    this.strategy = strategy
  }

  algo() {
    this.strategy.algoImpl()
  }
}

const contextA = new Context(new ConcreteStrategyA())
const contextB = new Context(new ConcreteStrategyB())
const contextC = new Context(new ConcreteStrategyC())
contextA.algo()
contextB.algo()
contextC.algo()