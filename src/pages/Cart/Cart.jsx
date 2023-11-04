import React, { useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../data/productsData";
import { ShopContext } from "../../context/ShopContextProvider";
import CartItem from "../../components/CartItem/CartItem";
import CheckoutForm from "../../components/CheckoutForm";
import "./style.css";

export default function Cart() {
  const { cartItemCounter, getTotalCartAmount } = useContext(ShopContext);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  const toggleCheckoutForm = useCallback(() => {
    setShowCheckoutForm((prev) => !prev);
  }, []);

  const handleCheckout = useCallback((userData) => {
    console.log("User name and email:", userData);
  }, []);

  const continueShopping = useCallback(() => navigate("/"), [navigate]);

  const renderCartItems = () => {
    return PRODUCTS.filter((product) => cartItemCounter[product.id] !== 0).map(
      (product) => <CartItem key={product.id} data={product} />
    );
  };

  return (
    <div className="cart">
      <h1 className="cart-page-header">Your Cart Items: 🛒</h1>
      {renderCartItems()}
      {totalAmount > 0 ? (
        <div className="continue-and-checkout">
          <p className="total-amount">
            Total Amount: ${totalAmount.toFixed(2)}
          </p>
          <button onClick={continueShopping}> Continue Shopping </button>
          <button onClick={toggleCheckoutForm}> Checkout </button>
        </div>
      ) : (
        <h3> Your Shopping Cart is Empty! ☹️</h3>
      )}
      {showCheckoutForm && (
        <CheckoutForm
          onSubmit={handleCheckout}
          onCancel={toggleCheckoutForm}
          setShowCheckoutForm={setShowCheckoutForm}
        />
      )}
    </div>
  );
}
