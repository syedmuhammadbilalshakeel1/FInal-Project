import recentlyProductsReducer from "../reducers/recentlyProducts";
import recentlyProducts from "../type/recentlyProducts";

describe("recentlyProductsReducer", () => {
   it("should handle FILL_RECENTLY_PRODUCTS", () => {
      const initialState = [];

      const existingProduct = {
         _id: "123",
         name: "Product 1",
      };

      const newProduct = {
         _id: "456",
         name: "Product 2",
      };

      const action1 = {
         type: recentlyProducts.FILL_RECENTLY_PRODUCTS,
         payload: existingProduct,
      };

      const action2 = {
         type: recentlyProducts.FILL_RECENTLY_PRODUCTS,
         payload: newProduct,
      };

      const expectedState1 = [existingProduct];
      const expectedState2 = [newProduct, existingProduct];

      const state1 = recentlyProductsReducer(initialState, action1);
      expect(state1).toEqual(expectedState1);

      const state2 = recentlyProductsReducer(state1, action2);
      expect(state2).toEqual(expectedState2);
   });
});
