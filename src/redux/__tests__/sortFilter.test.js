import sortFilterReducer from "../reducers/sortFilter";
import sortFilterTypes from "../type/sortFilter";

describe("sortFilterReducer", () => {
   it("should handle LOW_TO_HIGH", () => {
      const initialState = {
         sortValue: "+",
      };

      const action = {
         type: sortFilterTypes.LOW_TO_HIGH,
      };

      const expectedState = {
         sortValue: "+",
      };

      const newState = sortFilterReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle HIGH_TO_LOW", () => {
      const initialState = {
         sortValue: "+",
      };

      const action = {
         type: sortFilterTypes.HIGH_TO_LOW,
      };

      const expectedState = {
         sortValue: "-",
      };

      const newState = sortFilterReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should return current state for unknown action types", () => {
      const initialState = {
         sortValue: "+",
      };

      const action = {
         type: "UNKNOWN_ACTION_TYPE",
      };

      const newState = sortFilterReducer(initialState, action);

      expect(newState).toEqual(initialState);
   });
});
