import { Store } from "react-notifications-component";
import cartTypes from "../type/cart";
import useServer from "../../hooks/useServer";
import notificationsSettings from "../../constants/constants";

export function fillCart(products) {
  return {
    type: cartTypes.FILL_CART,
    payload: { products },
  };
}

export const removeCart = (itemId) => {
  return {
    type: cartTypes.REMOVE_CART,
    payload: {
      id: itemId,
    },
  };
};
export const fetchCart = (token) => {
  return async (dispatch) => {
    const { getCart } = useServer();
    try {
      const cart = await getCart(token);
      if (cart !== null) {
        dispatch(fillCart(cart.products));
      }
    } catch (error) {
      Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: error.message });
    }
  };
};

export const setCart = (products, token) => {
  return async (dispatch) => {
    const { updateCart } = useServer();
    try {
      const updatedCart = await updateCart(products, token);
      dispatch(fillCart(updatedCart.products));
    } catch (error) {
      Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: error.message });
    }
  };
};

export const removeCartAsync = (itemId, token) => {
  return async (dispatch) => {
    const { removeItemFromCart } = useServer();
    try {
      const deletedCart = await removeItemFromCart(itemId, token);
      dispatch(removeCart(itemId));
    } catch (error) {
      Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: error.message });
    }
  };
};

export const increaseCart = (itemId, productInfo) => {
  return {
    type: cartTypes.INCREASE_CART,
    payload: {
      id: itemId,
      product: productInfo,
    },
  };
};

export const increaseCartAsync = (itemId, token, productInfo) => {
  return async (dispatch) => {
    const { addItemCart } = useServer();
    try {
      const addedCart = await addItemCart(itemId, token);
      dispatch(increaseCart(itemId, productInfo));
    } catch (error) {
      Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: error.message });
    }
  };
};

export const decreaseCart = (itemId) => {
  return {
    type: cartTypes.DECREASE_CART,
    payload: {
      id: itemId,
    },
  };
};

export const decreaseCartAsync = (itemId, token) => {
  return async (dispatch) => {
    const { decreaseProductQuantity } = useServer();
    try {
      const decreasedCart = await decreaseProductQuantity(itemId, token);
      dispatch(decreaseCart(itemId));
    } catch (error) {
      Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: error.message });
    }
  };
};

export const updateCartQuantity = (itemId, cartQuantity) => {
  return {
    type: cartTypes.UPDATE_CART_QUANTITY,
    payload: {
      id: itemId,
      cartQuantity,
    },
  };
};

export const removeEntireCart = () => {
  return {
    type: cartTypes.REMOVE_ENTIRE_CART,
  };
};

export const removeEntireCartAsync = (token) => {
  return async (dispatch) => {
    const { deleteCart } = useServer();
    try {
      // eslint-disable-next-line no-unused-vars
      const deletedCart = await deleteCart(token);
      dispatch(removeEntireCart());
    } catch (error) {
      Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: error.message });
    }
  };
};