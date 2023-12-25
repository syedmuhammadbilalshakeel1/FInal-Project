import Benefits from "../../components/OurBenefitsList/OurBenefitsList";
import OurPartners from "../../components/OurPartners/OurPartners";
import TopItemsSlider from "../../components/TopItemsSlider/TopItemsSlider";
import TopProductItem from "../../components/TopProductItems/TopProductsItems";
import content from "../../components/OurBenefitsList/content.json";
import Categories from "../../components/Categories/Categories";
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import slides from "../../components/ReviewSlider/review-slider.json";

const Home = () => {
  return (
    <>
      <Categories />
      <TopItemsSlider />
      <OurPartners />
      <TopProductItem />
      <Benefits content={content} />
      <ReviewSlider slides={slides} />
    </>
  );
};

export default Home;
