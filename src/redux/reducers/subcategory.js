/* eslint-disable default-param-last */
import subCategoryType from "../type/subcategories";

const initialState = {
    subcategory: "",
};

export default function subcategoryReducer(state = initialState, action) {
    switch (action.type) {
        case subCategoryType.ADD_SUBCATEGORY:
            return {
                ...state,
                subcategory: action.payload,
            };
        case subCategoryType.RESET_SUBCATEGORY:
            return {
                ...state,
                subcategory: ""
            };
        default: return state;
        }
        
    }