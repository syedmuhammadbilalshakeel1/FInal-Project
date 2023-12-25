import recentlyProducts from "../type/recentlyProducts";

const initialState = [];

// eslint-disable-next-line default-param-last
export function recentlyProductsReducer(state = initialState, action) {
  switch (action.type) {
    case recentlyProducts.FILL_RECENTLY_PRODUCTS:
      // eslint-disable-next-line no-case-declarations,no-underscore-dangle
      const existingProductIndex = state.findIndex((product) => product._id === action.payload._id);

      if (existingProductIndex !== -1) {
        state.splice(existingProductIndex, 1);
        return [action.payload, ...state];
      }

      // eslint-disable-next-line no-case-declarations
      const updatedState = [action.payload, ...state];
      if (updatedState.length > 8) {
        updatedState.pop();
      }

      return updatedState;

    default:
      return state;
  }
}

export default recentlyProductsReducer;
