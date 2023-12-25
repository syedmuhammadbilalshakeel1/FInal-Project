import favTypes from "../type/favorites";

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case favTypes.FILL_FAV:
      return {
        ...state,
        favorites: [...action.payload.products],
      };
    case favTypes.CLEAR_FAV:
      return {
        ...state,
        favorites: action.payload ? [] : state.favorites
      };
    case favTypes.REMOVE_FROM_FAVORITES: {
      const updatedItems = state.favorites.filter((item) => item.product._id !== action.payload.id);
      return {
        ...state,
        favorites: updatedItems
      };
    }
    case favTypes.INCREASE_FAV: {
      const findItem = state.favorites.find((item) => item.product._id === action.payload.id);
      if (findItem) {
        const updatedItem = {
          ...findItem,
          favQuantity: findItem.favQuantity + 1
        };
        const updatedItems = state.favorites.map((item) => (item.product._id === action.payload.id ? updatedItem : item));
        return {
          ...state,
          favorites: updatedItems
        };
      }
        const newItem = {
          ...action.payload,
          favQuantity: 1
        };
        return {
          ...state,
          favorites: [...state.favorites, newItem]
        };
    }

    case favTypes.REMOVE_ENTIRE_FAV: {
      return {
        ...state,
        favorites: []
      };
    }

    case favTypes.UPDATE_FAV_QUANTITY: {
      const findItem = state.favorites.find((item) => item.product._id === action.payload.id);
      const updatedItem = {
        ...findItem,
        favQuantity: action.payload.favQuantity
      };
      const updatedItems = state.favorites.map((item) => (item.product._id === action.payload.id ? updatedItem : item));
      return {
        ...state,
        favorites: updatedItems
      };
    }
    default:
      return state;
  }
};

export default favoritesReducer;
