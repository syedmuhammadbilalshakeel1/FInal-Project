import Slider from "react-slick";
import { useEffect, useState } from "react";

export default function Gallery({imageUrls}) {
  const [mainImgUrl, setMainImgUrl] = useState("");
  const [isFullScreenImg, setIsFullScreenImg] = useState(false);

  const [sliderSettings, setSliderSettings] = useState({
    default: {
      className: "product-detail__slider",
      dots: false,
      infinite: false,
      slidesToShow: 0,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            vertical: true,
            verticalSwiping: true
          }
        },
        {
          breakpoint: 1023,
          settings: {
            vertical: false,
            verticalSwiping: false
          }
        }
      ]
    },
    fullSize: {
      dotsClass: "product-detail__fs-slider-dots",
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  });

  useEffect(() => {
    setMainImgUrl(imageUrls[0]);
    setSliderSettings({...sliderSettings, default: {...sliderSettings.default, slidesToShow: imageUrls.length > 4 ? 4 : imageUrls.length}});
  }, [imageUrls]);

  function onMainImgClick() {
    setIsFullScreenImg(true);
    document.querySelector("body").style.overflow = "hidden";
  }

  function onAdditionalImgClick(event) {
    setMainImgUrl(event.target.src);
    setSliderSettings({ ...sliderSettings, fullSize: {...sliderSettings.fullSize, initialSlide: +event.target.dataset.index} });
  }

  function close(event) {
    if (!["product-detail__fs-slider-img", "slick-arrow"].some((el) => event.target.classList.contains(el)) || event.code === "Escape") {
      setIsFullScreenImg(false);
      document.querySelector("body").style.overflow = "";
    }
  }
  return <>
    <div className="product-detail__gallery">
      <img className="product-detail__main-img" onClick={onMainImgClick} width="323px" height="222px" src={mainImgUrl} alt="main-img"/>
        <Slider {...sliderSettings.default}>{imageUrls.map((el, index) => <div key={index} className="product-detail__slider-img-wrap">
            <img className="product-detail__slider-img" onClick={onAdditionalImgClick} src={el} alt="img" data-index={index}/>
          </div>)}
        </Slider>
  </div>
  {isFullScreenImg && <div className="product-detail__fs-slider-wrap" onClick={close} onKeyDown={close}>
    <button className="product-detail__fs-slider-close-btn" onClick={close} type="button">&#10006;</button>
    <Slider {...sliderSettings.fullSize} className="product-detail__fs-slider" id="product-detail__fs-slider">
      {imageUrls.map((el, index) => <div key={index} className="product-detail__fs-slider-img-wrap"><img className="product-detail__fs-slider-img" src={el} alt="img"/></div>)}
    </Slider>
  </div>}
  </>;
}