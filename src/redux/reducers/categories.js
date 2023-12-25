import  categoriesTypes  from "../type/categories";


const initialState = {
  categories: [],
  loading: false,
  error: null,
};

// eslint-disable-next-line default-param-last
function categoriesReducer(state = initialState, action) {
    switch (action.type) {
      case categoriesTypes.CATEGORIES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case categoriesTypes.CATEGORIES_SUCCESS:
        return {
          ...state,
          categories: action.payload,
          loading: false,
          error: null,
        };
      case categoriesTypes.CATEGORIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }

export default categoriesReducer;