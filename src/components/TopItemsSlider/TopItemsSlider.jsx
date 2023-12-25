import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Store } from "react-notifications-component";
import useServer from "../../hooks/useServer";
import Skeleton from "./Skeleton";
import notificationsSettings from "../../constants/constants";

const TopItemsSlider = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getSlides } = useServer();

  useEffect(() => {
    const fetchSlider = async () => {
      setIsLoading(true);
      try {
        const products = await getSlides();
        setIsLoading(false);
        setItems(products);
      } catch (err) {
        Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: err.message });
      }
    };

    fetchSlider();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true
  };

  return (
    <section className="top-items__slider">
      {!isLoading ? <Slider {...settings}>
        {items.map((item, index) => (
          <div className="top-items" key={index}>
            <div className="container">
              <h1 type="button" className="top-items__title">{item.title}</h1>
              <h3 className="top-items__text">{item.text}</h3>
              <h3 className="top-items__subtext">{item.subtext}</h3>
              <Link to={`/products/${item.itemNo}`} className="top-items__link">
                <button type="button" className="top-items__btn">Shop Now</button>
              </Link>
            </div>
            <img className="top-items__img" src={item.imageUrl} alt={item.text} />
          </div>
        ))}
      </Slider> : <div className="skeleton__loader"><Skeleton /></div>}

    </section>
  );
};

export default TopItemsSlider;
