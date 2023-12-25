import React from "react";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function StarRatingList({starsRating, setStarsRating}) {

  const starsSettings = {
    isRequired: true,
    transition: "colors",
    itemStyles: {
      itemShapes: RoundedStar,
      activeFillColor: "#ffb700",
      inactiveFillColor: "#d6d6d6"
    },
    visibleLabelId: "staff_rating",
  };

  const percentage = ((starsRating.price + starsRating.quality + starsRating.functionality) / 3).toFixed(1);
  const percentageValue = (((starsRating.price + starsRating.quality + starsRating.functionality) / 3 / 5) * 100);

  const progressbarSettings = {
    value: percentageValue,
    text: percentage,
    styles: buildStyles({
      textSize: "24px",
      pathTransitionDuration: 0.5,
      pathColor: "#a2c617",
      textColor: percentage === "0.0" ? "#d6d6d6" : "#393d45",
      trailColor: "#d6d6d6",
    })
  };

  return <div className="comments__rating-wrap">
    <ul className="comments__rating-list">
      {["price", "quality", "functionality"]
        .map((el, index) => <li key={index} className="comments__rating-item">
          <span className="comments__label comments__label--required">{el}:</span>
           <Rating
            {...starsSettings}
            className="comments__stars"
            name={`${el}Rating`}
            value={starsRating[el]}
            onChange={(selectedValue) => {
              setStarsRating((prevData) => ({ ...prevData, [el]: selectedValue}));
            }}
           />
        </li> )}
    </ul>
    <CircularProgressbar className="comments__progress" {...progressbarSettings} />
  </div>;
}