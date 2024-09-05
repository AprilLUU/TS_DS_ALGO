interface IPrototype {
  clone(): Prototype
}

class Prototype implements IPrototype {
  data: any

  constructor(data: any) {
    this.data = data
  }

  clone(): Prototype {
    return new Prototype(this.data)
  }
}

const proto = new Prototype(new Array(1000).fill(1))
const clone = proto.clone()
