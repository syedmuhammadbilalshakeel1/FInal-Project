import subcategoryReducer from "../reducers/subcategory";
import subCategoryType from "../type/subcategories";

describe("subcategoryReducer", () => {
   it("should handle ADD_SUBCATEGORY", () => {
      const initialState = {
         subcategory: "",
      };

      const action = {
         type: subCategoryType.ADD_SUBCATEGORY,
         payload: "Subcategory 1",
      };

      const expectedState = {
         subcategory: "Subcategory 1",
      };

      const newState = subcategoryReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle RESET_SUBCATEGORY", () => {
      const initialState = {
         subcategory: "Subcategory 1",
      };

      const action = {
         type: subCategoryType.RESET_SUBCATEGORY,
      };

      const expectedState = {
         subcategory: "",
      };

      const newState = subcategoryReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should return current state for unknown action types", () => {
      const initialState = {
         subcategory: "Subcategory 1",
      };

      const action = {
         type: "UNKNOWN_ACTION_TYPE",
      };

      const newState = subcategoryReducer(initialState, action);

      expect(newState).toEqual(initialState);
   });
});
