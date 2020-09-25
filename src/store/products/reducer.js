const initialState = {
  loading: true,
  categories: [],
  cart: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case "PRODUCTS_FETCHED": {
      return {
        loading: false,
        categories: [...payload.categories],
        cart: [],
      };
    }

    case "ADD_TO_CART": {
      const inCart = state.cart.find(
        cartItem => cartItem.productId === payload
      );
      if (!inCart) {
        return {
          ...state,
          cart: [...state.cart, { productId: payload, quantity: 1 }],
        };
      } else {
        return {
          ...state,
          cart: state.cart.map(c =>
            c.productId === payload ? { ...c, quantity: c.quantity + 1 } : c
          ),
        };
      }
    }

    case "REMOVE_CART": {
      const inCart = state.cart.find(
        cartItem => cartItem.productId === payload
      );
      if (inCart.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter(cartItem => cartItem.productId !== payload),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map(cartItem =>
            cartItem.productId === payload
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          ),
        };
      }
    }
    default:
      return state;
  }
}
