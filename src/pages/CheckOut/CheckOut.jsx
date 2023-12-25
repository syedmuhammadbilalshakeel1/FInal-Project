/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  faAngleDown,
  faAngleUp,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../../components/BreadCrumb/BreadCrumb";
import CartList from "../../components/CartList/CartList";
import { fetchCart } from "../../redux/actions/cart";
import CartSkeleton from "../Cart/components/CartSkeleton";
import DeliveryForm from "./components/DeliveryForm/DeliveryForm";

function CheckOut() {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState(2);
  const [isNovaPoshtaDelivery, setIsNovaPoshtaDelivery] = useState(true);
  const { currency, currencyName } = useSelector(
    (state) => state.currentCurrency
  );
  const currencyValue = parseFloat(currency);
  const userToken = useSelector((state) => state.user.userInfo.token);
  const cartQuantity = useSelector((state) => state.cart.cart);
  const cartProducts = useSelector((state) => state.cart.cart);
  const totalOrderPrice = cartProducts.reduce((accumulator, item) => {
    const { product, cartQuantity } = item;
    const productTotalPrice = product.currentPrice * cartQuantity * currencyValue;
    return accumulator + productTotalPrice;
  }, 0);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  useEffect(() => {
    if (cartProducts.length === 0 && userToken) {
      dispatch(fetchCart(userToken));
    }
  }, [userToken]);

  return (
    <>
      <Breadcrumb />
      <section className="checkout-section__wrapper">
        <div className="checkout-section__product-wrapper">
          <div className="checkout-section__product-header">
            <div className="checkout-section__product-header-summary">
              <span className="checkout-section__product-qty">
                Your bag &nbsp;
                {cartQuantity.length >= 1 ? (
                  <span className="">({cartQuantity.length})</span>
                ) : null}
              </span>
              <button
                className={`checkout-section__product-btn ${
                  activeButton === 1 ? "active" : ""
                }`}
                onClick={() => handleButtonClick(1)}
              >
                Show order summary &nbsp;
                <FontAwesomeIcon icon={faAngleDown} className="icon-arrow" />
              </button>
              <button
                className={`checkout-section__product-btn ${
                  activeButton === 2 ? "active" : ""
                }`}
                onClick={() => handleButtonClick(2)}
              >
                Hide order summary &nbsp;
                <FontAwesomeIcon icon={faAngleUp} className="icon-arrow" />
              </button>
            </div>
            <div
              className={`checkout-section__product-item-wrapper ${
                activeButton === 2 ? "active" : ""
              }`}
            >
              {cartProducts.length !== 0 ? <CartList /> : <CartSkeleton />}

              <div className="checkout-section__product-summary-mobile">
                <div className="checkout-section__product-summary-mobile-shipping-method">
                  <span className="">
                    {isNovaPoshtaDelivery
                      ? "Nova Poshta shipping"
                      : "Store pickup"}
                  </span>
                  <span className="">
                    {isNovaPoshtaDelivery ? "" : <span>Free</span>}
                  </span>
                </div>
                <div className="checkout-section__product-summary-mobile-total">
                  <span className="">Total</span>
                  <span className="">{totalOrderPrice}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="checkout-section__product-summary-computer">
            <h4 className="">Order summary</h4>
            <div className="checkout-section__product-summary-computer-shipping">
              <span className="">Shipping method</span>
            </div>
            <div className="checkout-section__product-summary-computer-shipping-method">
              <span className="">
                {isNovaPoshtaDelivery ? "Nova Poshta shipping" : "Store pickup"}
              </span>
              {isNovaPoshtaDelivery ? "" : <span>Free</span>}
            </div>

            <div className="checkout-section__product-summary-computer-total">
              <span className="">Total</span>
              <div className="checkout-section__product-summary-computer-total-price">
                <img
                  src={`https://res.cloudinary.com/dfinki0p4/image/upload/v1689412937/currency/${currencyName}-icon.png`}
                  alt="cureency-icon"
                />
                <span>{Math.floor(totalOrderPrice)}</span>
              </div>
            </div>
          </div>
          <div className="computer-version">
            <div className="checkout-section__security">
              <div className="checkout-section__security-title">
                <p>
                  <span className="">
                    <FontAwesomeIcon icon={faLock} />
                    &nbsp; We care about your security
                  </span>
                </p>
                <div className="checkout-section__security-help">
                  <span className="">
                    Do you need help with your order? Give us a call at
                  </span>
                  <br />
                  <span className="checkout-section__security-help-cell">
                    +380674106214
                  </span>{" "}
                  <span className="">
                    or{" "}
                    <Link
                      to={"/about"}
                      className="checkout-section__security-help-contact"
                    >
                      contact us
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DeliveryForm
          isNovaPoshtaDelivery={isNovaPoshtaDelivery}
          setIsNovaPoshtaDelivery={setIsNovaPoshtaDelivery}
        />
        <div className="mobile-version">
          <div className="checkout-section__security">
            <div className="checkout-section__security-title">
              <p>
                <span className="">
                  <FontAwesomeIcon icon={faLock} />
                  &nbsp; We care about your security
                </span>
              </p>
              <div className="checkout-section__security-help">
                <span className="">
                  Do you need help with your order? Give us a call at
                </span>
                <br />
                <span className="checkout-section__security-help-cell">
                  +358295938
                </span>{" "}
                <span className="">
                  or{" "}
                  <Link
                    to={"/about"}
                    className="checkout-section__security-help-contact"
                  >
                    contact us
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CheckOut;
