interface Component {
  operation(): void
}

class ConcreteComponent implements Component {
  operation(): void {
    console.log("componet")
  }
}

class Decorator implements Component {
  protected component: Component

  constructor(component: Component) {
    this.component = component
  }

  operation(): void {
    this.component.operation()
  }
}

class ConcreteDecorator extends Decorator {
  constructor(component: Component) {
    super(component)
  }

  operation(): void {
    console.log("before operation")
    super.operation()
    console.log("after operation")
  }
}

const component = new ConcreteComponent()
const decoratorComponent = new ConcreteDecorator(component)
decoratorComponent.operation()