interface Target {
  request(): void
}

class Adaptee {
  specialRequest() {}
}

class Adapter implements Target {
  private adaptee: Adaptee

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee
  }

  request() {
    this.adaptee.specialRequest()
  }
}

const adapter = new Adapter(new Adaptee())
adapter.request()
