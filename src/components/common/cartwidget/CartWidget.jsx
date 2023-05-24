import { useState } from "react";
// import { BsCart4 } from "react-icons/bs";
import "./Cartwidget.css";

// import  from "./CartWidget.module.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Component } from "react";

export default function CartWidget() {
  const [cart, setCart] = useState(0);
  // const { cardt, counter } = styles;

  return (
    <>
      <ul className="counter ">
        <li>
          <ShoppingCartIcon />
          <button onClick={() => setCart(cart + 1)}>
            Add to cart
            <span>{cart}</span>
          </button>

          {/* <BsCart4 /> */}
        </li>
      </ul>
    </>
  );
}
