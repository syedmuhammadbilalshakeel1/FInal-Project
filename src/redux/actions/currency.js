import currencyTypes from "../type/currency";

export default function setCurrency(value, name) {
   return {
      type: currencyTypes.SET_CURRENCY,
      payload: { value, name },
   };
}