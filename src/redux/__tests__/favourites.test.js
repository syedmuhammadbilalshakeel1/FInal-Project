import configureStore from "redux-mock-store";
import favoritesReducer from "../reducers/favorites";
import { addToFavorites, removeFromFavorites } from "../actions/favorites";

const mockStore = configureStore([]);
const initialState = {
   favorites: [],
};

describe("favoritesReducer", () => {
   let store;

   beforeEach(() => {
      store = mockStore(initialState);
   });

   it("should handle ADD_TO_FAVORITES", () => {
      const product = { itemNo: "123", name: "Test Product" };
      const expectedActions = [
         {
            type: "ADD_TO_FAVORITES",
            payload: product,
         },
      ];

      store.dispatch(addToFavorites(product));
      const actions = store.getActions();
      const newState = actions.reduce(favoritesReducer, initialState);

      expect(actions).toEqual(expectedActions);
      expect(newState.favorites).toEqual([product]);
   });

   it("should handle REMOVE_FROM_FAVORITES", () => {
      const initialStateWithFavorites = {
         favorites: [
            { itemNo: "123", name: "Test Product 1" },
            { itemNo: "456", name: "Test Product 2" },
         ],
      };
      const expectedActions = [
         {
            type: "REMOVE_FROM_FAVORITES",
            payload: "123",
         },
      ];

      store = mockStore(initialStateWithFavorites);
      store.dispatch(removeFromFavorites("123"));
      const actions = store.getActions();
      const newState = actions.reduce(favoritesReducer, initialStateWithFavorites);

      expect(actions).toEqual(expectedActions);
      expect(newState.favorites).toEqual([{ itemNo: "456", name: "Test Product 2" }]);
   });
});
