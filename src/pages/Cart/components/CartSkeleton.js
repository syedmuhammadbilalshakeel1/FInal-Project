import { Link } from "react-router-dom";

const CartSkeleton = () => {
  return (
    <div className={"cart__skeleton"}>
      <img className={"cart__skeleton-img"} src="https://res.cloudinary.com/dfinki0p4/image/upload/v1690040378/empty-cart_qztowj.svg" alt="cart is empty" />
      <p className={"cart__skeleton-text"}>You have no items in your shopping cart</p>
      <Link className={"cart__skeleton-link"} to={"/products"}>Continue Shopping</Link>
    </div>
  );
};

export default CartSkeleton;