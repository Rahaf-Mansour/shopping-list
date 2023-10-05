import React, { useContext, useState } from "react";
import { PRODUCTS } from "../../data/productsData";
import { ShopContext } from "../../context/ShopContextProvider";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./cart.css";

export default function Cart() {
  const { cartItemCounter, getTotalCartAmount, checkout } =
    useContext(ShopContext);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const toggleCheckoutForm = () => {
    setShowCheckoutForm(!showCheckoutForm);
  };
  const handleCheckout = (userData) => {
    console.log("User name and email:", userData);
  };

  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items: 🛒</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItemCounter[product.id] !== 0)
            return <CartItem data={product} />;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="continue-and-checkout">
          <p className="total-amount"> Total Amount: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              toggleCheckoutForm();
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h3> Your Shopping Cart is Empty! ☹️</h3>
      )}
      {showCheckoutForm && <CheckoutForm onSubmit={handleCheckout} />}
    </div>
  );
}
