interface IFlyweight {
  operation(externalState: string): void
}

class ConcreteFlyweight implements IFlyweight {
  private intrinsicState: string

  constructor(intrinsicState: string) {
    this.intrinsicState = intrinsicState
  }

  operation(externalState: string): void {
    console.log(this.intrinsicState)
    console.log(externalState)
  }
}

class FlyweightFactory {
  private flyweights: Map<string, IFlyweight> = new Map()

  getFlyweight(key: string) {
    if (!this.flyweights.get(key)) {
      this.flyweights.set(key, new ConcreteFlyweight(key))
    }

    return this.flyweights.get(key)
  }
}

const flyweightFactory = new FlyweightFactory()
const flyweightA = flyweightFactory.getFlyweight("A")
const sharedA = flyweightFactory.getFlyweight("A")
sharedA!.operation("External State")