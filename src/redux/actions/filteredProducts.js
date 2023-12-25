import filteredProducts from "../type/filteredProducts";

export function addFilteredProducts(data) {
    return {
        type: filteredProducts.ADD_FILTERED_PRODUCTS,
        payload: data,
    };
}

export function removeFilteredProducts() {
return {
    type: filteredProducts.REMOVE_FILTERED_PRODUCTS
};
}