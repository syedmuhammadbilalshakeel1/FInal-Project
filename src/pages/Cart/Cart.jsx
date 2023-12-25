import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CartList from "../../components/CartList/CartList";
import TotalBlock from "./components/TotalBlock";
import CartHeader from "./components/CartHeader";
import CartSkeleton from "./components/CartSkeleton";
import { fetchCart } from "../../redux/actions/cart";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Cart = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.userInfo.token);
  const cartProducts = useSelector((state) => state.cart.cart);

  useEffect(() => {
    if (cartProducts.length === 0 && userToken) {
      dispatch(fetchCart(userToken));
    }
  }, [userToken]);

  return (
    <>
       <BreadCrumb/>
      <section className="cart-section">
        <div className={"container"}>
          {cartProducts.length !== 0 ? (
            <>
              <CartHeader />
              <CartList />
              <TotalBlock />
            </>
          ) : (
            <CartSkeleton />
          )}
        </div>

      </section>
    </>
  );
};

export default Cart;