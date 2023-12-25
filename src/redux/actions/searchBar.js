import searchBarTypes from "../type/searchBar";

function setSearchProducts(data) {

    return {
        type: searchBarTypes.SEARCH_PRODUCTS_SUCCESS,
        payload: data,
    };
}

export default setSearchProducts;