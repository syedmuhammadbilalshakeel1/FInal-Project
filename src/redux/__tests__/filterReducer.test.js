import filteredProductsReducer from "../reducers/filteredProducts";
import filteredProducts from "../type/filteredProducts";
import productTypes from "../type/products";

describe("filteredProductsReducer", () => {
   it("should handle FILL_PRODUCTS", () => {
      const initialState = {
         filteredProducts: [],
      };

      const action = {
         type: productTypes.FILL_PRODUCTS,
         payload: ["Product 1", "Product 2"],
      };

      const expectedState = {
         filteredProducts: ["Product 1", "Product 2"],
      };

      const newState = filteredProductsReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle SORT_PRODUCTS", () => {
      const initialState = {
         filteredProducts: ["Product 1", "Product 2", "Product 3"],
      };

      const action = {
         type: productTypes.SORT_PRODUCTS,
         payload: ["Product 3", "Product 1", "Product 2"],
      };

      const expectedState = {
         filteredProducts: ["Product 3", "Product 1", "Product 2"],
      };

      const newState = filteredProductsReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle ADD_FILTERED_PRODUCTS", () => {
      const initialState = {
         filteredProducts: [],
      };

      const action = {
         type: filteredProducts.ADD_FILTERED_PRODUCTS,
         payload: ["Product 1", "Product 2"],
      };

      const expectedState = {
         filteredProducts: ["Product 1", "Product 2"],
      };

      const newState = filteredProductsReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle REMOVE_FILTERED_PRODUCTS", () => {
      const initialState = {
         filteredProducts: ["Product 1", "Product 2"],
      };

      const action = {
         type: filteredProducts.REMOVE_FILTERED_PRODUCTS,
      };

      const expectedState = {
         filteredProducts: [],
      };

      const newState = filteredProductsReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should return current state for unknown action types", () => {
      const initialState = {
         filteredProducts: ["Product 1", "Product 2"],
      };

      const action = {
         type: "UNKNOWN_ACTION_TYPE",
      };

      const newState = filteredProductsReducer(initialState, action);

      expect(newState).toEqual(initialState);
   });
});
