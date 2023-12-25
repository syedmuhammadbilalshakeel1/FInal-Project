import pagePathReducer from "../reducers/pagePath";
import pagePathTypes from "../type/pagePath";

describe("pagePathReducer", () => {
   it("should handle SET_PAGE_PATH", () => {
      const initialState = {
         pagePath: "home",
      };

      const action = {
         type: pagePathTypes.SET_PAGE_PATH,
         payload: "cart",
      };

      const expectedState = {
         pagePath: "cart"
      };

      const newState = pagePathReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });
});