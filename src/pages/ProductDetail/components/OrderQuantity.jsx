import React, { useRef, useState, useEffect } from "react";

export default function OrderQuantity(
    {
      productQuantity, orderQuantity, setOrderQuantity, productID, cart, outOfStock
    }
) {
  const inputOrderQuantityRef = useRef(null);
  const [inCartQuantity, setInCartQuantity] = useState(0);

  useEffect(() => {
    const productInCart = cart.find(({product: {_id: id}}) => id === productID);
    if (productInCart) setInCartQuantity(productInCart.cartQuantity);
  }, [cart]);

  function onIncreaseBtnClick() {
    if (inputOrderQuantityRef.current.value < productQuantity - inCartQuantity) {
      setOrderQuantity(+inputOrderQuantityRef.current.value + 1);
    }
  }
  function onDecreaseBtnClick() {
    if (inputOrderQuantityRef.current.value > 1) {
      setOrderQuantity(inputOrderQuantityRef.current.value - 1);
    }
  }

  function isValidOrderQuantity(inputQuantity, quantity, cartQuantity = 0) {
    return /^[0-9]*$/.test(inputQuantity) && inputQuantity > 0 && inputQuantity <= quantity - cartQuantity;
  }

  function onOrderQuantityChange(event) {
    if (event.target.value === "") {
      setOrderQuantity(event.target.value);
    } else if (isValidOrderQuantity(event.target.value, productQuantity, inCartQuantity)) {
      setOrderQuantity(+event.target.value);
    }
  }
  function onOrderQuantityBlur(event) {
    if (event.target.value === "") {
      inputOrderQuantityRef.current.focus();
    }
  }

  function onOrderQuantityKeyDown(event) {
    if ([69, 187, 189, 190].includes(event.keyCode)) {
      event.preventDefault();
    }
    if (event.keyCode === 38) {
      event.preventDefault();
      onIncreaseBtnClick();
    }
    if (event.keyCode === 40) {
      event.preventDefault();
      onDecreaseBtnClick();
    }
  }

  return <div className={`order-actions__quantity-wrap${outOfStock ? "--hidden" : ""}`}>
    <button className="order-actions__quantity-item order-actions__decrease-btn" onClick={onDecreaseBtnClick} disabled={orderQuantity === 1} title={outOfStock ? "Max quantity of product \n is already in cart" : ""} type="button">-</button>
    <input className="order-actions__quantity-item order-actions__quantity-input" ref={inputOrderQuantityRef} onChange={onOrderQuantityChange} onBlur={onOrderQuantityBlur} onKeyDown={onOrderQuantityKeyDown} disabled={outOfStock} title={outOfStock ? "Max quantity of product \n is already in cart" : ""} type="text" value={orderQuantity}/>
    <button className="order-actions__quantity-item order-actions__increase-btn" onClick={onIncreaseBtnClick} disabled={orderQuantity === productQuantity - inCartQuantity || outOfStock} title={outOfStock ? "Max quantity of product \n is already in cart" : ""} type="button">+</button>
  </div>;
}
