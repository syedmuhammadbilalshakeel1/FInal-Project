import React, { forwardRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toggleCardBtn from "../../redux/actions/card";
import { reset } from "../../redux/actions/counterFilter";

const FilterMini = forwardRef((props, ref) => {
  const [isOpenWhat, setIsOpenWhat] = useState(true);
  const IsOpen = useSelector((state) => state.toggleCard.cardView);
  const { count } = useSelector(
    (state) => state.countFilter
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
     dispatch(reset());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        dispatch(toggleCardBtn(true));
      } else if (!isOpenWhat && window.innerWidth < 640) {
        dispatch(toggleCardBtn(false));
      } else if (isOpenWhat && window.innerWidth < 640) { dispatch(toggleCardBtn(true)); }

    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [dispatch, isOpenWhat, IsOpen]);

  function IsOpenFalse() {
    dispatch(toggleCardBtn(false));
    setIsOpenWhat(false);
  }

  function IsOpenTrue() {
    dispatch(toggleCardBtn(true));
    setIsOpenWhat(true);
  }

  return (
    <>
      <div className="filter-section-mini visibility" ref={ref}>
        <div className="filter-section-mini-container">
          <button onClick={props.toggle} type="button" className="filter-section-mini-text">Filter({count})</button>
          {/* eslint-disable-next-line no-unused-expressions */}
          <button
            // eslint-disable-next-line no-unused-expressions
            onClick={() => { IsOpen ? IsOpenFalse() : IsOpenTrue(); }}
            type="button"
            className="filter-section-mini-container__img">
            {IsOpen ? <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              baseProfile="tiny"
              version="1.2"
              viewBox="0 0 24 24"
              id="menu">
              <path
                d="M8 3H6a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 3 6v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 6 11h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 11 8V6a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 8 3zm10 0h-2a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 13 6v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 16 11h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 21 8V6a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 18 3zM8 13H6a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 3 16v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 6 21h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 11 18v-2a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 8 13zm10 0h-2a2.99 2.99 0 0 0-2.119.881A2.99 2.99 0 0 0 13 16v2c0 .825.337 1.575.881 2.119A2.99 2.99 0 0 0 16 21h2a2.99 2.99 0 0 0 2.119-.881A2.99 2.99 0 0 0 21 18v-2a2.99 2.99 0 0 0-.881-2.119A2.99 2.99 0 0 0 18 13z"></path>
            </svg> : <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              baseProfile="tiny"
              version="1.2"
              viewBox="0 0 24 24"
              id="menu"
            >
              <path d="M3 4h18v2H3zM3 11h18v2H3zM3 18h18v2H3z" />
            </svg>}
          </button>
        </div>
      </div>
    </>
  );
});

export default FilterMini;