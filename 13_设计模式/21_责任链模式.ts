interface IHandler {
  handleRequest(request: Requeset): void
  setNextHandler(next: IHandler): void
  canHandle(request: Requeset): boolean
}

class Handler1 implements IHandler {
  private next: IHandler

  handleRequest(request: Requeset): void {
    if (this.canHandle(request)) {
      console.log("handle request")
    } else if (this.next) {
      this.next.handleRequest(request)
    } else {
      console.log("error")
    }
  }

  setNextHandler(next: IHandler): void {
    this.next = next
  }

  canHandle(request: Requeset): boolean {
    return request.msg === "canDo" ? true : false
  }
}

class Handler2 implements IHandler {
  private next: IHandler

  handleRequest(request: Requeset): void {
    if (this.canHandle(request)) {
      console.log("handle request")
    } else if (this.next) {
      this.next.handleRequest(request)
    } else {
      console.log("error")
    }
  }

  setNextHandler(next: IHandler): void {
    this.next = next
  }

  canHandle(request: Requeset): boolean {
    return request.msg === "canDo" ? true : false
  }
}

class Requeset {
  msg: string
  constructor(msg: string) {
    this.msg = msg
  }
}

const req = new Requeset("req")
const handler1 = new Handler1()
const handler2 = new Handler2()
handler1.setNextHandler(handler2)
handler1.handleRequest(req)