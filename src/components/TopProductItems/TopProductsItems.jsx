import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useServer from "../../hooks/useServer";
import ProductCard from "../ProductCard/ProductCard";

function TopProductItem() {
  const { getAllProducts } = useServer();
  const [storedProducts, setStoredProducts] = useState([]);


  useEffect(() => {

    getAllProducts()
      .then((result) => {
        const originalProducts = [...result];
        const selectedProducts = [];
        while (selectedProducts.length < 8 && originalProducts.length > 0) {
          const randomIndex = Math.floor(Math.random() * originalProducts.length);
          const randomElement = originalProducts[randomIndex];
          selectedProducts.push(randomElement);
          originalProducts.splice(randomIndex, 1);
        }
        setStoredProducts(selectedProducts);
      });
  }, [] );

  return (
    <section className={"top-product__wrapper"}>
      <div className="container flex_container">
        <h2 className={"top-product"}>Top Products</h2>
        <div className="top-product__card">
          {storedProducts.map((e) => (
            <ProductCard item={e} key={e._id} />
          ))}
        </div>
        <Link className={"top-product__btn-allProduct"} to="/products">
          All Products
          <svg className={"top-product__svg"} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16666 10H15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 4.16667L15.8333 10L10 15.8333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default TopProductItem;