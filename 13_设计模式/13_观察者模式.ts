interface ISubject {
  register(observer: Observer): void
  remove(observer: Observer): void
  notify(): void
}

interface IObserver {
  update(message: string): void
}

class Subject implements ISubject {
  private observers: Observer[] = []

  register(observer: Observer): void {
    this.observers.push(observer)
  }

  remove(observer: Observer): void {
    const index = this.observers.findIndex((item) => item === observer)
    this.observers.splice(index, 1)
  }

  notify(): void {
    this.observers.forEach((observer) => {
      observer.update("update")
    })
  }
}

class Observer implements IObserver {
  update(message: string): void {
    console.log(message)
  }
}

const o1 = new Observer()
const o2 = new Observer()
const o3 = new Observer()
const s1 = new Subject()
s1.register(o1)
s1.register(o2)
s1.register(o3)
s1.notify()