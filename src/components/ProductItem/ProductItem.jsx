import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import "./product-item.css";

export default function ProductItem(props) {
  const { id, productName, productPrice, productImage } = props.data;
  const { addOneMoreItemToCart, cartItemCounter, deleteItemFromCart } =
    useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} alt={`product-${id}`} />
      <div className="description">
        <p className="bold-product-name">{productName}</p>
        <p className="product-price"> ${productPrice}</p>

        <div className="add-and-delete-buttons">
          <button
            className="add-to-cart-btn"
            onClick={() => addOneMoreItemToCart(id)}
          >
            Add To Cart{" "}
            {cartItemCounter[id] > 0 && <> ({cartItemCounter[id]})</>}
          </button>

          <button
            className="cart-item-delete"
            onClick={() => deleteItemFromCart(id)}
          >
            <img
              className="delete-icon"
              src={deleteIcon}
              alt="delete-icon"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}
