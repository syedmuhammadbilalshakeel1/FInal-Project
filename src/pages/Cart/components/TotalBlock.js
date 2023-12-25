import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeEntireCart, removeEntireCartAsync, setCart } from "../../../redux/actions/cart";

const TotalBlock = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);
  const userToken = useSelector((state) => state.user.userInfo.token);

    const { currency, currencyName } = useSelector(
      (state) => state.currentCurrency
    );
  const currencyValue = parseFloat(currency);

  let totalOrderPrice = cartProducts.reduce((accumulator, item) => {
    const { product, cartQuantity } = item;
    const productTotalPrice = product.currentPrice * cartQuantity * currencyValue;
    return accumulator + productTotalPrice;
  }, 0);


  const onUpdateCart = () => {
    if (userToken) {
      const updatedCart = {
        products: cartProducts.map((item) => ({
          product: item.product._id,
          cartQuantity: item.cartQuantity
        }))
      };
      dispatch(setCart(updatedCart, userToken));
    }
  };
  const onDeleteCart = (token) => {
    if (token) {
      dispatch(removeEntireCartAsync(token));
    } else {
      dispatch(removeEntireCart());
    }
  };
  return (
    <div className="total-block">
      <div className="total-block-wrapper">
        <div className="total-block__item">
          <span className="total-block__label total-block__label-product">
            Subtotal
          </span>
          {/* <span className="total-block__value total-block__value-product">
            ${totalOrderPrice}
          </span> */}
          <span>:</span>

          <div className="total-block__value total-block__value-product">
            <img
              src={`https://res.cloudinary.com/dfinki0p4/image/upload/v1689412937/currency/${currencyName}-icon.png`}
              alt="cureency-icon"
            />
            <span>{Math.floor(totalOrderPrice)}</span>
          </div>
        </div>
      </div>
      <div className="cart-buttons">
        <Link to={"/"} className={"cart-button cart-button-close"} onClick={() => onDeleteCart(userToken)}>
          Clear and Close
        </Link>
        <Link
          to={"/checkout"}
          onClick={onUpdateCart}
          className="cart-button cart-button-checkout"
        >
          Check out
        </Link>
      </div>
    </div>
  );
};

export default TotalBlock;