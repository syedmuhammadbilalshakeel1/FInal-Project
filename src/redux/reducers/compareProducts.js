/* eslint-disable default-param-last */
import compareProducts from "../type/compareProducts";


const initialState = {
    compareProducts: []
};

export default function compareProductsReducer(state = initialState, action) {
    switch (action.type) {
        case compareProducts.ADD_COMPARE_PRODUCTS:
            return {
                ...state,
                compareProducts: [...state.compareProducts, action.payload]
            };
        case compareProducts.REMOVE_COMPARE_PRODUCTS:
            return {
                ...state,
                compareProducts: state.compareProducts.filter((item) => item !== action.payload)
            };
            case compareProducts.DELETE_ALL_COMPARE_PRODUCTS:
                return {
                    ...state,
                    compareProducts: []
                };
        default: return state;
    }
}