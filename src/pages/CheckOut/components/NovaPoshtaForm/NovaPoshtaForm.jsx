/* eslint-disable react/jsx-no-bind */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useNovaPoshta from "../../../../hooks/useNovaPoshta";
import useDebounce from "../../../../hooks/useDebounce";
import NPSerachLoader from "./components/NPSearchLoader";
import NPSearchSuggestions from "./components/NPSearchSuggestions";
import createOrder from "../../functions/createOrder";
import useServer from "../../../../hooks/useServer";
import { removeEntireCart } from "../../../../redux/actions/cart";
import PreLoader from "../../../../components/PreLoader/PreLoader";
import setOrderNumber from "../../../../redux/actions/orders";

function NovaPoshtaForm() {
  const { findCity, findWarehouse } = useNovaPoshta();
  const { placeOrder, deleteCart } = useServer();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+380");

  const [showCitySuggestions, setShowCitySuggestions] = useState(false);
  const [citySearchResult, setCitySearchResult] = useState([]);
  const [searchedCity, setSearchedCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [showWarehouseSuggestions, setShowWarehouseSuggestions] = useState(false);
  const [warehouseSearchResult, setWarehouseSearchResult] = useState([]);
  const [searchedWarehouse, setSearchedWarehouse] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState("");

  async function handleCitySearch(value) {
    setLoading(true);
    const searchResult = await findCity(value);
    setCitySearchResult(searchResult);
    setLoading(false);
  }
  useDebounce(() => handleCitySearch(searchedCity), 500, [searchedCity]);

  function handleCitySelect(city) {
    setSearchedCity(city);
    setSelectedCity(city);
    setSearchedWarehouse("");
    setShowCitySuggestions(false);
  }

  async function handleWarehouseSearch(value) {
    setLoading(true);
    const searchResult = await findWarehouse(value, selectedCity);
    setWarehouseSearchResult(searchResult);
    setLoading(false);
  }
  useDebounce(() => handleWarehouseSearch(searchedWarehouse), 500, [searchedWarehouse]);

  function handleWarehouseSelect(warehouse) {
    setSearchedWarehouse(warehouse);
    setSelectedWarehouse(warehouse);
    setShowWarehouseSuggestions(false);
  }

  const {
    userInfo: { _id, token },
  } = useSelector((state) => state.user);

  const cartProducts = useSelector((state) => state.cart.cart);

  async function handleSubmit() {
    if (email === "" || phoneNumber === "" || selectedCity === "" || selectedWarehouse === "") return;
    setLoading(true);
    const newOrderInfo = {
      customerId: _id,
      products: cartProducts,
      deliveryAddress: { city: selectedCity, address: selectedWarehouse },
      email,
      mobile: phoneNumber,
      delivery: true,
    };
    const orderData = createOrder(newOrderInfo);
    const response = await placeOrder(orderData, token);
    const orderNumber = response.order.orderNo;
    await deleteCart(token);
    dispatch(removeEntireCart());
    setLoading(false);
    dispatch(setOrderNumber(orderNumber));
    navigate("/thankyou");
  }

  return (
    <div className="np-delivery">
      <h3 className="np-delivery__title">
        <img
          width={50}
          height={50}
          src="https://res.cloudinary.com/dfinki0p4/image/upload/v1690295247/np_sykefc.png"
          alt=""
        />
        Nova Poshta delivery information:
      </h3>
      <form
        action="delivery"
        className="np-delivery__form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          id="fullName"
          value={email}
          placeholder="Enter your email"
        />
        <input
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          placeholder="+380"
        />
        <div className="np-delivery__input-wrap">
          <input
            onInput={(e) => {
              if (e.target.value === "") {
                setSelectedCity("");
                setSearchedWarehouse("");
              }
              setSearchedCity(e.target.value);
            }}
            onFocus={async (e) => {
              handleCitySearch(e.target.value);
              setShowCitySuggestions(true);
            }}
            type="text"
            id="city"
            value={searchedCity}
            placeholder="Search for your city"
          />

          {showCitySuggestions && loading ? <NPSerachLoader /> : null}
          {showCitySuggestions && !loading ? (
            <NPSearchSuggestions
              searchResultArray={citySearchResult}
              selectHandler={handleCitySelect}
              closeHandler={setShowCitySuggestions}
            />
          ) : null}
        </div>
        <div className="np-delivery__input-wrap">
          <input
            disabled={!selectedCity}
            onInput={async (e) => {
              setSearchedWarehouse(e.target.value);
            }}
            onFocus={async (e) => {
              handleWarehouseSearch(e.target.value, selectedCity);
              setShowWarehouseSuggestions(true);
            }}
            type="text"
            id="warehouse"
            value={searchedWarehouse}
            placeholder="Find your warehouse"
          />
          {showWarehouseSuggestions && loading ? <NPSerachLoader /> : null}
          {showWarehouseSuggestions && !loading ? (
            <NPSearchSuggestions
              searchResultArray={warehouseSearchResult}
              selectHandler={handleWarehouseSelect}
              closeHandler={setShowWarehouseSuggestions}
            />
          ) : null}
        </div>
        <button className="checkout-section__form-submit-btn" type="submit">
          Submit
        </button>
      </form>
      {!showWarehouseSuggestions && !showCitySuggestions && loading ? <PreLoader fillScreen /> : null}
    </div>
  );
}

export default NovaPoshtaForm;
