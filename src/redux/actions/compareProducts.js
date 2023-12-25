import compareProducts from "../type/compareProducts";

export function addCompareProducts(data) {
    return {
        type: compareProducts.ADD_COMPARE_PRODUCTS,
        payload: data,
    };
}

export function removeCompareProducts(data) {
return {
    type: compareProducts.REMOVE_COMPARE_PRODUCTS,
    payload: data,
};
}

export function deleteAllCompareProducts() {
    return {
        type: compareProducts.DELETE_ALL_COMPARE_PRODUCTS,
    };
    }

