interface IMediator {
  register(colleague: AbstractColleague): void
  send(message: string, colleague: AbstractColleague): void
}

class Mediator implements IMediator {
  private colleagues: AbstractColleague[] = []

  register(colleague: AbstractColleague): void {
    this.colleagues.push(colleague)
  }

  send(message: string, colleague: AbstractColleague): void {
    this.colleagues.forEach((item) => {
      if (item !== colleague) {
        item.receive(message)
      }
    })
  }
}

class AbstractColleague {
  protected mediator: Mediator

  constructor(mediator: Mediator) {
    this.mediator = mediator
  }

  send(message: string) {}

  receive(message: string) {}
}

class ConcreteColleague1 extends AbstractColleague {

  constructor(mediator: Mediator) {
    super(mediator)
  }

  send(message: string): void {
    this.mediator.send(message, this)
  }

  receive(message: string): void {
    console.log(message)
  }
}

class ConcreteColleague2 extends AbstractColleague {

  constructor(mediator: Mediator) {
    super(mediator)
  }

  send(message: string): void {
    this.mediator.send(message, this)
  }

  receive(message: string): void {
    console.log(message)
  }
}

const mediator = new Mediator()
const c1 = new ConcreteColleague1(mediator)
const c2 = new ConcreteColleague1(mediator)
mediator.register(c1)
mediator.register(c2)
c1.send("hello c2")
c2.send("hello c1")
