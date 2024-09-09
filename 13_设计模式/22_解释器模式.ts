interface IExpression {
  interpret(): number
}

class Expression implements IExpression {
  private value: number

  constructor(value: number) {
    this.value = value
  }

  interpret(): number {
    return this.value
  }
}

class AddExpression implements IExpression {
  private left: Expression
  private right: Expression

  constructor(left: Expression, right: Expression) {
    this.left = left
    this.right = right
  }

  interpret(): number {
    return this.left.interpret() + this.right.interpret()
  }
}

class Context {
  private msg: string

  constructor(msg: string) {
    this.msg = msg
  }
}

const context = new Context("add")
const expression = new AddExpression(new Expression(1), new Expression(1))
console.log(expression.interpret())

export {}