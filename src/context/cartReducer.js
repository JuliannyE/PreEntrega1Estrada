export const cartReducer = (
  state,
  action
) => {
  switch (action.type) {
    case 'Cart loadCart from local':
      return {
        ...state,
        isLoaded: true,
        cart: [...action.payload],
      };
    case 'Cart removeProduct':
      return {
        ...state,
        cart: state.cart.filter((p) => {
          if (p.id !== action.payload.id) return p;
          if (p.size !== action.payload.size) return p;
        }),
      };
    case 'Cart updateProducts':
      return {
        ...state,
        cart: [...action.payload],
      };
    case 'Cart updateOrderSummary':
      return {
        ...state,
        ...action.payload,
      };
    case 'Cart order complete':
      return {
        ...state,
        cart: [],
        numberOfItems: 0,        
        total: 0,
      };
    default:
      return state;
  }
};