import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import "./CartItem.css";

export default function CartItem(props) {
  const { id, productName, productPrice, productImage } = props.data;
  const {
    cartItemCounter,
    addOneMoreItemToCart,
    removeOneMoreItemFromCart,
    deleteItemFromCart,
    updateCartItemCount,
  } = useContext(ShopContext);
  return (
    <div className="cartItem">
      <img className="product-image" src={productImage} alt={`product-${id}`} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${productPrice}</p>
        <div className="countHandler">
          <div className="middle-buttons">
            <button
              className="minus-btn"
              onClick={() => removeOneMoreItemFromCart(id)}
            >
              -
            </button>
            <input
              value={cartItemCounter[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button
              className="plus-btn"
              onClick={() => addOneMoreItemToCart(id)}
            >
              +
            </button>
          </div>

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
