import { useState } from "react";

import "./Cartwidget.css";

import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function CartWidget() {
  const { getTotalItems } = useContext(CartContext);

  let totalItems = getTotalItems();

  return (
    <>
      <div className="counter ">
        <Link to="/carrito">
          <Badge badgeContent={totalItems} showZero color="primary">
            <BsFillCartCheckFill color="#FF00BF" size="44px" />
          </Badge>
        </Link>
      </div>
    </>
  );
}
