interface IComponent {
  operation(): void
}

class Leaf implements IComponent {
  operation(): void {
    console.log("leaf")
  }
}

class Composite implements IComponent {
  private components: IComponent[] = []
  
  add(component: IComponent) {
    this.components.push(component)
  }

  remove(component: IComponent) {
    const index = this.components.findIndex((item) => item === component)
    this.components.splice(index, 1)
  }

  operation(): void {
    this.components.forEach((component) => {
      component.operation()
    })
  }
}

const leaf = new Leaf()
const composite = new Composite()
composite.add(leaf)
leaf.operation()
composite.operation()