import ordersTypes from "../type/orders";

const initialState = {
  orderNumber: null,
  orders: [],
  loading: false,
  error: null,
};

// eslint-disable-next-line default-param-last
const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ordersTypes.SET_ORDER_NUMBER:
      return {
        ...state,
        orderNumber: action.payload,
      };
    case ordersTypes.GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
        error: null,
      };
    case ordersTypes.LOADING_ORDERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export default ordersReducer;
