import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

export default function RecentlyViewedProducts(props) {
  const recentlyViewed = useSelector((state) => state.recentlyProducts);

  return (
    <section className="all-product__wrapper last">
        {recentlyViewed.length !== 0
            ? <div className="container flex_container">
            <h2 className="recently-viewed__title">Recently Viewed Products</h2>
            <div
                className={props.isCardView ? "all-product__card recently-card" : "all-product__card-rows recently-card"}>
                {recentlyViewed.map((product) => (
                    <ProductCard isCardView={props.isCardView} active={props.active} item={product} key={product._id}/>
                ))}
            </div>
        </div>
            : <></>}
    </section>
    );
}
