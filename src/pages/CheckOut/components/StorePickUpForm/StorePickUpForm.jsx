import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeEntireCart } from "../../../../redux/actions/cart";
import useServer from "../../../../hooks/useServer";
import createOrder from "../../functions/createOrder";
import PreLoader from "../../../../components/PreLoader/PreLoader";
import setOrderNumber from "../../../../redux/actions/orders";

function StorePickUpForm() {
  const { placeOrder, deleteCart } = useServer();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    userInfo: { _id, token },
  } = useSelector((state) => state.user);
  const cartProducts = useSelector((state) => state.cart.cart);

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      phoneNumber: "+380",
    },
    validationSchema: Yup.object({
      emailAddress: Yup.string().required("Email Address required").email(),
      phoneNumber: Yup.number().required("Phone Number required").min(10, "Minimum length is 10 characters"),
    }),

    onSubmit: async (values) => {
      setLoading(true);
      const newOrderInfo = {
        customerId: _id,
        products: cartProducts,
        email: values.emailAddress,
        mobile: values.phoneNumber,
        delivery: false,
      };
      const orderData = createOrder(newOrderInfo);
      const response = await placeOrder(orderData, token);
      const orderNumber = response.order.orderNo;
      await deleteCart(token);
      dispatch(removeEntireCart());
      setLoading(false);
      dispatch(setOrderNumber(orderNumber));
      navigate("/thankyou");
    },
  });
  return (
    <form className="checkout-section__form" onSubmit={formik.handleSubmit}>
      <div className="checkout-section__form-input-wrapper">
        <input
          className="checkout-section__form-input-field"
          type="text"
          name="emailAddress"
          value={formik.values.emailAddress}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Email"
        />

        {formik.errors.emailAddress && formik.touched.emailAddress ? (
          <label className="checkout-section__form-input-error">{formik.errors.emailAddress}</label>
        ) : null}
      </div>
      <div className="checkout-section__form-input-wrapper">
        <input
          className="checkout-section__form-input-field"
          type="tel"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="+380"
        />

        {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
          <label className="checkout-section__form-input-error">{formik.errors.phoneNumber}</label>
        ) : null}
      </div>
      <button className="checkout-section__form-submit-btn" type="submit">
        Submit
      </button>
      {loading ? <PreLoader fillScreen /> : null}
    </form>
  );
}

export default StorePickUpForm;
