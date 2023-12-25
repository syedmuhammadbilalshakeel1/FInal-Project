import categoriesReducer from "../reducers/categories";
import categoriesTypes from "../type/categories";

describe("categoriesReducer", () => {
   it("should handle CATEGORIES_REQUEST", () => {
      const initialState = {
         categories: [],
         loading: false,
         error: null,
      };

      const action = {
         type: categoriesTypes.CATEGORIES_REQUEST,
      };

      const expectedState = {
         categories: [],
         loading: true,
         error: null,
      };

      const newState = categoriesReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle CATEGORIES_SUCCESS", () => {
      const initialState = {
         categories: [],
         loading: true,
         error: null,
      };

      const action = {
         type: categoriesTypes.CATEGORIES_SUCCESS,
         payload: ["Category 1", "Category 2"],
      };

      const expectedState = {
         categories: ["Category 1", "Category 2"],
         loading: false,
         error: null,
      };

      const newState = categoriesReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle CATEGORIES_FAILURE", () => {
      const initialState = {
         categories: [],
         loading: true,
         error: null,
      };

      const action = {
         type: categoriesTypes.CATEGORIES_FAILURE,
         payload: "Error fetching categories",
      };

      const expectedState = {
         categories: [],
         loading: false,
         error: "Error fetching categories",
      };

      const newState = categoriesReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should return current state for unknown action types", () => {
      const initialState = {
         categories: ["Category 1", "Category 2"],
         loading: false,
         error: null,
      };

      const action = {
         type: "UNKNOWN_ACTION_TYPE",
      };

      const newState = categoriesReducer(initialState, action);

      expect(newState).toEqual(initialState);
   });
});
