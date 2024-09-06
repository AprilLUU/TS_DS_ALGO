interface IImplementation {
  operationImpl(): void
}

class ConcreteImplA implements IImplementation {
  operationImpl(): void {
    console.log("A")
  }
}

class ConcreteImplB implements IImplementation {
  operationImpl(): void {
    console.log("B")
  }
}

interface IAbstarction {
  operation(): void
}

class RefinedAbstraction implements IAbstarction {
  private implementor: IImplementation

  constructor(implementor: IImplementation) {
    this.implementor = implementor
  }

  operation(): void {
    this.implementor.operationImpl()
  }
}

const implA = new ConcreteImplA()
const implB = new ConcreteImplB()
const absractA = new RefinedAbstraction(implA)
const absractB = new RefinedAbstraction(implB)
absractA.operation()
absractB.operation()