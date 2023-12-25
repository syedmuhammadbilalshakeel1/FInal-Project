import counterFilterReducer from "../reducers/counterFilter";
import counterFilterTypes from "../type/counterFilter";

describe("counterFilterReducer", () => {
   it("should handle INCREASE_COUNTER", () => {
      const initialState = {
         count: 0,
      };

      const action = {
         type: counterFilterTypes.INCREASE_COUNTER,
      };

      const expectedState = {
         count: 1,
      };

      const newState = counterFilterReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle DECREASE_COUNTER", () => {
      const initialState = {
         count: 3,
      };

      const action = {
         type: counterFilterTypes.DECREASE_COUNTER,
      };

      const expectedState = {
         count: 2,
      };

      const newState = counterFilterReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle RESET_COUNTER", () => {
      const initialState = {
         count: 5,
      };

      const action = {
         type: counterFilterTypes.RESET_COUNTER,
      };

      const expectedState = {
         count: 0,
      };

      const newState = counterFilterReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should handle ALL_SUBCATEGORIES_COUNTER", () => {
      const initialState = {
         count: 0,
      };

      const action = {
         type: counterFilterTypes.ALL_SUBCATEGORIES_COUNTER,
         payload: 10,
      };

      const expectedState = {
         count: 10,
      };

      const newState = counterFilterReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should return current state for unknown action types", () => {
      const initialState = {
         count: 7,
      };

      const action = {
         type: "UNKNOWN_ACTION_TYPE",
      };

      const newState = counterFilterReducer(initialState, action);

      expect(newState).toEqual(initialState);
   });
});
