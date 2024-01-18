import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const Cart = ({ cart, limpiar, removeById, total }) => {
  const { getTotalItems } = useContext(CartContext);

  let totalItems = getTotalItems();

  return (
    <div
      style={{
        background: "radial-gradient(at center bottom, #CCC04F, #A7EDE4)",

        paddingTop: "80px",
        paddingBottom: "50px",
      }}
    >
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h3>${item.price}.-</h3>
                  <p>Unidades: {item.quantity}</p>
                </div>
                <Button variant="contained" onClick={() => removeById(item.id)}>
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h1>Descripcion del carrito:</h1>
          <h2>Cantidad de productos: {totalItems} </h2>
          <h3>Precio total: {total}</h3>
          <p>Descuento: 10% </p>
          <h3>Precio final:{total * 0.9} </h3>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button onClick={limpiar} variant="contained">
                Vaciar carrito
              </Button>
              <Link to="/checkout">
                <Button variant="contained">Finalizar compra</Button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Agrega productos</Button>
            </Link>
          )}

          <h1>El total del carrito es ${total}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
