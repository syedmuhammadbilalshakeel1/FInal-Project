import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation, Pagination, Scrollbar, A11y
} from "swiper";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import { Image } from "cloudinary-react";
import cloudinaryConfig from "../../config/cloudinaryConfig";

function ReviewSlider({ slides }) {
  return (
    <section className="review__wrapper">
      <div className="review-section__section">
        <div className="review-section__title">
          <h1>Help us Improve our productivity</h1>
        </div>
        <Swiper
          className="review-section__center"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          // eslint-disable-next-line react/jsx-props-no-multi-spaces, react/jsx-boolean-value
          loop={true}

        >
          {slides.map((slide) => (
            <SwiperSlide className="article" key={slide.image}>
              <Image cloudName={cloudinaryConfig.cloudName} className="review-section__img" publicId={slide.image} alt="" />
              <h4 className="review-section__name">{slide.name}</h4>
              <p className="review-section__client">{slide.title}</p>
              <p className="review-section__text">{slide.text}</p>
            </SwiperSlide>
          ))}
          <RxDoubleArrowLeft className="swiper-button-prev prev" />
          <RxDoubleArrowRight className="swiper-button-next next" />
        </Swiper>
      </div>
    </section>
  );
}

export default ReviewSlider;
