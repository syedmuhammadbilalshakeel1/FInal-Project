import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function OrderItem({ product, cartQuantity }) {
    const { currency, currencyName } = useSelector(
      (state) => state.currentCurrency
    );

    const currencyValue = parseFloat(currency);

  return (
    <li className="orders-section-sub-list-item">
      <Link
        className="orders-section-sub-list-item-img-wrap"
        to={`/products/${product.itemNo}`}
      >
        {" "}
        <img
          className="orders-section-sub-list-item-img"
          src={product.imageUrls[0]}
          alt="item-img"
        />
      </Link>
      <div className="orders-section-sub-list-item-details">
        <p className="orders-section-sub-list-item-details-name">
          {product.name}
        </p>
        <p className="orders-section-sub-list-item-details-qty">
          {cartQuantity} pcs
        </p>
        <div className="orders-section-sub-list-item-details-price">
          <div className="checkout-section__product-summary-computer-total-price">
            <img
              src={`https://res.cloudinary.com/dfinki0p4/image/upload/v1689412937/currency/${currencyName}-icon.png`}
              alt="cureency-icon"
            />
            <span className="orders-section-sub-list-item-details-price-value">
              {Math.floor(`${product.currentPrice * currencyValue}`)}
            </span>
          </div>
        </div>

        {/* <p className="orders-section-sub-list-item-details-price">
          {product.currentPrice}
        </p> */}
      </div>
    </li>
  );
}

export default OrderItem;

