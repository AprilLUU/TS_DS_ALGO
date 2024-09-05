interface Subject {
  request(): void
}

class RealSubject implements Subject {
  request(): void {
    console.log("real-access")
  }
}

class ProxySubject implements Subject {
  private real: RealSubject

  request(): void {
    if (!this.real) this.real = new RealSubject()
    console.log("proxy access")
    this.real.request()
  }
}

const proxy = new ProxySubject()
proxy.request()