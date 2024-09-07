class AbstractClass {
  templateMethod() {}
  step1() {}
  step2() {}
  step3() {}
}

class ConcreteClass extends AbstractClass {
  templateMethod(): void {
    this.step1()
    this.step2()
    this.step3()
  }

  step1(): void {
    console.log("step1")
  }

  step2(): void {
    console.log("step2")
  }

  step3(): void {
    console.log("step3")
  }
}

const cc = new ConcreteClass()
cc.templateMethod()