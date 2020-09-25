export const getAllProducts = state =>
  state.products.categories.flatMap(c => c.products); //[[{}, {}], [{}, {}], [{}, {}]] => [{}, {}, {}, {}, {}]

export const getCategories = state => state.products.categories;

export const getAmountOfItems = state => state.products.cart.length; // [{ prductId: 1, quantity: 6 }] => 1

export const getTotalAmount = state =>
  state.products.cart.reduce((acc, p) => acc + p.quantity, 0);

export const isItemInCart = productId => state =>
  state.products.cart.find(p => p.productId === productId);

export const getCartWithProducts = state =>
  state.products.cart.map(cartItem => ({
    ...state.products.products.find(p => p.id === cartItem.productId),
    quantity: cartItem.quantity,
  }));
