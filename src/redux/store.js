import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pagePathReducer from "./reducers/pagePath";
import categories from "./reducers/categories";
import userReducer from "./reducers/user";
import counterFilterReducer from "./reducers/counterFilter";
import filteredProductsReducer from "./reducers/filteredProducts";
import sortFilterReducer from "./reducers/sortFilter";
import searchReducer from "./reducers/searchBar";
import toggleCardReduser from "./reducers/card";
import subcategoryReducer from "./reducers/subcategory";
import currencyReducer from "./reducers/currency";
import { recentlyProductsReducer } from "./reducers/recentlyProducts";
import cartReducer from "./reducers/cart";
import compareProductsReducer from "./reducers/compareProducts";
import favoritesReducer from "./reducers/favorites";
import commentsReducer from "./reducers/comments";
import ordersReducer from "./reducers/orders";


const rootReducer = combineReducers({
  currentPath: pagePathReducer,
  categories,
  user: userReducer,
  countFilter: counterFilterReducer,
  filteredProducts: filteredProductsReducer,
  sortFilter: sortFilterReducer,
  search: searchReducer,
  toggleCard: toggleCardReduser,
  subcategory: subcategoryReducer,
  currentCurrency: currencyReducer,
  recentlyProducts: recentlyProductsReducer,
  cart: cartReducer,
  compareProducts: compareProductsReducer,
  favorites: favoritesReducer,
  comments: commentsReducer,
  orders: ordersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "countFilter",
   "filteredProducts",
    "search",
    "toggleCard",
    "currentCurrency",
    "currentPath",
    "comments",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
