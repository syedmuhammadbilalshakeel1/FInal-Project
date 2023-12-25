import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../Footer/Footer";

describe("Footer component", () => {
   test("renders footer title", () => {
      const { getByText } = render(<Footer />);
      const footerTitle = getByText("Innovation Oasis");
      expect(footerTitle).toBeInTheDocument();
   });

   test("renders footer subtitle", () => {
      const { getByText } = render(<Footer />);
      const footerSubtitle = getByText("©Copyright 2023. Created by OurTeam");
      expect(footerSubtitle).toBeInTheDocument();
   });

   test("renders social media icons", () => {
      const { container } = render(<Footer />);
      const socialIcons = container.querySelectorAll(".social-icons__item");
      expect(socialIcons).toHaveLength(4);
   });
});
