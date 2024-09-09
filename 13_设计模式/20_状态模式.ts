interface IState {
  handle(): void
}

class State1 implements IState {
  handle(): void {
    console.log("state1")
  }
}

class State2 implements IState {
  handle(): void {
    console.log("state2")
  }
}

class Context {
  private state: IState

  setState(state: IState) {
    this.state = state
  }

  request() {
    this.state.handle()
  }
}

const state1 = new State1()
const state2 = new State2()
const context = new Context()
context.setState(state1)
context.request()
context.setState(state2)
context.request()