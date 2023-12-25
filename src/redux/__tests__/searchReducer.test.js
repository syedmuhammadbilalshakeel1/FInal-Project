import searchBarReducer from "../reducers/searchBar";
import searchBarTypes from "../type/searchBar";

describe("searchBarReducer", () => {
   it("should handle  SEARCH_PRODUCTS_SUCCESS", () => {
      const initialState = {
         searchResults: []
      };

      const action = {
         type: searchBarTypes.SEARCH_PRODUCTS_SUCCESS,
         payload: ["Product 1"],
      };

      const expectedState = {
         searchResults: ["Product 1"]
      };

      const newState = searchBarReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should return error when failure", () => {
      const initialState = {
         searchResults: []
      };

      const action = {
         type: searchBarTypes.SEARCH_PRODUCTS_FAILURE,
         payload: []
      };

      const newState = searchBarReducer(initialState, action);

      expect(newState).toEqual(initialState);
   });
});