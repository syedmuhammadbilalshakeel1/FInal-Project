import useServer from "../../hooks/useServer";
import ordersTypes from "../type/orders";

export default function setOrderNumber(orderNumber) {
  return {
    type: ordersTypes.SET_ORDER_NUMBER,
    payload: orderNumber,
  };
}

export function showOrders(orders) {
  return {
    type: ordersTypes.GET_ORDERS,
    payload: orders,
  };
}

export function loadingOrders() {
  return {
    type: ordersTypes.LOADING_ORDERS,
  };
}

export const fetchOrders = (token) => {
  return async (dispatch) => {
    const { getOrders } = useServer();
    try {
      dispatch(loadingOrders());
      const orders = await getOrders(token);
      if (orders !== null) {
        dispatch(showOrders(orders));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
