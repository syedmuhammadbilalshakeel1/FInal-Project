import { render } from "@testing-library/react";
import BenefitsItem from "../OurBenefitsItem/OurBenefitsItem";
import "@testing-library/jest-dom/extend-expect";

describe("BenefitsItem component", () => {
   test("renders title", () => {
      const data = {
         src: "/path/to/image.png",
         title: "Sample Title",
         text: "Sample Text",
      };

      const { getByText } = render(<BenefitsItem data={data} />);
      const titleElement = getByText(data.title);
      expect(titleElement).toBeInTheDocument();
   });

   test("renders text", () => {
      const data = {
         src: "/path/to/image.png",
         title: "Sample Title",
         text: "Sample Text",
      };

      const { getByText } = render(<BenefitsItem data={data} />);
      const textElement = getByText(data.text);
      expect(textElement).toBeInTheDocument();
   });

   test("renders image with correct src", () => {
      const data = {
         src: "/path/to/image.png",
         title: "Sample Title",
         text: "Sample Text",
      };

      const { getByAltText } = render(<BenefitsItem data={data} />);
      const imageElement = getByAltText("icon_benefits");
      expect(imageElement).toBeInTheDocument();
      expect(imageElement.src).toContain(data.src);
   });
});
