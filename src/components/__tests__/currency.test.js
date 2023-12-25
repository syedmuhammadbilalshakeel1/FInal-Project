import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Currency from "../Currency/Currency";

const store = createStore(() => ({}));

describe("Currency component", () => {
   test("renders currency select with default value", () => {
      const { getByRole } = render(
         <Provider store={store}>
            <Currency />
         </Provider>
      );
      const currencySelect = getByRole("combobox");
      expect(currencySelect).toBeInTheDocument();
      expect(currencySelect.value).toBe("USD");
   });

   test("updates value when currency select is changed", () => {
      const { getByRole } = render(
         <Provider store={store}>
            <Currency />
         </Provider>
      );
      const currencySelect = getByRole("combobox");

      fireEvent.change(currencySelect, { target: { value: "EUR" } });

      expect(currencySelect.value).toBe("EUR");
   });
});