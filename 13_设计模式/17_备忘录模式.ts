class Originator {
  private state: string

  setState(state: string) {
    this.state = state
  }

  getState() {
    return this.state
  }

  createMemento() {
    return new Memento(this.state)
  }

  restoreFromMemento(memento: Memento) {
    this.setState(memento.getState())
  }
}

class Memento {
  private state: string

  constructor(state: string) {
    this.state = state
  }

  getState() {
    return this.state
  }
}

class Caretaker {
  private mementos: Memento[] = []

  addMemento(memento: Memento) {
    this.mementos.push(memento)
  }

  getMemento(index: number) {
    return this.mementos[index]
  }
}

const originator = new Originator()
originator.setState("state1")

const caretaker = new Caretaker()
caretaker.addMemento(originator.createMemento())

originator.setState("state2")
caretaker.addMemento(originator.createMemento())

originator.restoreFromMemento(caretaker.getMemento(0))