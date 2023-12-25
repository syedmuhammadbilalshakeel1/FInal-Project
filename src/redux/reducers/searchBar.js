import searchBarTypes from "../type/searchBar";

const initialState = {
    searchResults: []
};
// eslint-disable-next-line default-param-last
function searchBarReducer(state = initialState, action) {
    switch (action.type) {
        case searchBarTypes.SEARCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                searchResults: action.payload
            };
        case searchBarTypes.SEARCH_PRODUCTS_FAILURE:
            return {
                ...state,
                searchResults: []
            };
        default:
            return state;
    }
}

export default searchBarReducer;
