import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CartItems from "../CartItems/CartItems";

afterEach(cleanup);

test("renders item title and price", () => {
   const { getByText } = render(<CartItems />);
   const itemTitle = getByText("Logitech G99");
   const itemPrice = getByText("$10");
   expect(itemTitle).toBeInTheDocument();
   expect(itemPrice).toBeInTheDocument();
});

test("displays item image", () => {
   const { getByAltText } = render(<CartItems />);
   const itemImage = getByAltText("item-img");
   expect(itemImage).toBeInTheDocument();
});

