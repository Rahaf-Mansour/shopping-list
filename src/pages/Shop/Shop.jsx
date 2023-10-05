import React from "react";
import { PRODUCTS } from "../../data/productsData";
import ProductItem from "../../components/ProductItem";
import "./shop.css";

export default function Shop() {
  return (
    <div className="shop">
      <h1 className="shopWelcoming">Welcome To My Shop!</h1>

      <div className="products-container">
        {PRODUCTS.map((product) => (
          <ProductItem data={product} />
        ))}
      </div>
    </div>
  );
}
