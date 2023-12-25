import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Confetti from "react-confetti";
import setPagePath from "../../redux/actions/pagePath";


function ThankYou() {
  const dispatch = useDispatch();
  const orderNumber = useSelector((state) => state.orders.orderNumber);
  const [isconfetti, setIsConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
 });
  
  const handleClick = (path) => {
    dispatch(setPagePath(`${path}`));
  };
 
  function handdleWindowSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
}
  useEffect(() => {
    window.onresize = () => handdleWindowSize();
    const timer = setTimeout(() => {
      setIsConfetti(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);
    
  return (
    <section className="thankyou-section__wrapper">
      {isconfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}
      <div className="container">
        <div className="thankyou-section__title">
          <h1>Thank You for your order!</h1>
        </div>

        <div className="thankyou-section__text">
          <p>
            Your order#:&nbsp;
            <span className="thankyou-section__text-order-number">
              {orderNumber}
            </span>
          </p>
          <p>Our manager will get back to you shortly.</p>

          <p>
            Please{" "}
            <Link
              onClick={() => handleClick("about")}
              to={"/about"}
              className="thankyou-section__text-link"
            >
              contact us
            </Link>{" "}
            if you have any questions.
          </p>
          <p>
            Return to &nbsp;
            <Link
              onClick={() => handleClick("home")}
              to={"/"}
              className="thankyou-section__text-link"
            >
              home page.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;
