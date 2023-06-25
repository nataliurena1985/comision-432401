import { useState } from "react";
// import { BsCart4 } from "react-icons/bs";
import "./Cartwidget.css";

// import  from "./CartWidget.module.css";

// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function CartWidget() {
  const [cart, setCart] = useState(0);
  // const { cardt, counter } = styles;

  const { getTotalItems } = useContext(CartContext);

  let totalItems = getTotalItems();

  return (
    <>
      <div className="counter ">
        {/* <ShoppingCartIcon /> */}
        <Link to="/carrito">
          <Badge badgeContent={totalItems} showZero color="primary">
            <BsFillCartCheckFill color="#FF00BF" size="38px" />
          </Badge>
        </Link>
        <button onClick={() => setCart(cart + 1)}>
          <span>{cart}</span>
        </button>

        {/* <BsCart4 /> */}
      </div>
    </>
  );
}
