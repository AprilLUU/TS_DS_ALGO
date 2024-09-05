class SubSystemA {
  operation() {
    console.log("A")
  }
}

class SubSystemB {
  operation() {
    console.log("B")
  }
}

class SubSystemC {
  operation() {
    console.log("C")
  }
}

class Facade {
  private subsysA = new SubSystemA()
  private subsysB = new SubSystemB()
  private subsysC = new SubSystemC()

  facadeOperation() {
    this.subsysA.operation()
    this.subsysB.operation()
    this.subsysC.operation()
  }
}

const facade = new Facade()
facade.facadeOperation()