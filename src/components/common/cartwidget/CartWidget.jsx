import { useState } from "react";
// import { BsCart4 } from "react-icons/bs";
import "./Cartwidget.css";

// import  from "./CartWidget.module.css";

// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const [cart, setCart] = useState(0);
  // const { cardt, counter } = styles;

  return (
    <>
      <div className="counter ">
        {/* <ShoppingCartIcon /> */}
        <Link to="/carrito">
          <Badge badgeContent={4} color="primary">
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
