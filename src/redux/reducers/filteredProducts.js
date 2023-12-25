/* eslint-disable default-param-last */
import filteredProducts from "../type/filteredProducts";
import productTypes from "../type/products";

const initialState = {
    filteredProducts: []
};

export default function filteredProductsReducer(state = initialState, action) {
    switch (action.type) {
        case productTypes.FILL_PRODUCTS:
            return {
                ...state,
                filteredProducts: action.payload
            };
        case productTypes.SORT_PRODUCTS:
            return {
                ...state,
                filteredProducts: [...action.payload]
            };
        case filteredProducts.ADD_FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: action.payload
            };
        case filteredProducts.REMOVE_FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: []
            };
        default: return state;
    }
}