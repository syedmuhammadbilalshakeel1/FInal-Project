import React, { useState } from "react";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { deleteCommentAsync } from "../../redux/actions/comments";
import CommentsCreateItem from "../CommentsCreateItem/CommentsCreateItem";

export default function CommentsItem({
  comment,
  disableActionBtns, setDisableActionBtns,
}) {
  const {
    _id: commentID,  product: productID,
    customer: {
      firstName, lastName, _id: customerID, avatarUrl
    },
    date, content, starsRating = {}, recommend, advantages = "", disadvantages = ""
  } = comment;

  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const  {userInfo: {token, _id: userID}} = useSelector((state) => state.user);

  const starsSettings = {
    itemStyles: {
      itemShapes: RoundedStar,
      activeFillColor: "#ffb700",
      inactiveFillColor: "#d6d6d6"
    },
    readOnly: true,
  };

  const progressbarSettings = {
    value: (starsRating.average / 5) * 100,
    text: starsRating.average,
    styles: buildStyles({
      textSize: "36px",
      pathColor: "#a2c617",
      textColor: "#393d45",
      trailColor: "#d6d6d6",
    })
  };

  function onDeleteBtnClick() {
    dispatch(deleteCommentAsync(commentID, token));
  }

  function onEditBtnClick() {
    setEditMode(true);
  }

  return <>
    <div className="comments__item-header">
      {
        avatarUrl === "none"
        ? <Avatar className="comments__item-avatar" name={`${firstName} ${lastName}`} size="50" round />
        : <Avatar className="comments__item-avatar" src={avatarUrl} size="50" round />
      }

      <p className="comments__item-name">{firstName} {lastName}</p>
      {userID === customerID ? <span className="comments__active-user">you</span> : null}
      <span className="comments__item-date">
        {new Date(date).toLocaleString("en-UA", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </span>
    </div>
    {
      editMode
      ? <CommentsCreateItem
          editMode
          setEditMode={setEditMode}
          editingData={{
            review: content,
            commentID,
            advantages,
            disadvantages,
            recommend,
            starsRating
          }}
          productID={productID}
          disableActionBtns={disableActionBtns}
          setDisableActionBtns={setDisableActionBtns}
        />
      : <div>
          <div className="comments__rating-wrap comments__rating-wrap--readonly">
            <CircularProgressbar className="comments__progress comments__progress--readonly" {...progressbarSettings} />
            <div className="comments__stars-wrap--readonly">
            {
              Object.entries(starsRating).map(([key,  value], index) => (
              key !== "average"
                ? <span key={index} className="comments__label comments__label--small">
                    <Rating
                      {...starsSettings}
                      className="comments__stars comments__stars--readonly"
                      value={+value}
                    />
                  {key}
                  </span>
                : null
              ))
            }
            </div>
            <p className={`comments__label comments__label--uppercase ${recommend ? "comments__label--green" : "comments__label--red"}`}>{recommend ? "Recommends" : "Doesn't recommend"}</p>
          </div>
        <div className="comments__tradeoffs">
          {
            advantages && <div className="comments__tradeoffs-item">
              <span className="comments__label comments__label--readonly comments__label--green">Advantages</span>
              <p className="comments__item-content">{advantages}</p>
            </div>
          }
          {
            disadvantages && <div className="comments__tradeoffs-item comments__disadvantages">
              <span className="comments__label comments__label--readonly comments__label--red">Disadvantages</span>
              <p className="comments__item-content">{disadvantages}</p>
            </div>
          }
        </div>
        <div className="comments__review">
          <span className="comments__label comments__label--readonly">Review</span>
          <p className="comments__item-content">{content}</p>
        </div>
      </div>
    }
    {
      userID === customerID && !editMode
        ? <div className="comments__actions">
          <button
            type="button"
            className="button comments__action-btn"
            disabled={disableActionBtns}
            onClick={onDeleteBtnClick}
          >
            Delete
          </button>
          <button
            type="button"
            className="button comments__action-btn"
            disabled={disableActionBtns}
            onClick={onEditBtnClick}
          >
            Edit
          </button>
        </div>
        : null
    }
  </>;
}