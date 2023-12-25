import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersCabinet from "../UsersCabinet/UsersCabinet";
import Breadcrumb from "../../components/BreadCrumb/BreadCrumb";
import { fetchOrders } from "../../redux/actions/orders";
import OrdersList from "../../components/OrderList/OrderList";

function UserAccount() {
  const [activeComponent, setActiveComponent] = useState(() => {
    return localStorage.getItem("activeComponent") || "account";
  });
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.userInfo.token);

  useEffect(() => {
    if (userToken) {
      dispatch(fetchOrders(userToken));
    }
  }, [userToken]);

  useEffect(() => {
    localStorage.setItem("activeComponent", activeComponent);
  }, [activeComponent]);

  const handleProfileButtonClick = () => {
    setActiveComponent("account");
  };

  const handleMyOrdersButtonClick = () => {
    setActiveComponent("ordersList");
  };

  return (
    <div className="userdetails-section">
      <Breadcrumb />
      <div className="container">
        <div className="useraccount-section-btn">
          <button
            className={`useraccount-section-btn-toggle ${activeComponent === "account" ? "active" : ""
              }`}
            type="button"
            onClick={handleProfileButtonClick}
          >
            My Account
          </button>
          <button
            className={`useraccount-section-btn-toggle ${activeComponent === "ordersList" ? "active" : ""
              }`}
            type="button"
            onClick={handleMyOrdersButtonClick}
          >
            My orders
          </button>
        </div>
        {activeComponent === "account" ? <UsersCabinet /> : <OrdersList/>}
      </div>
    </div>
  );
}

export default UserAccount;
