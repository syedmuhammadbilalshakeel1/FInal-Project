import currencyReducer from "../reducers/currency";
import currencyTypes from "../type/currency";

describe("currencyReducer", () => {
   it("should handle SET_CURRENCY", () => {
      const initialState = {
         currency: 1,
         currencyName: "USD",
      };

      const action = {
         type: currencyTypes.SET_CURRENCY,
         payload: {
            value: 1.2,
            name: "EUR",
         },
      };

      const expectedState = {
         currency: 1.2,
         currencyName: "EUR",
      };

      const newState = currencyReducer(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should return current state for unknown action types", () => {
      const initialState = {
         currency: 0.8,
         currencyName: "GBP",
      };

      const action = {
         type: "UNKNOWN_ACTION_TYPE",
      };

      const newState = currencyReducer(initialState, action);

      expect(newState).toEqual(initialState);
   });
});
