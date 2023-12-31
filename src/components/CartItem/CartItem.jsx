import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import "./style.css";

export default function CartItem({ data }) {
  const { id, productName, productPrice, productImage } = data;
  const {
    cartItemCounter,
    addOneMoreItemToCart,
    removeOneMoreItemFromCart,
    deleteItemFromCart,
    updateCartItemCount,
  } = useContext(ShopContext);

  const handleQuantityChange = (e) => {
    const newCount = Number(e.target.value);
    if (!isNaN(newCount) && newCount >= 0) {
      updateCartItemCount(newCount, id);
    }
  };

  return (
    <div className="cartItem">
      <img
        className="product-image"
        src={productImage}
        alt={`${productName}-product`}
      />
      <div className="description">
        <p>
          <strong>{productName}</strong>
        </p>
        <p>Price: ${productPrice.toFixed(2)}</p>
        <div className="countHandler">
          <button
            className="minus-btn"
            aria-label={`Remove one ${productName}`}
            onClick={() => removeOneMoreItemFromCart(id)}
          >
            −
          </button>
          <input
            type="number"
            min="0"
            value={cartItemCounter[id]}
            onChange={handleQuantityChange}
          />
          <button
            className="plus-btn"
            aria-label={`Add one more ${productName}`}
            onClick={() => addOneMoreItemToCart(id)}
          >
            +
          </button>
          <button
            className="delete-cart-item-btn"
            aria-label={`Delete ${productName} from cart`}
            onClick={() => deleteItemFromCart(id)}
          >
            <img
              className="delete-icon"
              src={deleteIcon}
              alt={`Delete ${productName}`}
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}
