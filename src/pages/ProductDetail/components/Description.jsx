import React from "react";

export default function Description({
  itemNo, name, description, properties: {brand}, quantity
}) {
  const basicProps = {
    brand,
    stock: quantity,
    article: itemNo
  };

  function onAnchorLinkClick(event) {
    event.preventDefault();
    const targetElement = document.querySelector(`#${event.target.href.split("#")[1]}`);
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  return <div className="product-detail__info">
    <h2 className="product-detail__name">{name}</h2>
    <p className="product-detail__description">{description}</p>
    <a className="product-detail__specs-link" onClick={onAnchorLinkClick} href="#techSpecs">See Tech Specs...</a>
    <div className="product-detail__basic-specs-wrap">
      <div className="product-detail__basic-specs">
        {Object.entries(basicProps).map(([key, value], index) => <p key={index} className={`product-detail__basic-spec product-detail__${key}`}>{key}: <span className="product-detail__basic-spec-value">{value}</span></p>)}
      </div>
    </div>
  </div>;
}