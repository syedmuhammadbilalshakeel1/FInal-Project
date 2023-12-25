/* eslint-disable default-param-last */
import currencyTypes from "../type/currency";

const initialState = {
   currency: 1,
   currencyName: "USD"
};

export default function currencyReducer(state = initialState, action) {
   switch (action.type) {
      case currencyTypes.SET_CURRENCY:
         return {
            currency: action.payload.value,
            currencyName: action.payload.name
         };
      default: return state;
   }
}