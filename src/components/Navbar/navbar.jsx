import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/"> Rahaf's Shop </Link>
        <Link to="/cart">
          <ShoppingCart className="cart-icon" />
        </Link>
      </div>
    </nav>
  );
}
