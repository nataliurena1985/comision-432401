import CartWidget from "../../common/cartwidget/CartWidget";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/">
          <h2>Heladeria Tucan</h2>
        </Link>

        <ul className="categories">
          <Link to="/">Limpiar filtros</Link>

          <Link to="/category/cremas">Cremas</Link>
          <Link to="/category/leche">Leche</Link>
          <Link to="/category/chocolates">Chocolates</Link>
          <Link to="/category/frutales">Frutales</Link>
          <Link to="/category/postres ">Postres </Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};

export default Navbar;
