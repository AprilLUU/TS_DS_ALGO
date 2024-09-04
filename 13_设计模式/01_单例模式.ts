class Cart {
  private static cart: Cart

  private constructor() {
    // Cart.cart = new Cart()
  }

  public static getInstance() {
    // return Cart.cart
    return Cart.cart ? Cart.cart : new Cart()
  }
}

const cart = Cart.getInstance()