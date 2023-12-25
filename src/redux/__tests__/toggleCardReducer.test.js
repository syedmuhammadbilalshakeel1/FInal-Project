import toggleCardReduser from "../reducers/toggleCard";
import toggleCard from "../type/toggleCard";

describe("toggleCardReduser", () => {
   it("should handle TOGGLE_CARD", () => {
      const initialState = {
         cardView: true,
      };

      const action = {
         type: toggleCard.TOGGLE_CARD,
         payload: false,
      };

      const expectedState = {
         cardView: false,
      };

      const newState = toggleCardReduser(initialState, action);

      expect(newState).toEqual(expectedState);
   });

   it("should return current state for unknown action types", () => {
      const initialState = {
         cardView: true,
      };

      const action = {
         type: "UNKNOWN_ACTION_TYPE",
      };

      const newState = toggleCardReduser(initialState, action);

      expect(newState).toEqual(initialState);
   });
});
