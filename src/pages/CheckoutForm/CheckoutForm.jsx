import React, { useState } from "react";
import "./checkout-form.css";

const CheckoutForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <p> To complete the order, please fill your info:</p>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <div className="submit-button">
        <button type="submit">Submit Order</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
