import configureStore from "redux-mock-store";
import favoritesCountReducer from "../reducers/favoritesCountReducer";

const mockStore = configureStore([]);
const initialState = {
   favoritesCount: 0,
};

describe("favoritesCountReducer", () => {
   let store;

   beforeEach(() => {
      store = mockStore(initialState);
   });

   it("should handle INCREMENT_FAVORITES_COUNT", () => {
      const expectedActions = [
         {
            type: "INCREMENT_FAVORITES_COUNT",
         },
      ];

      store.dispatch({ type: "INCREMENT_FAVORITES_COUNT" });
      const actions = store.getActions();
      const newState = actions.reduce(favoritesCountReducer, initialState);

      expect(actions).toEqual(expectedActions);
      expect(newState.favoritesCount).toEqual(1);
   });

   it("should handle DECREMENT_FAVORITES_COUNT", () => {
      const initialStateWithFavoritesCount = {
         favoritesCount: 2,
      };
      const expectedActions = [
         {
            type: "DECREMENT_FAVORITES_COUNT",
         },
      ];

      store = mockStore(initialStateWithFavoritesCount);
      store.dispatch({ type: "DECREMENT_FAVORITES_COUNT" });
      const actions = store.getActions();
      const newState = actions.reduce(favoritesCountReducer, initialStateWithFavoritesCount);

      expect(actions).toEqual(expectedActions);
      expect(newState.favoritesCount).toEqual(1);
   });

   it("should return initial state for unknown action type", () => {
      const action = {
         type: "UNKNOWN_ACTION",
         payload: "someValue",
      };

      const newState = favoritesCountReducer(initialState, action);

      expect(newState).toEqual(initialState);
   });
});
