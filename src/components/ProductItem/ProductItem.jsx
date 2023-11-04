import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import deleteIcon from "../../assets/icons/deleteIcon.png";
import "./style.css";

export default function ProductItem({ data }) {
  const { id, productName, productPrice, productImage } = data;
  const { addOneMoreItemToCart, cartItemCounter, deleteItemFromCart } =
    useContext(ShopContext);
  const itemCount = cartItemCounter[id] > 0 && ` (${cartItemCounter[id]})`;

  return (
    <article className="product">
      <img src={productImage} alt={`product-${id}`} />
      <div className="description">
        <h2 className="bold-product-name">{productName}</h2>{" "}
        <p className="product-price"> ${productPrice.toFixed(2)}</p>
        <div className="add-and-delete-buttons">
          <button
            className="add-to-cart-btn"
            onClick={() => addOneMoreItemToCart(id)}
            aria-label={`Add ${productName} to cart`}
          >
            Add To Cart{itemCount}
          </button>
          <button
            className="delete-cart-item-btn"
            onClick={() => deleteItemFromCart(id)}
            aria-label={`Delete ${productName} from cart`}
          >
            <img className="delete-icon" src={deleteIcon} alt="Delete"></img>
          </button>
        </div>
      </div>
    </article>
  );
}
