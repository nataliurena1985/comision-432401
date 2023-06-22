import { menuNavigate } from "../../../routes/menuNavigate";
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
          {menuNavigate.map(({ id, path, title }) => (
            <Link key={id} to={path}>
              {title}
            </Link>
          ))}
        </ul>
        <CartWidget />
      </div>
    </>
  );
};

export default Navbar;
