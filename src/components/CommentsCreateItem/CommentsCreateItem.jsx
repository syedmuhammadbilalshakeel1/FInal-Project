import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCommentAsync, editCommentAsync } from "../../redux/actions/comments";
import StarRatingList from "./Components/StarRatingList";
import Textarea from "./Components/Textarea";
import RadioButton from "./Components/RadioButton";

export default function CommentsCreateItem({
 productID, disableActionBtns, setDisableActionBtns, maxContentLen = 500,
  editMode = false, setEditMode, editingData = {}
}) {
  const reviewRef = useRef(null);
  const advantagesRef = useRef(null);
  const disadvantagesRef = useRef(null);

  const [review, setReview] = useState(editMode ? editingData.review : "");
  const [advantages, setAdvantages] = useState(editMode ? editingData.advantages : "");
  const [disadvantages, setDisadvantages] = useState(editMode ? editingData.disadvantages : "");
  const [recommend, setRecommend] = useState(editMode ? editingData.recommend : true);

  const [starsRating, setStarsRating] =  useState(editMode ? editingData.starsRating : {
    price: 0,
    quality: 0,
    functionality: 0,
  });

  const { userInfo: { token} } = useSelector((state) => state.user );
  const dispatch = useDispatch();

  function deepEqual(obj1, obj2) {
    return typeof obj1 === "object" ? (
      Object.keys(obj1).length === Object.keys(obj2).length
      && Object.keys(obj1).every((key) => deepEqual(obj1[key], obj2[key]))
    ) : (obj1 === obj2);
  }

  function onSubmitBtnClick() {
    const newComment = editMode ? {
        content: review,
        date: Date.now(),
        recommend,
        starsRating: {
          ...starsRating,
          average: ((starsRating.price + starsRating.quality + starsRating.functionality) / 3).toFixed(1)
        },
        advantages,
        disadvantages
      }
      : {
        product: productID,
        content: review,
        date: Date.now(),
        recommend,
        starsRating: {
          ...starsRating,
          average: ((starsRating.price + starsRating.quality + starsRating.functionality) / 3).toFixed(1)
        },
        advantages,
        disadvantages
    };
    reviewRef.current.value = "";
    setReview("");
    setAdvantages("");
    setDisadvantages("");
    setRecommend(true);
    setStarsRating({
      price: 0,
      quality: 0,
      functionality: 0,
    });

    if (editMode) {
      const isChanged = !deepEqual(newComment, {
        content: editingData.review,
        recommend: editingData.recommend,
        starsRating: { ...editingData.starsRating },
        advantages: editingData.advantages,
        disadvantages: editingData.disadvantages,
        date: newComment.date
      });
      if (isChanged) dispatch(editCommentAsync(editingData.commentID, newComment, token));
      setEditMode(false);
    } else {
      dispatch(addNewCommentAsync(newComment, token));
    }
  }

  return <div className="comments__create-item-wrap">
    <StarRatingList starsRating={starsRating} setStarsRating={setStarsRating}/>
    <div className="comments__tradeoffs">
      <Textarea
        label="Advantages:"
        content={advantages}
        setContent={setAdvantages}
        refName={advantagesRef}
        maxContentLen={250}
        setDisableActionBtns={setDisableActionBtns}
        required={editMode && editingData.advantages !== ""}
      />
      <Textarea
        label="Disadvantages:"
        content={disadvantages}
        setContent={setDisadvantages}
        refName={disadvantagesRef}
        maxContentLen={250}
        setDisableActionBtns={setDisableActionBtns}
        required={editMode && editingData.disadvantages !== ""}
      />
    </div>
    <Textarea
      label="Review:"
      content={review}
      setContent={setReview}
      refName={reviewRef}
      maxContentLen={maxContentLen}
      setDisableActionBtns={setDisableActionBtns}
      required
    />
    <span className="comments__label comments__label--required">Recommend:</span>
    <div className="comments__radio-btn-wrap">
      <RadioButton id={editMode ? "recommendEditing" : "recommend"} name={editMode ? "recommendEditing" : "recommend"} value={"yes"} checked={recommend} changeHandler={setRecommend}/>
      <RadioButton id={editMode ? "notRecommendEditing" : "notRecommend"} name={editMode ? "notRecommendEditing" : "notRecommend"} value={"no"} checked={!recommend} changeHandler={setRecommend}/>
    </div>
    <button
      disabled={review === "" || Object.values(starsRating).some((value) => value === 0) || disableActionBtns || (editingData.advantages && advantagesRef.current && advantagesRef.current.value === "") || (editingData.disadvantages && disadvantagesRef.current && disadvantagesRef.current.value === "")}
      type="button"
      className="button comments__submit-btn"
      onClick={onSubmitBtnClick}
    >
      { editMode ? "Confirm" : "Send"}
    </button>
  </div>;
}