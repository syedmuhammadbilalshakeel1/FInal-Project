import { Store } from "react-notifications-component";
import favoritesTypes from "../type/favorites";
import useServer from "../../hooks/useServer";
import notificationsSettings from "../../constants/constants";

export const addToFavorites = (products) => {
  return {
    type: favoritesTypes.ADD_TO_FAV,
    payload: { products },
  };
};

export function fillFav(products) {
  return {
    type: favoritesTypes.FILL_FAV,
    payload: { products },
  };
}

export const removeFromFavorites = (itemId) => {
  return {
    type: favoritesTypes.REMOVE_FROM_FAVORITES,
    payload: {
      id: itemId,
    },
  };
};

export const removeFromFavAsync = (itemId, token) => {
  return async (dispatch) => {
    const { removeFromWishlist } = useServer();
    try {
      const deleteFav = await removeFromWishlist(itemId, token);
      dispatch(removeFromFavorites(itemId));
    } catch (error) {
      Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: error.message });
    }
  };
};

export const fetchFav = (token) => {
  return async (dispatch) => {
    const { getWishlist } = useServer();
    try {
      const fav = await getWishlist(token);
      if (fav !== null) {
        dispatch(fillFav(fav.products));
      }
    } catch (error) {
      Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: error.message });
    }
  };
};

export const setFav = (products, token) => {
  return async (dispatch) => {
    const { updateWishlist } = useServer();
    try {
      const updateFav = await updateWishlist(products, token);
      dispatch(fillFav(updateFav.products));
    } catch (error) {
    }
  };
};

export const increaseFav = (itemId, productInfo) => {
  return {
    type: favoritesTypes.INCREASE_FAV,
    payload: {
      id: itemId,
      product: productInfo,
    },
  };
};

export const increaseFavAsync = (itemId, token, productInfo) => {
  return async (dispatch) => {
    const { addToWishlist } = useServer();
    try {
      const addToFav = await addToWishlist(itemId, token);
      dispatch(increaseFav(itemId, productInfo));
    } catch (error) {
      Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: error.message });
    }
  };
};

export const updateFavQuantity = (itemId, favQuantity) => {
  return {
    type: favoritesTypes.UPDATE_FAV_QUANTITY,
    payload: {
      id: itemId,
      favQuantity,
    },
  };
};

export const removeEntireFav = () => {
  return {
    type: favoritesTypes.REMOVE_ENTIRE_FAV,
  };
};