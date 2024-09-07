interface ICommand {
  execute(): void
}

class Command implements ICommand {
  private receiver: Receiver

  constructor(receiver: Receiver) {
    this.receiver = receiver
  }

  execute(): void {
    this.receiver.action()
  }
}

interface IReceiver {
  action(): void
}

class Receiver implements IReceiver {
  action(): void {
    console.log("action")
  }
}

class Invoker {
  private commandQueue: Command[] = []
  private undoStack: Command[] = []

  execCommand(command: Command) {
    this.commandQueue.push(command)
    this.undoStack.push(command)
    command.execute()
  }

  undoLastCommand() {
    if (this.undoLastCommand.length) {
      this.undoStack.pop()
      this.commandQueue.pop()
    }
  }

  execAllCommand() {
    this.commandQueue.forEach((command) => {
      command.execute()
    })
  }
}

const invoker = new Invoker()
const command1 = new Command(new Receiver())
const command2 = new Command(new Receiver())
invoker.execCommand(command1)
invoker.execCommand(command2)
invoker.execAllCommand()
invoker.undoLastCommand()